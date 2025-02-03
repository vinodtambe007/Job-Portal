import {React, useState} from 'react'
import Header from '../Compnenets/Header'
import Footer from '../Compnenets/Footer'
import { Link,useNavigate } from 'react-router-dom'


export default function Registration() {
    const[inputVaules,setInputValues] = useState();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/user/add",{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({full_name:inputVaules.full_name,email:inputVaules.email,password:inputVaules.password,role:inputVaules.role})
        })
        const json = await response.json()
        console.log(json);
        if(json.success){
            console.log("Success")
            // toast("Success", {
            //     position: "top-right",
            //     autoClose: 5000,
            //     hideProgressBar: false,
            //     closeOnClick: true,
            //     pauseOnHover: true,
            //     draggable: true,
            //     progress: undefined,
            //     theme: "colored", 
            //     })
            navigate("/login")
        }else{
            console.log(json.errors)
        }
    }

    const handleChange = (e) => {
        setInputValues({...inputVaules,[e.target.name]:e.target.value})
        //  console.log(e.target.value,e.target.name)
    }

    return (
        <>
            <Header />
            <div className="container mt-5 mb-5 p-5 " style={{border:`1px solid #00000042`,borderRadius:`20px`}}>
                <div className="row">
                    <div className="col-12">
                        <h2 className="contact-title">Registration</h2>
                    </div>
                    <div className="col-lg-12">
                        <form className="form-contact contact_form" onSubmit={handleSubmit}>
                            <div className="row">
                                <div class="single-element-widget col-6" > 
                                    <div class="default-select" id="default-select">
                                        <select className="single-input" 
                                                style={{height:`40px`}} 
                                                onChange={handleChange}
                                                name="role"
                                        >
                                            <option value="">Select Role</option>
                                            <option value="Candidate">Candidate</option>
                                            <option value="Employer">Employer</option> 
                                        </select>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <input  type="text" 
                                                name="full_name" 
                                                placeholder="Name"   
                                                required
                                                className="single-input"
                                                onChange={handleChange}
                                        />
                                    </div>
                                </div> 
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <input  type="email" 
                                                name="email" 
                                                placeholder="Email address"
                                                required
                                                className="single-input" 
                                                onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <input  type="password" 
                                                name="password" 
                                                placeholder="Password"
                                                required
                                                className="single-input" 
                                                onChange={handleChange}
                                        />
                                    </div>
                                </div>  
                                 
                            </div> 
                            <div className="form-group mt-12 text-center">
                                <button type="submit" className="button button-contactForm boxed-btn">Register</button> 
                            </div>
                            <div className="form-group mt-12 text-center"> 
                                <Link to="/login" style={{color:`#fb246a`}}>Already Registered ?</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
            {/* <ToastContainer 
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored" 
            /> */}
        </>
    )
}