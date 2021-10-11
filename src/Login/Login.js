import React, {useEffect, useState} from 'react';
import {makeStyles} from "@mui/styles";
import {useHistory} from "react-router-dom";

import useAxios from "axios-hooks";
import VariableGlobals from "./VariableGlobals";
import Header from "./Header";


import {
    Button,
    TextField
} from "@mui/material";
import "../css/w3.css";

const useStyles = makeStyles(() => ({
    textField: {
        margin: 7
    },

    Select: {
        backgroundColor: "#e8eaf6",
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        width: "100%",
        padding: 15,
        fontSize:18,
        border: "none",
        marginBottom: 7
    }
}));

const Login = () => {


    const classes = useStyles();
    let history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [roleType, setRoleType] = useState('');


    const [isSubmitClicked, setIsSubmitClicked] = useState(false);

    const [{data, loading, error}] = useAxios('http://localhost:8080/api/'+ roleType +'/list');
    //const [{data, loading, error}] = useAxios(`https://abyssinia-job-api.herokuapp.com/api/` + roleType + `/list`);

    var flag = false;

    useEffect(() => {
        if (isSubmitClicked === true) {

            if (roleType === 'teacherAccount') {
                {
                    data.map((row) => {
                        if ((row.email === email) && (row.password === password)) {
                            VariableGlobals.x = row.id;
                            flag = true;
                            setIsSubmitClicked(false);
                            history.push('/classes');
                        }
                    })
                }
            } else if (roleType === 'studentAccount') {
                {
                    data.map((row) => {
                        if ((row.email === email) && (row.password === password)) {
                            VariableGlobals.x = row.id;
                            flag = true;
                            setIsSubmitClicked(false);
                            history.push('/ListStudents');
                        }
                    })
                }
            } else if (roleType === 'admin') {
                {
                    data.map((row) => {
                        if ((row.email === email) && (row.password === password)) {
                            VariableGlobals.x = row.id;
                            flag = true;
                            setIsSubmitClicked(false);
                            history.push('/ListTeacher');
                        }
                    })
                }
            }
            if (flag === false) {
                alert("INCORRECT EMAIL OR PASSWORD");
                setIsSubmitClicked(false);
            }
        }
    }, [email, password, isSubmitClicked]);

    return (
        <>


            <div className="bg-img2">

                <div className="register">
                    <div className="topnav">
                        <a href="/Classes">Classes</a>
                        <a href="/CreateContactUs">Contact Us</a>
                        <a href="/ListStudents">Students</a>
                        <a href="/ListTeachers">Teacher</a></div>
                </div>

                <div className="form-container" style={{height:"600px"}}>


                <div className="form-content-right">
                    <forms className="form">
                        <h1>Login</h1>
                        <div className="form-inputs">

                            <TextField
                                type={"email"}
                                className={classes.textField}
                                label={"Enter Email"}
                                placeholder={"Enter Email"}
                                variant={"filled"}
                                fullWidth
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                            /> <br/>

                            <TextField
                                type={"password"}
                                className={classes.textField}
                                label={"Enter Password"}
                                placeholder={"Enter Password"}
                                variant={"filled"}
                                fullWidth
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                            /><br/>

                            <div>
                                <select
                                    className={classes.Select}
                                    value={roleType}
                                    onChange={(event) => setRoleType(event.target.value)}>

                                    <option value="teacherAccount">Teacher</option>
                                    <option value="studentAccount">Student</option>
                                    <option value="admin">Admin</option>


                                </select>
                            </div>

                        </div>
                        <Button
                            className="w3-button w3-green w3-border  w3-round-large w3-center w3-large"
                            value={"contained"}
                            color={"primary"}
                            onClick={() => setIsSubmitClicked(true)}>
                            Login
                        </Button>
                    </forms>
                </div>

            </div>
        </div>

            </>

    );

}
            export default Login;