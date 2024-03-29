import React, {useState} from 'react'
import {Avatar, Box, Button, Grid, Paper, TextField} from "@mui/material";
import '../../styles/loginRegisterStyle.css'
import {FacebookRounded, GitHub, Google, LockOpen, Twitter} from "@mui/icons-material";
import * as API_USERS from "../../apis/SignInUpAPI"
import {useNavigate, useSearchParams} from 'react-router-dom'
import {TokenHeader} from "../../apis/Commons";
import Typography from "@mui/material/Typography";
import {useEffect} from 'react';

const Login = () =>{
    const [errorMessage, setErrorMesage] = useState("")
    const [loginFields, setLoginFields] = useState({
        email: "",
        password: ""
    })
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        async function fetchData() {
            const token = searchParams.get("token")
            if(token != null) {
                sessionStorage.setItem(TokenHeader,token)
                return API_USERS.jwtLogin((result, status, err) => {
                    if(result != null && (status === 200 || status === 201)){
                        console.log(result)
                        sessionStorage.setItem("DISPLAY_NAME", result.displayName)
                        navigate("/problems")
                    }else{
                        setErrorMesage(err.message)
                    }
                })
            }
        }

        fetchData();
    }, [])

    let navigate = useNavigate()

    const handleFormChange = (input) => (e) =>{
        e.preventDefault()
        setLoginFields(({...loginFields, [input]: e.target.value}))
    }

    const handleLogin = (e) =>{
        return API_USERS.login(loginFields, (result, status, err) => {
            if(result != null && (status === 200 || status === 201)){
                sessionStorage.setItem(TokenHeader, result.accessToken)
                sessionStorage.setItem("DISPLAY_NAME", result.userInfo.displayName)
                navigate("/problems")
            }else{
                setErrorMesage(err.message)
            }
        })
    }

    return(
        <Grid>
            <Paper elevation={10} className={`login_form`}>
                <br/>
                <Grid align="center">
                    <Avatar sx={{color: "#1A2930", backgroundColor: "#F7CE3E"}}><LockOpen/></Avatar>
                    <h2>Sign in</h2>
                </Grid >
                <TextField onChange={handleFormChange("email")} required={true} label="Email" placeholder="Enter email" variant="standard" fullWidth={true} />
                <TextField onChange={handleFormChange("password")} required={true} type="password" label="Password" placeholder="Enter password" variant="standard" fullWidth={true} />

                <Button variant="contained" fullWidth={true}
                        onClick={handleLogin} sx={{backgroundColor: "#1A2930", padding: "10ox", margin: "30px auto"}}>Sign in</Button>

                <Typography align="center" sx={{color:"red"}}>{errorMessage}</Typography>

                    <br/>
                <Box sx={{textAlign: 'center'}}>Or you can sign in with</Box>

                <div style={{padding: 15}}>
                    <Grid align="center" item xs={3}><a href="http://localhost:8080/oauth2/authorization/google?redirect_uri=http://localhost:3000"><Avatar style={{background:"#BB001B"}}><Google/></Avatar></a></Grid>
                </div>
            </Paper>
        </Grid>
    )
}

export default Login