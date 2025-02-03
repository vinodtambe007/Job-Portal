import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

export default function Header() {
    const navigate = useNavigate();
    const handleLogout = () => {
        navigate("/")
        localStorage.clear();
        console.log("Navigated to home page");
    }
    return (
        <div>
            <header>
                <div className="header-area header-transparrent">
                    <div className="headder-top header-sticky">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-3 col-md-2">
                                    <div className="logo">
                                        <Link to="/"><img src="assets/img/logo/logo.png" alt="" /></Link>
                                    </div>
                                </div>
                                <div className="col-lg-9 col-md-9">
                                    <div className="menu-wrapper">
                                        <div className="main-menu">
                                            <nav className="d-none d-lg-block">
                                                <ul id="navigation">
                                                    <li> <Link to="/">Home</Link></li>
                                                    {/* <li><Link to="/joblist">Find a Job</Link></li> */}
                                                    <li><Link to="/about">About</Link></li>
                                                    <li><a href="#">Jobs</a>
                                                        <ul className="submenu">
                                                            <li><Link to="/joblist">Job List</Link></li>
                                                            {/* <li><Link to="/jobdetails">Job Details</Link></li> */}
                                                            {
                                                                (localStorage.getItem('role') == 'Employer' && localStorage.getItem('auth_token')) ?
                                                                <>
                                                                    <li><Link to="/addJob">Add Job</Link></li>
                                                                    <li><Link to="/companyJobList">Company Job List</Link></li>
                                                                </>  
                                                                    :
                                                                    <li></li>       
                                                                    
                                                            }
                                                            

                                                        </ul>
                                                    </li>
                                                    <li><a href="#">Page</a>
                                                        <ul className="submenu">
                                                            <li><a href="blog.html">Blog</a></li>
                                                            <li><a href="single-blog.html">Blog Details</a></li>
                                                            <li><a href="elements.html">Elements</a></li>
                                                            <li><Link to="/jobdetails">job Details</Link></li>
                                                        </ul>
                                                    </li>
                                                    <li><Link to="/contactus">Contact</Link></li>
                                                    {
                                                (localStorage.getItem("auth_token") && localStorage.getItem("role")==='Employer') ?
                                                    <li><Link to="/companyProfile"><CgProfile /></Link></li>
                                                    :
                                                    <li></li>
                                                    
                                            } 

                                            {
                                                (localStorage.getItem("auth_token") && localStorage.getItem("role")==='Candidate') ?
                                                    <li><Link to="/candidateProfile"><CgProfile /></Link></li>
                                                    :
                                                    <li></li>
                                                    
                                            }
                                                    
                                                </ul>
                                            </nav>
                                        </div>
                                        {
                                            (!localStorage.getItem("auth_token")) ?
                                                <div className="header-btn d-none f-right d-lg-block">
                                                    <Link to="/registration" className="btn head-btn1">Register</Link>
                                                    <Link to="/login" className="btn head-btn1">Login</Link>
                                                </div>
                                                :
                                                <div className="header-btn d-none f-right d-lg-block">
                                                    <Link className="btn head-btn1" onClick={handleLogout}>Logout</Link>
                                                </div>
                                        }
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="mobile_menu d-block d-lg-none"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}
