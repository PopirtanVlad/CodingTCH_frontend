import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Navbar from "../components/Navbar";
import ProblemsTable from "../components/ProblemsTable";


export default function SeeProblemsContainer() {
    return (
        <Box sx={{ display: 'flex' }}>
            <Navbar/>
            <Box component="main" sx={{margin:10}}>
                <ProblemsTable/>
            </Box>
        </Box>)
    ;
}
