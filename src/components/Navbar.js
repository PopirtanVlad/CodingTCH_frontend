import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import {Link, useNavigate} from 'react-router-dom'
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import {ExitToApp} from "@mui/icons-material";
import {TokenHeader} from "../apis/Commons";


const drawerWidth = 240;

const NavBar = () => {


    let navigate = useNavigate()

    const leavePage = () => {
        sessionStorage.clear(TokenHeader)
        navigate("/")
    }

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" sx={{ backgroundColor: "#1A2930", zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        CodingTCH
                    </Typography>
                    <Box sx={{display: 'flex', marginLeft: "85vw"}}>
                        <Typography sx={{paddingTop: 1.5}}>{sessionStorage.getItem("DISPLAY_NAME")}</Typography>
                        <IconButton sx={{color: "white"}} onClick={leavePage} size="large"><ExitToApp/></IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                }}
            >
                <Toolbar />
                <Box sx={{ overflow: 'auto' }}>
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton component={Link} to="/problems">
                                <ListItemText primary="Problems"/>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton component={Link} to="/submissions">
                                <ListItemText primary="Submissions"/>
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
        </Box>
    )
};
export default NavBar;
