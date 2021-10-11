import './css/Asset.css';
import './App.css';

import React from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import CreateStudentAccount from "./CreateStudentAccount/CreateStudentAccount.js";
import CreateContactUs from "./CreateContactUs/CreateContactUs.js";
import ListStudents from "./ListStudents/ListStudents";
import Classes from "./Classes/Classes";
import CreateTeacherAccount from "./CreateTeacherAccount/CreateTeacherAccount";
import ListTeachers from "./ListTeachers/ListTeachers";
import Login from "./Login/Login";
import SignIn from "./Login/SignIn";
import Job from "./Job/Job";
function App() {

    return (

                <Router>
                <switch>
                    <Route path="/CreateStudentAccount">
                        <CreateStudentAccount />
                    </Route>
                    <Route path="/CreateTeacherAccount">
                        <CreateTeacherAccount />
                    </Route>
                    <Route path="/CreateContactUs">
                        <CreateContactUs/>
                    </Route>
                    <Route path="/ListStudents">

                        <ListStudents />

                    </Route>
                    <Route path="/ListTeachers">

                        <ListTeachers />

                    </Route>
                    <Route path="/Classes">

                        <Classes />

                    </Route>
                    <Route path="/SignIn">

                        <SignIn />

                    </Route>
                    <Route path="/Job">

                        <Job />

                    </Route>

                </switch>
                    <switch>
                    <Route exact path="/">

                        <div className="bg-img">

                            <div className="register">
                                <div className="topnav">

                                        <a href="/Classes">Classes</a>
                                        <a href="/CreateContactUs">Contact Us</a>
                                        <a href="/ListStudents">Students</a>
                                        <a href="/ListTeachers">Teachers</a>

                                        <a href="/SignIn">SignIn</a>
                                    <a href="/Job">jo</a>

                                    </div>
                            </div>


                            <div className="slogan1"><p>Askuala online </p></div>

                            <div className="slogan2"><p>learning platform</p></div>
                            <div className="slogan3"><p> Excel in computing</p></div>

                            <div className="register">
                                <div className="nav">
                                    <a href="/CreateStudentAccount"> I am a Student </a>
                                </div>
                                <div className="nav">
                                    <a href="/CreateTeacherAccount"> I am a Teacher </a>
                                </div>
                            </div>
                        </div>

                    </Route>
                </switch>
                </Router>






    );
}
export default App;

