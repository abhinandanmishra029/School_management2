import React, { useState } from "react";
import { useEffect } from "react";
import Sidebar from "../Sidebar";
import '../../css/Body.css';
import './css/ViewStudent.css';
import { NavLink } from "react-router-dom";

import { deleteUsers, getUsers } from "../../service/api";

const ViewStudent = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getAllUsers();
    });
    const getAllUsers = async () => {

        let response = await getUsers();
        setUsers(response.data);
    }


    const deleteButton = async (e) => {
        // console.log(e)
        const res = await deleteUsers({ id: e })
        if (res.status === 201) {
            alert('Successfully deleted')
        } else (
            alert('sonethig is wrong')
        )
    }

    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-md-2 m-0 p-0">
                        <Sidebar />
                    </div>
                    <div className="col-12 col-md-10 body m-0 p-0">
                        <div className="top-header">
                            <form>
                                <i className="fas fa-bars"></i>
                                <NavLink to="/" className="top-nav">Home</NavLink>
                                <NavLink to="" className="top-nav">Contact</NavLink>
                                <i class="far fa-user float-right mr-3"></i>
                                <i class="far fa-bell float-right"></i>
                                <i class="far fa-envelope float-right"></i>
                            </form>
                        </div>

                        {/*Body Area start here*/}
                        <div className="container-fluid whole">
                            <div className="row">
                                <div className="col-12">
                                    <div className="body-title">
                                        <h1>Welcome To Agrasain Boys' School, Liluah, Kolkata</h1>
                                        <div className="service-heading">
                                            <NavLink to="/" className="servicenav">Home /</NavLink>
                                            <span> View Student Details</span>
                                        </div>
                                        <hr></hr>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-12">
                                    <div className="service-view">
                                        <h5>View Student Details</h5><hr></hr>

                                        <div className="row">
                                            <div className="col-12">
                                                <table className="table table-responsive">
                                                    <thead>
                                                        <tr>
                                                            <th>Sno.</th>
                                                            <th>Student Name</th>
                                                            <th>Mobile Number</th>
                                                            <th>D.O.B</th>
                                                            <th>Gender</th>
                                                            <th>Religion</th>
                                                            <th>Admission Date</th>
                                                            <th>Class</th>
                                                            <th>Roll</th>
                                                            <th>Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            users.map((user, key) => {

                                                                return (
                                                                    <>
                                                                        <tr>
                                                                            <td>{key += 1}</td>
                                                                            <td>{user.cname}</td>
                                                                            <td>{user.mobile}</td>
                                                                            <td>{user.dob}</td>
                                                                            <td>{user.gender}</td>
                                                                            <td>{user.rel}</td>
                                                                            <td>{user.class}</td>
                                                                            <td>{user.roll}</td>
                                                                            <td>
                                                                                <img src={`http://localhost:8000/uploads/${user.image}`} alt='image' width="30px" height='30px' />
                                                                            </td>
                                                                            <td>
                                                                                <NavLink to={`/pages/EditStudent/${user._id}`} className="action-btn"><i className="fas fa-edit"></i></NavLink>
                                                                                <NavLink to="" className="action-btn ml-2" style={{ backgroundColor: '#F94892' }}><i className="fas fa-eye"></i></NavLink>
                                                                                <NavLink to="" onClick={() => { deleteButton(`${user._id}`) }} className="action-btn ml-2" style={{ backgroundColor: '#D2001A', padding: '5px 9px' }}><i className="fas fa-trash"></i></NavLink>
                                                                            </td>
                                                                        </tr>
                                                                    </>
                                                                )
                                                            })
                                                        }
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*Body area end here*/}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewStudent