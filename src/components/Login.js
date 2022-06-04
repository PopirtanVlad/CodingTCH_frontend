import React, {useState} from 'react'
import {Avatar, Box, Button, Grid, Paper, TextField} from "@mui/material";
import '../styles/loginRegisterStyle.css'
import {FacebookRounded, GitHub, Google, LockOutlined, Twitter} from "@mui/icons-material";
import * as API_USERS from "../apis/SignInUpAPI"
import {Link} from 'react-router-dom'
import {TokenHeader} from "../apis/Commons";

const Login = (props) =>{

    const [loginFields, setLoginFields] = useState({
        email: "",
        password: ""
    })

    const handleFormChange = (input) => (e) =>{
        e.preventDefault()
        setLoginFields(({...loginFields, [input]: e.target.value}))
    }

    const handleLogin = (e) =>{
        return API_USERS.login(loginFields, (result, status, err) => {
            if(result != null && (status === 200 || status === 201)){
                sessionStorage.setItem(TokenHeader, result.accessToken)
            }else{
                console.log(err)
            }
        })
    }

    return(
        <Grid>
            <Paper elevation={10} className={`login_form`}>
                <Grid align="center">
                    <Avatar className={'avatar_style'}><LockOutlined/></Avatar>
                    <h2>Sign in</h2>
                </Grid >
                <TextField onChange={handleFormChange("email")} required={true} label="Email" placeholder="Enter email" variant="standard" fullWidth={true} />
                <TextField onChange={handleFormChange("password")} required={true} type="password" label="Password" placeholder="Enter password" variant="standard" fullWidth={true} />
                <br/>
                <Button component={Link} to="/problems" variant="contained" fullWidth={true} className={'button_style'}
                        onClick={handleLogin}>Sign in</Button>
                <br/>
                <Grid spacing={3} align="left">
                    {/*<Link href="#" color="inherit" align="left"*/}
                    {/*    onClick={() => {*/}
                    {/*        console.info("I'm a link")*/}
                    {/*}}*/}
                    {/*>Forgot password?</Link>*/}
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