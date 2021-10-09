import React, {useEffect, useState} from 'react';
import '../css/Asset.css';

import TextField from "@mui/material/TextField";
import axios from "axios";
import {Router} from "@mui/icons-material";
import {Route} from "react-router-dom";
import ListStudents from "../ListStudents/ListStudents";
import thanks from "../Thanks/thanks";
import Classes from "../Classes/Classes";
import {Box, Button} from "@mui/material";



const CreateContactUs = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitClicked, setIsSubmitClicked] = useState(false);


    useEffect(() => {
        if (isSubmitClicked === true) {
            if(TextField === ""){
                // string is empty, do something

                axios.post(
                    "https://askuala-web.herokuapp.com/api/contactUs/create",
                    {

                        "fullName": fullName,
                        "email": email,
                        "message": message,

                    })

        }else {
                alert("empity string");
            }}

    }, [fullName,  email, message, isSubmitClicked]);


    return (
        <>
        <form>
            <div className="bg-img3">


                <div className="register">
                    <div className="topnav">
                        <a href="/App">Home</a>
                        <a href="/Classes">Classes</a>
                        <a href="/ListStudents">Students</a></div>
                </div>

                <div className="connect">
                    <h3> Get Connected</h3>
                <h6>Send us your Feedback!!</h6>
                </div>

                <div className="formdecoration">

                    <TextField
                        type={"text"}
                        autoFocus={true}
                        label={"Full Name"}
                        value={fullName}
                        placeholder={"your name"}
                        onChange={(event => setFullName(event.target.value))}
                        variant="outlined"/>

                </div>
                <div className="formdecoration">
                    <TextField
                        error
                        type={"email"}
                        autoFocus={true}
                        label={"Email"}
                        value={email}
                        placeholder={"your email"}
                        onChange={(event => setEmail(event.target.value))}
                        variant="outlined"/>
                </div>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 0, width: '50ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >

                <div className= "formdecoration">
                    <TextField
                        type={"text"}
                        label={"Message"}
                        placeholder={"your Message"}
                        multiline
                        value={message}
                        rows={8}
                        onChange={(event => setMessage(event.target.value))}
                        variant="outlined"/>

                    </div>
                </Box>

                <div className="register">
                    <div className="nav">
                        <a
                           value={isSubmitClicked}
                           onClick={() => setIsSubmitClicked(true)}
                        >Submit</a>

                    </div>
                </div>
            </div>

        </form>
    <Router>
        <switch>

            <Route path="/CreateContactUs">
                <CreateContactUs/>
            </Route>
            <Route path="/ListStudents">

                <ListStudents />

            </Route>
            <Route path="/thanks">

                <thanks />

            </Route>
            <Route path="/Classes">

                <Classes />

            </Route>

        </switch>

    </Router>
</>
    );



}
export default CreateContactUs;

