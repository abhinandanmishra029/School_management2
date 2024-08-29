import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import '../../css/Body.css';
import './css/AddStudent.css';
import { NavLink, useParams } from "react-router-dom";
import { getUsersdata, updateUsers } from "../../service/api";
import { useNavigate } from "react-router-dom";

export default function EditStudent() {
    const navigate = useNavigate();
    const id = useParams();

    const getData = async () => {
        const res = await getUsersdata(id)
        console.log(res.data)
        setUser(res.data)
    }
    useEffect(() => {
        getData()
    }, [])





    const [user, setUser] = useState({
        _id: "",
        cname: '',
        mobile: '',
        mail: '',
        dob: '',
        gender: '',
        rel: '',
        address: '',
        adate: '',
        class: '',
        roll: ''
    });



    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
        console.log(user);
    }
    const addUserDetails = async (e) => {
        e.preventDefault()
        const res = await updateUsers(user)
        if (res.status === 201) {
            alert('Student Successfully Updated');
            navigate('/pages/ViewStudent');
        } else {
            alert('sonething is wrong')
        }

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
                                            <span> Edit Student</span>
                                        </div>
                                        <hr></hr>
                                    </div>
                                </div>
                            </div>

                            <form>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="serviceassign-form">
                                            <h5>Add Students Details</h5><hr></hr>

                                            <div className="row">
                                                <div className="col-12 col-md-4">
                                                    <table className="table table-responsive">
                                                        <tr>
                                                            <td>Student Name</td>
                                                        </tr>
                                                        <tr>
                                                            <td><input value={user.cname} type="text" name="cname" className="form-control" placeholder="Enter Student's Name" onChange={(e) => onValueChange(e)}></input></td>
                                                        </tr>
                                                    </table>
                                                </div>
                                                <div className="col-12 col-md-4">
                                                    <table className="table table-responsive">
                                                        <tr>
                                                            <td>Mobile Number</td>
                                                        </tr>
                                                        <tr>
                                                            <td><input value={user.mobile} type="text" name="mobile" className="form-control" placeholder="Enter Mobile Number" onChange={(e) => onValueChange(e)}></input></td>
                                                        </tr>
                                                    </table>
                                                </div>
                                                <div className="col-12 col-md-4">
                                                    <table className="table table-responsive">
                                                        <tr>
                                                            <td>Email Id</td>
                                                        </tr>
                                                        <tr>
                                                            <td><input type="email" value={user.mail} name="mail" className="form-control" placeholder="Enter Email Id" onChange={(e) => onValueChange(e)}></input></td>
                                                        </tr>
                                                    </table>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-12 col-md-4">
                                                    <table className="table table-responsive">
                                                        <tr>
                                                            <td>Date Of Birth</td>
                                                        </tr>
                                                        <tr>
                                                            <td><input type="date" value={user.dob} name="dob" className="form-control" onChange={(e) => onValueChange(e)}></input></td>
                                                        </tr>
                                                    </table>
                                                </div>
                                                <div className="col-12 col-md-4">
                                                    <table className="table table-responsive">
                                                        <tr>
                                                            <td>Gender</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <select value={user.gender} name="gender" className="form-control" onChange={(e) => onValueChange(e)}>
                                                                    <option disabled selected value>--Select Gender--</option>
                                                                    <option value="male">Male</option>
                                                                    <option value="female">Female</option>
                                                                    <option value="other">Other</option>
                                                                </select>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </div>
                                                <div className="col-12 col-md-4">
                                                    <table className="table table-responsive">
                                                        <tr>
                                                            <td>Religion</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <select value={user.rel} name="rel" className="form-control" onChange={(e) => onValueChange(e)}>
                                                                    <option disabled selected value>--Select Religion--</option>
                                                                    <option value="hindu">Hindu</option>
                                                                    <option value="islam">Islam</option>
                                                                    <option value="sikh">Sikh</option>
                                                                    <option value="other">Other</option>
                                                                </select>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-12">
                                                    <table className="table table-responsive">
                                                        <tr>
                                                            <td>Address</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <textarea value={user.address} name="address" className="form-control" placeholder="Enter Full Address..." onChange={(e) => onValueChange(e)}></textarea>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-12 col-md-4">
                                                    <table className="table table-responsive">
                                                        <tr>
                                                            <td>Addmission Date</td>
                                                        </tr>
                                                        <tr>
                                                            <td><input value={user.adate} type="date" name="adate" className="form-control" onChange={(e) => onValueChange(e)}></input></td>
                                                        </tr>
                                                    </table>
                                                </div>
                                                <div className="col-12 col-md-4">
                                                    <table className="table table-responsive">
                                                        <tr>
                                                            <td>Class</td>
                                                        </tr>
                                                        <tr>
                                                            <td><input value={user.class} type="text" name="class" className="form-control" placeholder="Enter Class" onChange={(e) => onValueChange(e)}></input></td>
                                                        </tr>
                                                    </table>
                                                </div>
                                                <div className="col-12 col-md-4">
                                                    <table className="table table-responsive">
                                                        <tr>
                                                            <td>Roll Number</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <input type="text" value={user.roll} name="roll" className="form-control" placeholder="Enter Roll Number" onChange={(e) => onValueChange(e)}></input>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </div>
                                            </div>


                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="btn">
                                                        <button onClick={addUserDetails} className="btn btn-primary mr-2" style={{ fontFamily: 'redo' }}>Update</button>
                                                        <NavLink to="/pages/ViewStudent" className="btn btn-danger mr-2" >Cancel</NavLink>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        {/*Body area end here*/}
                    </div>
                </div>
            </div>
        </div>
    )
}
