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
import * as API_PROBLEMS from "../apis/ProblemsAPI";
import {Link} from 'react-router-dom'
import IconButton from "@mui/material/IconButton";
import {AddBox} from "@mui/icons-material";

const ProblemsTable = () => {

    const [problems, setProblems] = useState([])

    useEffect(() => {
        async function fetchData() {
            API_PROBLEMS.getAllProblems((result, status, err) => {
                if (result != null && (status === 200 || status === 201)) {
                    console.log(result)
                    setProblems(result)
                } else {
                    console.log(err)
                }
            })
        }

        fetchData();
    }, [])

    const StyledTableCell = styled(TableCell)(({theme}) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
            padding: "0px 16px"
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
            padding: "0px 16px"
        },
    }));

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

    function rowColor(difficulty) {
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
        <TableContainer component={Paper} sx={{height: "85vh", width: "165vh"}}>
            <Table sx={{overflow: "scroll"}} aria-label="simple table">
                <TableHead variant="outlined">
                    <StyledTableRow>
                        <StyledTableCell>Title</StyledTableCell>
                        <StyledTableCell>Difficulty</StyledTableCell>
                        <StyledTableCell align="right">
                            <IconButton component={Link} to="/problems/add" size="large" color="primary">
                                <AddBox/>
                            </IconButton>
                        </StyledTableCell>
                    </StyledTableRow>
                </TableHead>
                <TableBody>
                    {problems.map((problem) => (
                        <StyledTableRow
                            key={problem.id}
                            sx={{'&:last-child td, &:last-child th': {border: 0}, lineHeight: "14px"}}
                        >
                            <StyledTableCell padding='none' align="left">{problem.title}</StyledTableCell>
                            <StyledTableCell padding='none' align="left">{problem.difficulty}</StyledTableCell>
                            <StyledTableCell padding='none' align="center">
                                <Link to={`/problems/${problem.title}`}
                                    state={{problem: problem}}>
                                    <Button sx={{borderColor: "gray", color: "black"}} variant="outlined">Try</Button>
                                </Link>
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default ProblemsTable