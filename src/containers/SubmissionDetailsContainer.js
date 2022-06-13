import {Box,  Paper} from "@mui/material";
import SubmissionDetails from "../components/view-submission/SubmissionDetails";
import Navbar from "../components/Navbar";
import React, {useEffect, useState} from "react";

export default function SubmissionDetailsContainer(){



    return (
        <Box sx={{ display: 'flex' }}>
            <Navbar/>
            <Paper elevation={1} component="main" sx={{height: "100vh", width: "80vw", margin:10}}>
                <SubmissionDetails/>
            </Paper>
        </Box>
    )
}