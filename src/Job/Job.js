import React, {useEffect, useState} from 'react';
import axios from "axios";
import TextField from "@mui/material/TextField";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import Button from "@mui/material/Button";
import {makeStyles} from "@mui/styles";


const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        //background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,

        color: 'white',
        height: 48,
        padding: '30px',
    },
    TextField: {
        backgroundColor: 'white',
        width: '100%',
        marginBottom: "7px",
        padding: 0
    },
    button: {
        backgroundColor: '#4CAF50', /* Green */
        border: 'none',
        color: 'white',
        padding: '15px 32px',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: 16,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        margin: '4px 2px',
        cursor: 'pointer',
        transitionDuration: '0.4s',
    },

});

const Job = () => {
    const [jobTitle, setJobTitle] = useState('');
    const [jobDescription, setJobDescription] = useState('');
    const [jobRequirement, setJobRequirement] = useState('');
    const [category, setCategory] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [companyLocation, setCompanyLocation] = useState('');
    const [postDate, setPostDate] = useState('');
    const [expireDate, setExpireDate] = useState('');
    const [salary, setSalary] = useState('');

    const [isSubmitClicked, setIsSubmitClicked] = useState(false);

    const classes = useStyles();

    useEffect(() => {

        if (isSubmitClicked === true) {

            //axios.post("http://localhost:9090/api/job/create",
            axios.post("https://abyssinia-job-api.herokuapp.com/api/job/create",
                {
                    "jobTitle": jobTitle,
                    "jobDescription": jobDescription,
                    "jobRequirement": jobRequirement,
                    "category": category,
                    "companyName": companyName,
                    "companyLocation": companyLocation,
                    "postDate": postDate,
                    "expireDate": expireDate,
                    "salary": salary
                }
            )
                .then((response) => {
                        console.log(response.data);
                        alert("Jos is created with id: " + response.data.id);
                    }
                )
                .catch((error) => {
                    console.log(error);
                    //alert(error.error);
                })
            setIsSubmitClicked(false);
        }
    }, [category, companyLocation, companyName, expireDate, isSubmitClicked, jobDescription, jobRequirement, jobTitle, postDate, salary]);

    return (
        <>
            <div className="form-container" style={{height:"1000px"}}>
                <div className="form-content-left"
                     style={{backgroundImage: 'url("https://images.hivisasa.com/1200/z6aeQb7Vmiblack-man-computer.jpg")'}}>
                </div>

                <div className="form-content-right">
                    <form className="form">
                        <h1>Create Job</h1>

                        <div className="form-inputs">
                            <TextField
                                type="text"
                                autoFocus={true}
                                id="jobTitle"
                                name="jobTitle"
                                label="Job Title"
                                className={classes.TextField}
                                style={{marginBottom: "7px"}}
                                variant="filled"
                                value={jobTitle}
                                onChange={(event) => setJobTitle(event.target.value)}
                            />

                            <TextField
                                type="text"
                                id="jobDescription"
                                name="jobDescription"
                                label="Job Description"
                                multiline
                                rows={4}
                                variant="filled"
                                className={classes.TextField}
                                style={{marginBottom: "7px"}}
                                fullWidth
                                value={jobDescription}
                                onChange={(event) => setJobDescription(event.target.value)}
                            />

                            <TextField
                                type="text"
                                id="jobRequirement"
                                name="jobRequirement"
                                label="Job Requirement"
                                multiline
                                rows={4}
                                variant="filled"
                                fullWidth
                                className={classes.TextField}
                                style={{marginBottom: "7px"}}
                                value={jobRequirement}
                                onChange={(event) => setJobRequirement(event.target.value)}
                            />


                            <FormControl fullWidth variant="filled">
                                <InputLabel id="demo-simple-select-filled-label">Job Category</InputLabel>
                                <Select
                                    labelId="demo-simple-select-filled-label"
                                    id="demo-simple-select-filled"
                                    value={category}
                                    style={{width: "100%", marginBottom: "7px"}}
                                    onChange={(event) => setCategory(event.target.value)}
                                >
                                    <MenuItem style={{color:"white"}} value={"Accounting and Finance Jobs"}>Accounting and Finance Jobs</MenuItem><br/>
                                    <MenuItem style={{color:"white"}} value={"Banking and Insurance Jobs"}>Banking and Insurance Jobs</MenuItem><br/>
                                    <MenuItem style={{color:"white"}} value={"Consultancy and Training Jobs"}>Consultancy and Training Jobs</MenuItem><br/>
                                    <MenuItem style={{color:"white"}} value={"Engineering Jobs"}>Engineering Jobs</MenuItem><br/>
                                    <MenuItem style={{color:"white"}} value={"Health Care Jobs"}>Health Care Jobs</MenuItem><br/>
                                    <MenuItem style={{color:"white"}} value={"Hotel and Hospitality Jobs"}>Hotel and Hospitality Jobs</MenuItem><br/>
                                    <MenuItem style={{color:"white"}} value={"Information Technology Jobs"}>Information Technology Jobs</MenuItem><br/>
                                    <MenuItem style={{color:"white"}} value={"Sales and Marketing Jobs in Ethiopia"}>Sales and Marketing Jobs in
                                        Ethiopia</MenuItem><br/>
                                </Select>
                            </FormControl>


                            <TextField
                                type="text"
                                id="companyName"
                                name="companyName"
                                label="Company Name"
                                className={classes.TextField}
                                style={{marginBottom: "7px"}}
                                variant="filled"
                                value={companyName}
                                onChange={(event) => setCompanyName(event.target.value)}
                            />

                            <TextField
                                type="text"
                                id="companyLocation"
                                name="companyLocation"
                                label="Company Location"
                                className={classes.TextField}
                                style={{marginBottom: "7px"}}
                                variant="filled"
                                value={companyLocation}
                                onChange={(event) => setCompanyLocation(event.target.value)}
                            />

                            <h5>Post Date</h5>
                            <TextField
                                type="date"
                                id="postDate"
                                name="postDate"
                                variant="filled"
                                className={classes.TextField}
                                style={{marginBottom: "7px"}}
                                value={postDate}
                                onChange={(event) => setPostDate(event.target.value)}
                            />

                            <h5>Expire Date</h5>
                            <TextField
                                type="date"
                                id="expireDate"
                                name="expireDate"
                                variant="filled"
                                className={classes.TextField}
                                style={{marginBottom: "7px"}}
                                value={expireDate}
                                onChange={(event) => setExpireDate(event.target.value)}
                            />

                            <TextField
                                type="number"
                                id="salary"
                                name="salary"
                                label="Salary"
                                className={classes.TextField}
                                style={{marginBottom: "7px"}}
                                variant="filled"
                                value={salary}
                                onChange={(event) => setSalary(event.target.value)}
                            />
                        </div>


                        <Button
                            variant="contained"
                            size="large"
                            className={classes.button}
                            onClick={() => setIsSubmitClicked(true)}>
                    <span>
                        Create Job
                    </span>
                        </Button>
                    </form>
                </div>
            </div>
        </>

    );
}

export default Job;