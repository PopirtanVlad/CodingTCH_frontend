import {Box, Button, Card, CardHeader, Grid, Link, Paper, Typography} from "@mui/material";
import useWindowDimensions from "../hooks/WindowDimensionHook";
import {useLocation} from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import {AddBox, ArrowBack} from "@mui/icons-material";

const StatementArea = _ => {

    const {state} = useLocation()

    return (
        <Paper sx={{width: "50vw", height: "100vh"}}>
            <IconButton component={Link} to="/problems" size="large"><ArrowBack/></IconButton>
            <Typography variant="h3">{state.problem.title}</Typography>
            <Typography variant={"h6"}>{state.problem.difficulty}</Typography>
            <Card variant="outlined" sx={{textAlign: "left", width: "50vw"}}>
                <Typography variant="body1">{state.problem.statement}</Typography>
            </Card>
            <Card>
                <Typography variant="subtitle1">Example:</Typography>
            <Box variant="outlined" sx={{backgroundColor: "#D3D3D3"}}>Input: {state.problem.exampleInput}
                <br/> Output: {state.problem.exampleOutput}</Box>
            </Card>
        </Paper>
    );

}

export default StatementArea