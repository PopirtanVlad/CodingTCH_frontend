import React, {useEffect, useState} from 'react'
import {Accordion, Box, Card, Grid, Paper, Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material"
import {styled} from '@mui/material/styles';
import * as API_SUBMISSION from "../../apis/SubmissionsAPI.js";
import CodeMirror from "@uiw/react-codemirror";
import {java} from '@codemirror/lang-java';
import {python} from '@codemirror/lang-python'
import {cpp} from '@codemirror/lang-cpp'
import Typography from "@mui/material/Typography";
import {Link} from "react-router-dom";
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';

const SubmissionDetails = () => {


    const Accordion = styled((props) => (
        <MuiAccordion disableGutters elevation={0} square {...props} />
    ))(({theme}) => ({
        border: `1px solid ${theme.palette.divider}`,
        '&:not(:last-child)': {
            borderBottom: 0,
        },
        '&:before': {
            display: 'none',
        },
    }));

    const [submission, setSubmission] = useState({
        solution: '',
        problem: {},
        submissionPreview: {},
        testResults: [1, 2, 3]
    })

    function changeEditorText() {
        switch (submission.programmingLanguage) {
            case "Python":
                return python()
            case "C":
                return cpp()
            default:
                return java()
        }
    }

    const AccordionSummary = styled((props) => (
        <MuiAccordionSummary
            expandIcon={<ArrowForwardIosSharpIcon sx={{fontSize: '0.9rem'}}/>}
            {...props}
        />
    ))(({theme}) => ({
        backgroundColor:
            theme.palette.mode === 'dark'
                ? 'rgba(255, 255, 255, .05)'
                : 'rgba(0, 0, 0, .03)',
        flexDirection: 'row-reverse',
        '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
            transform: 'rotate(90deg)',
        },
        '& .MuiAccordionSummary-content': {
            marginLeft: theme.spacing(1),
        },
    }));

    const AccordionDetails = styled(MuiAccordionDetails)(({theme}) => ({
        padding: theme.spacing(2),
        borderTop: '1px solid rgba(0, 0, 0, .125)',
    }));

    useEffect(() => {
        async function fetchData() {
            const submissionID = window.location.pathname.split('/')[2]
            API_SUBMISSION.getSubmissionByID(submissionID, (result, status, err) => {
                if (result != null && (status === 200 || status === 201)) {
                    setSubmission(result)
                } else {
                    console.log(err)
                }
            })
        }

        fetchData();
    }, [])

    const [expanded, setExpanded] = React.useState(-1);

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    function returnTestResult(success){
        if(success){
            return "SUCCESS"
        }
        else{
            return "FAILED"
        }
    }

    function returnTestColor(success){
        if(success){
            return "#7dee7d"
        }
        else{
            return "#f97373"
        }
    }

    return (
        <Box>
            <Card variant="outlined" sx={{borderColor: "#1A2930", borderWidth: 'thick thick thin', width: "80vw"}}>
                <Box sx={{backgroundColor: "#1A2930", width: "80vw"}}>
                    <Typography component={Link} to={`/problems/${submission.problem.title}`}
                                style={{color: "white", fontWeight: 600}}
                                variant="h6">{submission.problem.title}</Typography>
                </Box>
                <br/>
                <Typography variant="body1">{submission.problem.statement}</Typography>
                <br/>
            </Card>
            <br/>
            <Card variant="outlined" sx={{borderColor: "#1A2930", borderWidth: 'thick thick thin', width: "80vw"}}>
                <Box sx={{backgroundColor: "#1A2930", width: "80vw"}}>
                    <Typography style={{color: "white", fontWeight: 600}} variant="h6">Details</Typography>
                </Box>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell color="white">Upload Date</TableCell>
                            <TableCell align={"left"}>{submission.submissionPreview.uploadDate}</TableCell>
                            <TableCell>Upload Time</TableCell>
                            <TableCell align={"left"}>{submission.submissionPreview.uploadTime}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Memory Limit</TableCell>
                            <TableCell align={"left"}>{submission.problem.memoryLimit}</TableCell>
                            <TableCell>Time Limit</TableCell>
                            <TableCell align={"left"}>{submission.problem.timeLimit}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Programming Language</TableCell>
                            <TableCell align={"left"}>{submission.programmingLanguage}</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell align={"left"}>{submission.submissionPreview.submissionStatus}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Card>
            {submission.testResults.map((testResult, index) => (
                <Accordion expanded={expanded === index} onChange={handleChange(index)}>
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                        <Typography>Test #{index + 1}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Table>
                            <TableHead sx={{backgroundColor: "#1A2930"}}>
                                <TableRow>
                                    <TableCell sx={{color: "white"}}>Memory Used</TableCell>
                                    <TableCell sx={{color: "white"}}align={"left"}>Time Spent</TableCell>
                                    <TableCell sx={{color: "white"}}>Status</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow sx={{backgroundColor: returnTestColor(testResult.testStatus)}}>
                                    <TableCell >{testResult.testMemoryUsed}</TableCell>
                                    <TableCell  align={"left"}>{testResult.testTimeElapsed}</TableCell>
                                    <TableCell >{returnTestResult(testResult.testStatus)}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </AccordionDetails>
                </Accordion>
            ))}

            <br/>
            <Card variant="outlined" sx={{borderColor: "#1A2930", borderWidth: 'thick thin thin', width: "80vw"}}>
                <Box sx={{backgroundColor: "#1A2930", width: "80vw"}}>
                    <Typography style={{color: "white", fontWeight: 600}} variant="h6">Solution</Typography>
                </Box>
                <CodeMirror
                    value={submission.solution}
                    maxHeight="30vh"
                    theme="dark"
                    width="80vw"
                    //extensions={[changeEditorText]}
                    readOnly="true"
                />
            </Card>
        </Box>
    );
}

export default SubmissionDetails