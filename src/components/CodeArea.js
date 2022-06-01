import CodeMirror from '@uiw/react-codemirror';
import {java} from '@codemirror/lang-java';
import {python} from '@codemirror/lang-python'
import {cpp} from '@codemirror/lang-cpp'
import {Box, Button, FormControl, Grid, InputLabel, Paper, Select} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import useWindowDimensions from "../hooks/WindowDimensionHook";

const javaInitialText = `import java.util.Scanner;

class Solution {
    public static void main(String[] args) {
        
    }
}`;

const CodeArea = () => {

    const {height, width} = useWindowDimensions()

    return (
        <Grid
            sx={{
                width: width/2,
                height: height,
            }}>
            <Paper elevation={3} sx={{textAlign: "left", height:height-30}}>
                    <CodeMirror
                        value={javaInitialText}
                        height="100%"
                        theme="dark"
                        extensions={[java()]}
                    />
            </Paper>
            <Paper elevation={1}>
                <Grid container direction={"row"} sx={{width: 700, height: 30, textAlign: "left"}}>
                    <FormControl size="small">
                        <Select sx={{borderRadius: 0, width: 100, height: 30}}>
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