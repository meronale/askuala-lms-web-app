import './css/Asset.css';
import './App.css';

import React from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import CreateStudentAccount from "./CreateStudentAccount/CreateStudentAccount.js";
import CreateContactUs from "./CreateContactUs/CreateContactUs.js";
import ListStudents from "./ListStudents/ListStudents";
import Classes from "./Classes/Classes";
function App() {

    return (

                <Router>
                <switch>
                    <Route path="/CreateStudentAccount">
                        <CreateStudentAccount />
                    </Route>
                    <Route path="/CreateContactUs">
                        <CreateContactUs/>
                    </Route>
                    <Route path="/ListStudents">

                        <ListStudents />

                    </Route>
                    <Route path="/Classes">

                        <Classes />

                    </Route>

                </switch>
                    <switch>
                    <Route exact path="/">

                        <div className="bg-img">

                            <div className="register">
                                <div className="topnav">
                                        <a href="/App"> Home </a>
                                        <a href="/Classes">Classes</a>
                                        <a href="/CreateContactUs">Contact Us</a>
                                        <a href="/ListStudents">Students</a>

                                    </div>
                            </div>


                            <div className="slogan1"><p>Askuala online </p></div>

                            <div className="slogan2"><p>learning platform</p></div>
                            <div className="slogan3"><p> Excel in computing</p></div>

                            <div className="register">
                                <div className="nav">
                                    <a href="/CreateStudentAccount"> Get started </a>
                                </div>
                            </div>
                        </div>

                    </Route>
                </switch>
                </Router>






    );
}
export default App;

