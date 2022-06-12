import CodeMirror from '@uiw/react-codemirror';
import {java} from '@codemirror/lang-java';
import {python} from '@codemirror/lang-python'
import {cpp} from '@codemirror/lang-cpp'
import {Box, Button, FormControl, Grid, InputLabel, Paper, Select} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import useWindowDimensions from "../hooks/WindowDimensionHook";
import {useState} from "react";
import {cInitialText, javaInitialText, pythonInitialText} from "../utils/Constants";
import ScrollLock from 'react-scrolllock'





const CodeArea = () => {
    const [textEditorInitialText, setTextEditorInitialText] = useState(javaInitialText)
    const [language, setLanguage] = useState(java())
    const [languageSelect, setLanguageSelect] = useState("Java")
    function submitSolution(){
        console.log("submit")
    }


    const changeEditorText = e => {
        setLanguageSelect(e.target.value)
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
        <ScrollLock>
        <Grid
            sx={{
                width: "53vw",
                height: "100vh",
            }}>
            <Paper elevation={3} sx={{textAlign: "left", fontSize: "18px", height:"97vh"}}>
                    <CodeMirror
                        value={textEditorInitialText}
                        height="97vh"
                        theme="dark"
                        extensions={[language]}
                    />
            </Paper>
            <Paper elevation={1}>
                <Grid container direction={"row"} sx={{width: 700, height: "3vh", textAlign: "left"}}>
                    <FormControl size="small">
                        <Select sx={{borderRadius: 0, width: 100, height: "3vh"}} value={languageSelect}  onChange={changeEditorText}>
                            <MenuItem value={"C"}>C</MenuItem>
                            <MenuItem value={"Java"}>Java</MenuItem>
                            <MenuItem value={"Python"}>Python</MenuItem>
                        </Select>
                    </FormControl>
                    <Button onClick={submitSolution} variant="outlined" sx={{borderRadius:0, borderColor: "gray", color: "black", width: 100, height: "3vh"}}>Submit</Button>
                </Grid>
            </Paper>
        </Grid></ScrollLock>
    );
}

export default CodeArea