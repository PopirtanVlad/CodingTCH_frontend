import {
    Button,
    Paper, styled,
    Table,
    TableBody,
    TableCell,
    tableCellClasses,
    TableContainer,
    TableHead,
    TableRow
} from "@mui/material";
import {useEffect, useState} from "react";
import * as API_SUBMISSIONS from "../apis/SubmissionsAPI";
import {Link} from 'react-router-dom'

const SubmissionTable  = () => {

    const [submissions, setSubmissions] = useState([])

    useEffect(() =>{
        async function fetchData(){
            API_SUBMISSIONS.getAllSubmissions((result, status, err) => {
                if(result != null && (status === 200 || status === 201)){
                    setSubmissions(result)
                }else{
                    console.log(err)
                }
            })
        }
        fetchData();
    }, [])

    const StyledTableRow = styled(TableRow)(({theme}) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
            height: 60

        },
        '&:last-child td, &:last-child th': {
            border: 0,
            height: 60
        },
    }));

    const StyledTableCell = styled(TableCell)(({theme}) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: "#1A2930",
            color: theme.palette.common.white,
            padding: "0px 16px"
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
            padding: "0px 16px"
        },
    }));


    function rowColor (status) {
        switch (status) {
            case "FAILED":
                return "#d15050"
                break
            case "IN_PROGRESS":
                return "#e9e937"
                break
            case "SUCCESS":
                return "#43da43"
                break
            default:
                return "#FFFFFF"
        }
    }

    return (
        <TableContainer component={Paper} sx={{height: "85vh",width: "80vw"}}>
            <Table sx={{ overflow: "scroll"}} aria-label="simple table">
                <TableHead variant="outlined">
                    <StyledTableRow>
                        <StyledTableCell padding='none' align="left">Submit Date</StyledTableCell>
                        <StyledTableCell padding='none' align="left">Submit Time</StyledTableCell>
                        <StyledTableCell padding='none' align="left">Problem</StyledTableCell>
                        <StyledTableCell padding="none" align="left">Status</StyledTableCell>
                        <StyledTableCell/>
                    </StyledTableRow>
                </TableHead>
                <TableBody>
                    {submissions.map((submission) => (
                        <TableRow
                            key={submission.id}
                            sx={{'&:last-child td, &:last-child th': { border: 0 }, backgroundColor: rowColor(submission.submissionStatus), lineHeight: "14px"}}
                        >
                            <TableCell padding='none' align="left">{submission.uploadDate}</TableCell>
                            <TableCell padding='none' align="left">{submission.uploadTime}</TableCell>
                            <TableCell padding='none' align="left">{submission.problemTitle}</TableCell>
                            <TableCell padding='none' align="left">{submission.submissionStatus.replace('_',' ')}</TableCell>
                            <TableCell padding='none' align="center"><Button variant="outlined" component={Link} to={`/submissions/${submission.id}`}>View</Button></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )

}

export default SubmissionTable