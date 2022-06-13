import Navbar from "../components/Navbar";
import Box from "@mui/material/Box";
import StatementArea from "../components/problem-try/StatementArea";
import CodeArea from "../components/problem-try/CodeArea";
import React from 'react'
import {Grid} from "@mui/material";


export default function SubmitSolutionContaine() {
    return (
        <Grid columns={2} sx={{display: 'flex'}}>
            <Grid item>
                <StatementArea/>
            </Grid>
            <Grid>
                <CodeArea/>
            </Grid>
        </Grid>
    )
}

