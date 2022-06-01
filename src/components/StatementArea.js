import {Card, CardHeader, Grid, Typography} from "@mui/material";
import useWindowDimensions from "../hooks/WindowDimensionHook";

const StatementArea = () => {
    const {height, width} = useWindowDimensions()

    return (
        <Grid columns={1} rowSpacing={3} container sx={{height: height, width: width/2}}>
            <Grid item>
            <Card title="Hey" variant="outlined" sx={{textAlign: "left", height: height/10, width: width/2}}>
                <Typography variant="h3">
                    HEY
                </Typography>
            </Card>
            </Grid>
            <Grid item sx={{width: width/2}}>YES</Grid>
            <Grid item>YES</Grid>
        </Grid>
    );

}

export default  StatementArea