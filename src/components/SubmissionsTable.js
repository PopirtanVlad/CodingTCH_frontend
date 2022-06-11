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
                    console.log(result)
                    setSubmissions(result)
                }else{
                    console.log(err)
                }
            })
        }
        fetchData();
    }, [])

    function rowColor (difficulty) {
        switch (difficulty) {
            case 0:
                return "#FF0000"
                break
            case 1:
                return "#FFFF00"
                break
            case 2:
                return "#00FF00"
                break
            default:
                return "#000000"
        }
    }

    return (
        <TableContainer component={Paper} sx={{height: "85vh",width: "165vh"}}>
            <Table sx={{ overflow: "scroll"}} aria-label="simple table">
                <TableHead variant="outlined">
                    <TableRow>
                        <TableCell>Title</TableCell>
                        <TableCell>Difficulty</TableCell>
                        <TableCell/>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {submissions.map((submission) => (
                        <TableRow
                            key={submission.id}
                            sx={{'&:last-child td, &:last-child th': { border: 0 }, lineHeight: "14px"}}
                        >
                            <TableCell padding='none' align="left">{submission.date}</TableCell>
                            <TableCell padding='none' align="left">{submission.difficulty}</TableCell>
                            <TableCell padding='none' align="center"><Button variant="outlined" component={Link} to="/submission">Try</Button></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )

}

export default SubmissionTable