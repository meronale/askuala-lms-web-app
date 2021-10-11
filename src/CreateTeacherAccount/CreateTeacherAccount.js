import React, {useEffect, useState} from 'react';
import '../css/Asset.css';
import '../css/background.PNG';
import TextField from "@mui/material/TextField";
import axios from "axios";
import ListStudents from "../ListStudents/ListStudents";
import {Route} from "react-router-dom";
import {Router} from "@mui/icons-material";
import {Button} from "@mui/material";
import CreateContactUs from "../CreateContactUs/CreateContactUs";
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

const CreateTeacherAccount = () => {
    let history = useHistory();

    const  classes= useStyles();
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [department, setDepartment] = useState('');
    const [experience, setExperience] = useState('');
    const [certification, setCertification] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [registrationDate, setRegistrationDate] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isSubmitClicked, setIsSubmitClicked] = useState(false);


    useEffect(() =>
    {
        if (isSubmitClicked === true) {

            if (password === confirmPassword) {
                axios.post(
                    "http://localhost:8080/api/teacherAccount/create",
                    {

                        "firstName": firstName,
                        "middleName": middleName,
                        "lastName": lastName,
                        "email": email,
                        "department": department,
                        "experience": experience,
                        "certification": certification,
                        "phoneNumber": phoneNumber,
                        "dateOfBirth": dateOfBirth,
                        "registrationDate": registrationDate,
                        "password": password


                    }
                )
                    .then((response) => console.log(response.data))
                    .catch((error) => {
                        console.log(error);
                        alert("not submitted correctly: " + error.error);
                    })
                setIsSubmitClicked(false);
            } else {
                alert("password and confirmed password mismatch!");
                setIsSubmitClicked(false);
            }


        }
    }
    , [firstName, middleName, lastName, email, department, phoneNumber,certification,experience, dateOfBirth, registrationDate, password, confirmPassword, isSubmitClicked]);


    return (

        <>
            <form>
                <div className="bg-img2">

                    <div className="register">
                        <div className="topnav">
                            <a href="/home">Home</a>
                            <a href="/Classes">Classes</a>
                            <a href="/CreateContactUs">Contact Us</a>
                            <a href="/ListStudents">Login</a></div>
                    </div>

                    <div className="createAcc">
                        <p> Create your Account</p>
                    </div>
                    <div className="formdecoration">

                        <TextField
                            type={"text"}
                            autoFocus={true}
                            label={"First Name"}
                            value={firstName}
                            placeholder={"your name"}
                            onChange={(event) => setFirstName(event.target.value)}
                            variant="outlined"/>
                    </div>
                    <div className="formdecoration">
                        <TextField
                            type={"text"}
                            autoFocus={true}
                            label={"Middle Name"}
                            value={middleName}
                            placeholder={"your middle name"}
                            onChange={(event) => setMiddleName(event.target.value)}
                            variant="outlined"/>
                    </div>
                    <div className="formdecoration">
                        <TextField
                            type={"text"}
                            autoFocus={true}
                            label={"Last Name"}
                            value={lastName}
                            placeholder={"your last name"}
                            onChange={(event) => setLastName(event.target.value)}
                            variant="outlined"/>
                    </div>
                    <div className="formdecoration">
                        <TextField
                            type={"email"}
                            autoFocus={true}
                            label={"Email"}
                            value={email}
                            placeholder={"your email"}
                            onChange={(event) => setEmail(event.target.value)}
                            variant="outlined"/>
                    </div>

                    <div className="formdecoration">
                        <TextField
                            type={"text"}
                            autoFocus={true}
                            label={"Department"}
                            value={department}
                            placeholder={"your department"}
                            onChange={(event) => setDepartment(event.target.value)}
                            variant="outlined"/>
                    </div>
                    <div className="formdecoration">
                        <TextField
                            type={"text"}
                            autoFocus={true}
                            label={"experience"}
                            value={experience}
                            placeholder={"your experience"}
                            onChange={(event) => setExperience(event.target.value)}
                            variant="outlined"/>
                    </div>
                    <div className="formdecoration">
                        <TextField
                            type={"text"}
                            autoFocus={true}
                            label={"certification"}
                            value={certification}
                            placeholder={"your certification"}
                            onChange={(event) => setCertification(event.target.value)}
                            variant="outlined"/>
                    </div>
                    <div className="formdecoration">
                        <TextField
                            type={"text"}
                            autoFocus={true}
                            label={"Phone Number"}
                            value={phoneNumber}
                            placeholder={"your phone"}
                            onChange={(event) => setPhoneNumber(event.target.value)}
                            variant="outlined"/>
                    </div>
                    <div className="dateof">
                        <p> Your Date of birth</p>
                    </div>
                    <div className="formdecoration">
                        <TextField
                            type={"date"}
                            autoFocus={true}
                            value={dateOfBirth}
                            onChange={(event) => setDateOfBirth(event.target.value)}
                            variant="outlined"/>
                    </div>
                    <div className="dateof">
                        <p> Registration Date</p>
                    </div>
                    <div className="formdecoration">
                        <TextField
                            type={"date"}
                            autoFocus={true}
                            value={registrationDate}
                            placeholder={"your phone"}
                            onChange={(event) => setRegistrationDate(event.target.value)}
                            variant="outlined"/>
                    </div>
                    <div className="formdecoration">
                        <TextField
                            type={"password"}
                            autoFocus={true}
                            label={"password"}
                            value={password}
                            placeholder={" Enter new password"}
                            onChange={(event) => setPassword(event.target.value)}
                            variant="outlined"/>
                    </div>
                    <div className="formdecoration">

                        <TextField
                            type={"password"}
                            autoFocus={true}
                            label={"Confirm password"}
                            value={confirmPassword}
                            placeholder={"Confirm your password"}
                            onChange={(event) => setConfirmPassword(event.target.value)}
                            variant="outlined"/>
                    </div>

                <div className="register">
                    <div className="nav">
                        <button
                            className={classes.button}
                            variant={"contained"}
                            color={"primary"}
                            onClick={() => setIsSubmitClicked(true)}

                        >
                            Create Account
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

                </switch>
                <switch>
                    <Route exact path="/">

                        <div className="bg-img">

                            <div className="register">
                                <div className="topnav">
                                    <a href="/App"> Home </a>

                                    <a href="/CreateContactUs">Contact Us</a>
                                    <a href="/ListStudents">Students</a>

                                </div>
                            </div>

                        </div>


                    </Route>
                </switch>
            </Router>
        </>
    );

}
export default CreateTeacherAccount;

