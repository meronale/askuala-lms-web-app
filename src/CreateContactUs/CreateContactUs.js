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
import {makeStyles} from "@mui/styles";
import {useHistory} from "react-router";

const useStyles= makeStyles(
    ()=>({
        textField: {
            margin: 20
        },
        button:{
            padding:2,
            color:"#5B0A36"
        }

    }));

const CreateContactUs = () => {
    let history = useHistory();

    const  classes= useStyles();
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitClicked, setIsSubmitClicked] = useState(false);


    useEffect(() =>
            {
                if (isSubmitClicked === true) {


                     axios.post(
                        "http://localhost:8080/api/contactUs/create",
                        {

                            "fullName": fullName,
                            "email": email,
                            "message": message,
                    }
                )

                    .then((response) => console.log(response.data))
                    .catch((error) => {
                        console.log(error);
                        alert("not submitted correctly: " + error.error);
                    })

            }
            }
        ,[fullName,email,message, isSubmitClicked]);




    return (
        <>
        <form>
            <div className="bg-img3">


                <div className="register">
                    <div className="topnav">
                        <a href="/">Home</a>
                        <a href="/Classes">Classes</a>
                        <a href="/ListStudents">Students</a></div>
                </div>

                <div className="connect">
                    <h3> Get Connected</h3>
                <h6>Send us your Feedback!!</h6>
                </div>

                <div className="formdecoration">

                    <TextField
                        className={classes.textField}
                        type={"text"}
                        autoFocus={true}
                        label={"Full Name"}

                        value={fullName}
                        placeholder={"your name"}
                        onChange={(event)=>setFullName(event.target.value)}
                        variant="outlined"/>

                </div>
                <div className="formdecoration">
                    <TextField

                        type={"email"}
                        autoFocus={true}
                        label={"Email"}
                        value={email}
                        placeholder={"your email"}
                        onChange={(event)=>setEmail(event.target.value)}
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
                        onChange={(event)=>setMessage(event.target.value)}
                        variant="outlined"/>

                    </div>
                </Box>

                <div className="register">
                    <div className="nav">
                        <button
                        className={classes.button}
                        variant={"contained"}
                        color={"primary"}
                        onClick={() => setIsSubmitClicked(true)}

                        >
                            send us comment
                        </button>

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

