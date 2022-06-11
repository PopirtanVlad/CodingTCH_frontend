import {
    Button,
    FormControl, Input, Link,
    Paper,
    TextField
} from "@mui/material";
import React, {useState} from 'react'
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import * as API_PROBLEMS from "../apis/ProblemsAPI";

const ProblemDetails = () => {

    const difficulties = [
        {
            value: '0',
            label: 'Easy'
        },
        {
            value: '1',
            label: 'Medium'
        },
        {
            value: '2',
            label: 'Hard'
        }
    ]

    const [problemDetails, setProblemDetails] = useState({
        id: "",
        title: "",
        statement: "",
        difficulty: 0,
        exampleInput: "",
        exampleOutput: "",
        memoryLimit: 0,
        timeLimit: 0,
        files: []
    })

    const saveProblem = (e) =>{
        return API_PROBLEMS.saveProblem(problemDetails, (result, status, err) => {
            if(result != null && (status === 200 || status === 201)){
                console.log(result)
            }else{
                console.log(err)
            }
        })
    }

    const handleFormChange = (input) => (e) =>{
        e.preventDefault()
        if(input === "files"){
            setProblemDetails(({...problemDetails, [input]: e.target.files}))
        }
        else{
            setProblemDetails(({...problemDetails, [input]: e.target.value}))
        }
        console.log(problemDetails)
    }


    return(
        <Paper elevation={1}>
            <FormControl sx={{borderColor: "black"}} sx={{width: "88vw"}}>
                <Typography variant="h5">Title</Typography>
                <TextField onChange={handleFormChange("title")}></TextField>
                <Typography variant="h5">Statement</Typography>
                <TextField onChange={handleFormChange("statement")}
                    multiline
                    rows={12}
                />
                <Typography variant="h5">Difficulty</Typography>
                <TextField
                    onChange={handleFormChange("difficulty")}
                    select
                    value={problemDetails.difficulty}
                >
                    {difficulties.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}</TextField>
                <Typography variant="h5">Example Input</Typography>
                <TextField onChange={handleFormChange("exampleInput")} placeholder="Input: a, b, c"></TextField>
                <Typography variant="h5">Example Output</Typography>
                <TextField onChange={handleFormChange("exampleOutput")} placeholder="Output: z"></TextField>
                <Typography variant="h5">Memory Limit</Typography>
                <TextField onChange={handleFormChange("memoryLimit")}></TextField>
                <Typography variant="h5">Time Limit</Typography>
                <TextField onChange={handleFormChange("timeLimit")} placeholder="In seconds"></TextField>
                <Typography variant="h5">Test inputs</Typography>
                <input
                    onChange={handleFormChange("inputs")}
                    style={{ display: 'none' }}
                    id="upload-tests"
                    multiple
                    type="file"
                />
                <label htmlFor="upload-tests">
                    <Button sx={{borderColor: "gray", color: "gray"}} variant="outlined" component="span">
                        Upload
                    </Button>
                </label>
                <Typography variant="h5">Test references</Typography>
                <input
                    onChange={handleFormChange("refs")}
                    style={{ display: 'none' }}
                    id="upload-refs"
                    multiple
                    type="file"
                />
                <label htmlFor="upload-refs">
                    <Button variant="outlined" sx={{borderColor: "gray", color: "gray"}} component="span">
                        Upload
                    </Button>
                </label>
                <br/>
                <Button type="submit" onClick={saveProblem} component={Link} to={{pathname: '/problems'}} variant="outlined" sx={{borderColor: "gray", color: "black", width: "10vw"}}>Save</Button>
            </FormControl>
        </Paper>

    )
}

export default ProblemDetails