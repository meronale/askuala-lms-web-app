import React from "react";
import {useHistory} from "react-router-dom";
import "../css/Header.css"
import {AppBar, Button, IconButton, Toolbar, Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import "../css/w3.css"

const Header = () => {

    let history = useHistory();

    return (
        <AppBar
            style={{background: '#009624'}}
            position="fixed"
        >

            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{mr: 2}}
                >
                </IconButton>
                <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                    <Button color="inherit" onClick={() => history.push("/")}>Abyssinia Job</Button>
                </Typography>

                <div className="w3-dropdown-hover">
                    <button className="w3-button">Create</button>
                    <div className="w3-dropdown-content w3-bar-block w3-card-4">
                        <Button class="w3-bar-item w3-button" color="inherit" onClick={() => history.push('/EmployerRegister')}>Employer Account</Button>
                        <Button class="w3-bar-item w3-button" color="inherit" onClick={() => history.push('/JobSeekerRegister')}>Job Seeker Account</Button>
                    </div>
                </div>

                <Button color="inherit" onClick={() => history.push('/AboutUs')}>About Us</Button>
                <Button color="inherit" onClick={() => history.push('/login')}>Login</Button>
            </Toolbar>
        </AppBar>
    );
}

export default Header;