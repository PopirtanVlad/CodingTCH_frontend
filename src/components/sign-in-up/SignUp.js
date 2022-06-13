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
import {AppRegistration, CheckBox, PlusOneOutlined} from "@mui/icons-material";
import React, {useState} from "react";
import * as API_USERS from "../../apis/SignInUpAPI";

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

    const handleSignup = (e) =>{
        return API_USERS.signUp(registerFields, (result, status, err) => {
            if(result != null && (status === 200 || status === 201)){
                console.log("SUCCESS")
            }else{
                console.log(err)
            }
        })
    }


    return(
        <Grid>
            <Paper elevation={10} style={{height:'55vh'}} className={`login_form`}>
                <br/>
                <Grid align="center">
                    <Avatar sx={{color: "#1A2930", backgroundColor: "#F7CE3E"}}><AppRegistration/></Avatar>
                    <h2>Sign up</h2>
                </Grid >
                <TextField required={true} onChange={handleFormChange("displayName")} label="Username" placeholder="Enter username" variant="standard" fullWidth={true} />
                <TextField required={true} onChange={handleFormChange("email")} type="email" label="Email" placeholder="*@gmail.com" variant="standard" fullWidth={true} />
                <TextField required={true} onChange={handleFormChange("password")} type="password" label="Password" placeholder="Enter password" variant="standard" fullWidth={true} />
                <TextField required={true} onChange={handleFormChange("matchingPassword")} type="password" label="Confirm password" placeholder="Enter password" variant="standard" fullWidth={true} />
                <br/><br/>
                <FormLabel component="legend">You're creating this account as a</FormLabel>
                <RadioGroup aria-label="role" name="role" style={{display: 'initial'}}>
                    <FormControlLabel value="User" control={<Radio/>} label="User"/>
                    <FormControlLabel value="Teacher" control={<Radio/>} label="Teacher"/>
                </RadioGroup>
                <Button type="Submit" variant="contained" fullWidth={true} sx={{backgroundColor: "#1A2930", padding: "10ox", margin: "20px auto"}}
                        onClick={() => {
                            handleSignup()
                        }}>Sign up</Button>
            </Paper>
        </Grid>
    )
}

export default SignUp