import * as React from 'react';

import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';

import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useHistory} from "react-router-dom";
import {useEffect, useState} from "react";
import useAxios from "axios-hooks";
import VariableGlobals from "./VariableGlobals";

import '../css/Asset.css';



const theme = createTheme();

const SignIn = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };


    let history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [roleType, setRoleType] = useState('');


    const [isSubmitClicked, setIsSubmitClicked] = useState(false);

    const [{data, loading, error}] = useAxios('http://localhost:8080/api/' + roleType + '/list');
    //const [{data, loading, error}] = useAxios(`https://abyssinia-job-api.herokuapp.com/api/` + roleType + `/list`);

    var flag = false;

    useEffect(() => {
        {
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
                        });
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
                        });
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
                        });
                    }
                }
                if (flag === false) {
                    alert("INCORRECT EMAIL OR PASSWORD");
                    setIsSubmitClicked(false);
                }
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

        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <Box
                    sx={{
                        marginTop: 30,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >

                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{mt: 1}}>
                        <TextField
                            type={"email"}

                            label={"Enter Email"}
                            placeholder={"Enter Email"}
                            variant={"filled"}
                            fullWidth
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        /> <br/>

                        <TextField
                            type={"password"}

                            label={"Enter Password"}
                            placeholder={"Enter Password"}
                            variant={"filled"}
                            fullWidth
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        /><br/>
                        <div>
                            <select

                                value={roleType}
                                onChange={(event) => setRoleType(event.target.value)}>

                                <option value="teacherAccount">Teacher</option>
                                <option value="studentAccount">Student</option>
                                <option value="admin">Admin</option>


                            </select>
                        </div>

                        <Button className="nav"
                            type="submit"
                            fullWidth
                            variant="contained"


                            sx={{mt: 3, mb: 2}}
                            onClick={() => setIsSubmitClicked(true)}>

                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="/" variant="body2">
                                    {" Sign Up "}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>

            </Container>
        </ThemeProvider>
    </div>
</>
    );


}
export default SignIn;