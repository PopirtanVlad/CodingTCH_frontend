import React, {useState} from 'react'
import Box from "@mui/material/Box";
import Navbar from "../components/Navbar";
import ProblemDetails from "../components/ProblemDetails";

export default function AddProblemContainer(){
    return (
        <Box sx={{ display: 'flex' }}>
            <Navbar/>
            <Box component="main" sx={{marginLeft: 3, marginTop:12}}>
                <ProblemDetails/>
            </Box>
        </Box>
    )

}
