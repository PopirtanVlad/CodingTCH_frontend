import {Card, ListItem, Paper, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import {ArrowBack} from "@mui/icons-material";
import * as CONSTANTS from '../../utils/Constants'
import List from "@mui/material/List";
import * as API_PROBLEMS from "../../apis/ProblemsAPI";
import React, {useEffect, useState} from "react";


const StatementArea = () => {

    const [problem, setProblem] = useState({
        id: "",
        title: "",
        statement: "",
        difficulty: 0,
        exampleInput: "",
        exampleOutput: "",
        memoryLimit: 0,
        timeLimit: 0
    })
    let navigate = useNavigate()
    const leavePage = () => {
        navigate("/problems")
    }

    useEffect(() => {
        async function fetchData() {
            const problemTitle = window.location.pathname.split('/')[2]
            API_PROBLEMS.getProblemByTitle(problemTitle, (result, status, err) => {
                if (result != null && (status === 200 || status === 201)) {
                    setProblem(result)
                } else {
                    console.log(err)
                }
            })
        }

        fetchData();
    }, [])

    return (
        <Paper sx={{width: "47vw", height: "100vh"}}>
            <IconButton onClick={leavePage} size='large'><ArrowBack/></IconButton>
            <Typography style={{fontWeight: 600}} variant="h3">{problem.title}</Typography>
            <Typography style={{color: CONSTANTS.textColor(problem.difficulty)}}
                        variant={"h6"}>{problem.difficulty}</Typography>

            <Card variant="outlined" sx={{p: 4, paddingLeft: 0, textAlign: "left", width: "50vw"}}>
                <Typography variant="body1">{problem.statement}</Typography>
                <br/>
                <Typography style={{fontWeight: 600}} variant="h5">Example:</Typography>
                <List variant="bullet" sx={{backgroundColor: "#C5C6D0",  listStyleType: 'disc' }}>
                    <ListItem sx={{ display: 'list-item' }}> Input: {problem.exampleInput} </ListItem>
                    <ListItem sx={{ display: 'list-item' }}> Output: {problem.exampleOutput} </ListItem>
                </List>
            <br/>
                <Typography style={{fontWeight: 600}} variant="h5">Constraints:</Typography>
                <List variant="bullet" sx={{backgroundColor: "#C5C6D0",  listStyleType: 'disc' }}>
                    <ListItem sx={{ display: 'list-item' }}> Time {"<"} {problem.timeLimit} </ListItem>
                    <ListItem sx={{ display: 'list-item' }}> Memory used {"<"} {problem.memoryLimit} </ListItem>
                </List>
            </Card>
        </Paper>
    );

}

export default StatementArea