import * as React from 'react';
import Box from '@mui/material/Box'
import Navbar from "../components/Navbar";
import SubmissionTable from "../components/SubmissionsTable";


export default function SeeSubmissionsContainer() {
    return (
        <Box sx={{ display: 'flex' }}>
            <Navbar/>
            <Box component="main" sx={{margin:10}}>
                <SubmissionTable/>
            </Box>
        </Box>)
}
