import React from 'react'
import {Avatar, Box, Button, Grid, Link, Paper, TextField, Typography} from "@mui/material";
import '../styles/loginRegisterStyle.css'
import {FacebookRounded, FacebookSharp, GitHub, Google, LinkedIn, LockOutlined, Twitter} from "@mui/icons-material";
const Login = () =>{
    return(
        <Grid>
            <Paper elevation={10} className={`login_form`}>
                <Grid align="center">
                    <Avatar className={'avatar_style'}><LockOutlined/></Avatar>
                    <h2>Sign in</h2>
                </Grid >
                <TextField required={true} label="Email" placeholder="Enter email" variant="standard" fullWidth={true} />
                <TextField required={true} type="password" label="Password" placeholder="Enter password" variant="standard" fullWidth={true} />
                <br/>
                <Button type="Submit" variant="contained" fullWidth={true} className={'button_style'}
                        onClick={() => {
                            console.info("I'm a button")
                        }}>Sign in</Button>
                <br/>
                <Grid spacing={3} align="left">
                    <Link href="#" color="inherit" align="left"
                        onClick={() => {
                            console.info("I'm a link")
                    }}
                    >Forgot password?</Link>
                </Grid>
                <br/>
                <Box sx={{textAlign: 'center'}}>Or you can sign in with</Box>

                <div style={{padding: 15}}>
                <Grid fullWidth={true} container >
                    <Grid align="center" item xs={3}><Avatar style={{background:"#3b5998"}}><FacebookRounded/></Avatar></Grid>
                    <Grid align="center" item xs={3}><Avatar style={{background:"#BB001B"}}><Google/></Avatar></Grid>
                    <Grid align="center" item xs={3}><Avatar style={{background:"black"}}><GitHub/></Avatar></Grid>
                    <Grid align="center" item xs={3}><Avatar style={{background:"#1DA1F2"}}><Twitter/></Avatar></Grid>
                </Grid>
                </div>
            </Paper>
        </Grid>
    )
}

export default Login