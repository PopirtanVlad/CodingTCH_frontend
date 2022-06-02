import CodeMirror from '@uiw/react-codemirror';
import {java} from '@codemirror/lang-java';
import {python} from '@codemirror/lang-python'
import {cpp} from '@codemirror/lang-cpp'
import {Box, Button, FormControl, Grid, InputLabel, Paper, Select} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import useWindowDimensions from "../hooks/WindowDimensionHook";
import {useState} from "react";
import {cInitialText, javaInitialText, pythonInitialText} from "../utils/Constants";






const CodeArea = () => {
    const [textEditorInitialText, setTextEditorInitialText] = useState(javaInitialText)
    const [language, setLanguage] = useState(java())
    const {height, width} = useWindowDimensions()


    const changeEditorText = e => {
        switch (e.target.value){
            case "Python":
                setTextEditorInitialText(pythonInitialText)
                setLanguage(python())
                break
            case "C":
                setTextEditorInitialText(cInitialText)
                setLanguage(cpp())
                break
            default:
                setTextEditorInitialText(javaInitialText)
                setLanguage(java())
        }
    }

    return (
        <Grid
            sx={{
                width: width/2,
                height: height,
            }}>
            <Paper elevation={3} sx={{textAlign: "left", height:height-30}}>
                    <CodeMirror
                        value={textEditorInitialText}
                        height="100%"
                        theme="dark"
                        extensions={[language]}
                    />
            </Paper>
            <Paper elevation={1}>
                <Grid container direction={"row"} sx={{width: 700, height: 30, textAlign: "left"}}>
                    <FormControl size="small">
                        <Select sx={{borderRadius: 0, width: 100, height: 30}} onChange={changeEditorText}>
                            <MenuItem value={"C"}>C</MenuItem>
                            <MenuItem value={"Java"}>Java</MenuItem>
                            <MenuItem value={"Python"}>Python</MenuItem>
                        </Select>
                    </FormControl>
                    <Button variant="outlined" sx={{borderRadius:0, borderColor: "gray", color: "black", width: 100, height: 30}}>Submit</Button>
                </Grid>
            </Paper>
        </Grid>
    );
}

export default CodeArea