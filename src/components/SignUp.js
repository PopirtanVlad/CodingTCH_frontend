import {
    Avatar,
    Button,
    FormControlLabel,
    FormLabel,
    Grid,
    Paper, Radio,
    RadioGroup,
    TextField
} from "@mui/material";
import {CheckBox, PlusOneOutlined} from "@mui/icons-material";
import React, {useState} from "react";
import * as API_USERS from "../apis/SignInUpAPI";

const SignUp = () =>{

    const [registerFields, setRegisterFields] = useState({
        displayName: "",
        email: "",
        password: "",
        matchingPassword: ""
    })

    const handleFormChange = (input) => (e) =>{
        e.preventDefault()
        setRegisterFields(({...registerFields, [input]: e.target.value}))
    }

    const handleLogin = (e) =>{
        e.preventDefault()
        return API_USERS.login(registerFields, (result, status, err) => {
            if(result != null && (status === 200 || status === 201)){
                sessionStorage.setItem("AUTH_TOKEN", result.accessToken)
            }else{
                console.log(err)
            }
        })
    }


    return(
        <Grid>
            <Paper elevation={10} style={{height:'55vh'}} className={`login_form`}>
                <Grid align="center">
                    <Avatar className={'avatar_style'}><PlusOneOutlined/></Avatar>
                    <h2>Sign up</h2>
                </Grid >
                <TextField required={true} label="Username" placeholder="Enter username" variant="standard" fullWidth={true} />
                <TextField required={true} type="email" label="Email" placeholder="*@gmail.com" variant="standard" fullWidth={true} />
                <TextField required={true} type="password" label="Password" placeholder="Enter password" variant="standard" fullWidth={true} />
                <TextField required={true} type="password" label="Confirm password" placeholder="Enter password" variant="standard" fullWidth={true} />
                <br/><br/>
                <FormLabel component="legend">You're creating this account as a</FormLabel>
                <RadioGroup aria-label="role" name="role" style={{display: 'initial'}}>
                    <FormControlLabel value="User" control={<Radio/>} label="User"/>
                    <FormControlLabel value="Teacher" control={<Radio/>} label="Teacher"/>
                </RadioGroup>
                <Grid align="left">
                <FormControlLabel control={<CheckBox required name="CheckedA"/>} label="I accept the terms and conditions"/>
                </Grid>
                <Button type="Submit" variant="contained" fullWidth={true} className={'button_style'}
                        onClick={() => {
                            console.info("I'm a button")
                        }}>Sign up</Button>
            </Paper>
        </Grid>
    )
}

export default SignUp