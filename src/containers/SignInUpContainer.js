import React, {useState} from 'react'
import {Box, Paper, Tab, Tabs, Typography} from "@mui/material";
import SignUp from "../components/sign-in-up/SignUp";
import Login from "../components/sign-in-up/Login";

const SignInUpContainer = () =>{

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [value,setValue]=useState(0)
    function TabPanel(props) {
        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box>
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </div>
        );
    }

    return (
        <Paper elevation={10} className={`container`}>
            <Tabs variant="fullWidth"
                value={value}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChange}>
                <Tab label="Sign In" />

                <Tab label="Sign Up" />
            </Tabs >
            <TabPanel className={'tab_panel'} value={value} index={0}>
                <Login handleChange={handleChange}/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <SignUp/>
            </TabPanel>
        </Paper>


    )
}

export default SignInUpContainer;