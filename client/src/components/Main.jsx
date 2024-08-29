import React from "react";
import Sidebar from "./Sidebar";
import '../css/Body.css';
import { NavLink } from "react-router-dom";
import Body from "./Body";

const Main = () =>{
    return(
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
                            <Body />
                        {/*Body area end here*/}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main