import {Box, Button, Card, CardHeader, Grid, Link, ListItem, makeStyles, Paper, Typography} from "@mui/material";
import {useLocation, useNavigate} from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import {AddBox, ArrowBack} from "@mui/icons-material";
import * as CONSTANTS from '../../utils/Constants'
import List from "@mui/material/List";


const StatementArea = _ => {

    const {state} = useLocation()
    let navigate = useNavigate()
    const leavePage = () => {
        navigate("/problems")
    }

    return (
        <Paper sx={{width: "47vw", height: "100vh"}}>
            <IconButton onClick={leavePage} size='large'><ArrowBack/></IconButton>
            <Typography style={{fontWeight: 600}} variant="h3">{state.problem.title}</Typography>
            <Typography style={{color: CONSTANTS.textColor(state.problem.difficulty)}}
                        variant={"h6"}>{state.problem.difficulty}</Typography>

            <Card variant="outlined" sx={{p: 4, paddingLeft: 0, textAlign: "left", width: "50vw"}}>
                <Typography variant="body1">{state.problem.statement}</Typography>
                <br/>
                <Typography style={{fontWeight: 600}} variant="h5">Example:</Typography>
                <List variant="bullet" sx={{backgroundColor: "#C5C6D0",  listStyleType: 'disc' }}>
                    <ListItem sx={{ display: 'list-item' }}> Input: {state.problem.exampleInput} </ListItem>
                    <ListItem sx={{ display: 'list-item' }}> Output: {state.problem.exampleOutput} </ListItem>
                </List>
            <br/>
                <Typography style={{fontWeight: 600}} variant="h5">Constraints:</Typography>
                <List variant="bullet" sx={{backgroundColor: "#C5C6D0",  listStyleType: 'disc' }}>
                    <ListItem sx={{ display: 'list-item' }}> Time {"<"} {state.problem.timeLimit} </ListItem>
                    <ListItem sx={{ display: 'list-item' }}> Memory used {"<"} {state.problem.memoryLimit} </ListItem>
                </List>
            </Card>
        </Paper>
    );

}

export default StatementArea