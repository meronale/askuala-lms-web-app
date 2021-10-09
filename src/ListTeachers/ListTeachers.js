import React from 'react';
import {
    Box, Checkbox,
    LinearProgress,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@mui/material";
import useAxios from "axios-hooks";
import {convertPinToStars} from '../helpers/helpers';
const ListTeachers = () =>{


    const [{data, error, loading}] = useAxios("http://localhost:8080/api/teacherAccount/list")
    if(loading){
        return (
            <Box sx={{ width: '100%' }}>
                <LinearProgress />
            </Box>
        );
    }

    if (error) return <p>
        This error happened: {error.message}
    </p>
    return (
        <>
            <div className="register">
                <div className="topnav">
                    <a href="#home">Home</a>
                    <a href="/Classes">Classes</a>
                    <a href="/CreateContactUs">Contact Us</a>
                    <a href="/ListStudents">Student</a></div>
            </div>
            <div className="createAcc">
                <p> List of Teachers </p>
            </div>


            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Full Name</TableCell>

                            <TableCell>Email</TableCell>
                            <TableCell>Department</TableCell>
                            <TableCell>Experience</TableCell>
                            <TableCell>Certification</TableCell>
                            <TableCell>PhoneNumber</TableCell>
                            <TableCell>DateOfBirth</TableCell>
                            <TableCell>Password</TableCell>
                            <TableCell>Is Verified</TableCell>

                        </TableRow>

                    </TableHead>

                    <TableBody>

                        {data.map((row) => {
                            return (
                                <TableRow>
                                    <TableCell>{row.id}</TableCell>
                                    <TableCell>{row.firstName}{row.middleName}{row.lastName}</TableCell>
                                    <TableCell>{row.email}</TableCell>
                                    <TableCell>{row.department}</TableCell>
                                    <TableCell>{row.experience}</TableCell>
                                    <TableCell>{row.certification}</TableCell>
                                    <TableCell>{row.phoneNumber}</TableCell>
                                    <TableCell>{row.dateOfBirth}</TableCell>
                                    <TableCell>{convertPinToStars(row.password)}</TableCell>
                                    <TableCell>{row.isVerified.toString()}<Checkbox checked={row.isVerified} /></TableCell>
                                </TableRow>
                            )
                        })}



                    </TableBody>



                </Table>


            </TableContainer>
        </>
    );


}
export default ListTeachers;