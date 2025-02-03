import React, { useEffect, useState } from 'react'; 
import Header from '../Compnenets/Header'
import Footer from '../Compnenets/Footer'
import { useNavigate } from 'react-router-dom';

export default function CandidateProfile() {

    //Set input fields to useState
    const [inputValues, setInputValues] = useState({
        full_name: '',
        email: '',
        mobile_number: '',
        linkedIn_url: '',
        github_url: '',
        experience: '',
        years_of_experience: '',
        city: '',
        state: '',
        address: '' 
    });

    //use state for candidate data
    const [candidateData, setCandidateData] = useState({});  

    //Navigate
    const navigate = useNavigate();

    //GET userId from localstorage
    const userId = localStorage.getItem("userId");
    console.log(userId)

    //Submit data to update 
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`http://localhost:5000/api/candidate/update/${userId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(inputValues)
        });
        const json = await response.json()
        console.log(json);
        if (json.success) {
            console.log("Success")
            navigate('/')
        } else {
            console.log(json.errors)
        }
    }

    //set input values on field change
    const handleChange = (e) => {
        setInputValues({ ...inputValues, [e.target.name]: e.target.value })
    }

    //GET Candidate Profile
    useEffect(() => {
        const loadData = async () => {
            try {
                const candidateData = await fetch(`http://localhost:5000/api/candidate/${userId}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                });
                const { data } = await candidateData.json();
                setCandidateData(data);
                setInputValues(data); 
                console.log("Candidate data: ", data);
            } catch (err) {
                console.log("Error : ", err);
            }
        };

        loadData();
    }, [userId]); 

   
    return (
        <div>
            <Header />
            <div className="container mt-5 mb-5 p-5 " style={{ border: `1px solid #00000042`, borderRadius: `20px` }}>
                <div className="row">
                    <div className="col-12">
                        <h2 className="contact-title">Candidate Profile</h2>
                    </div>
                    <div className="col-lg-12">
                        <div className='section-top-border'>
                            <form className="form-contact contact_form" onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-6">
                                        <h6>Name</h6>
                                        <div className="form-group">
                                            <input type="text"
                                                name="full_name"
                                                placeholder="Name"
                                                required
                                                className="single-input"
                                                value={inputValues.
                                                    full_name}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-sm-6">
                                        <h6>Email</h6>
                                        <div className="form-group"  >
                                            <input type="email"
                                                name="email"
                                                placeholder="Email"
                                                required
                                                className="single-input"
                                                value={inputValues.email}
                                                onChange={handleChange}
                                                readOnly
                                            />
                                        </div>
                                    </div>

                                    <div className="col-6">
                                        <h6>Mobile Number</h6>
                                        <div className="form-group">
                                            <textarea className="single-textarea"
                                                name="mobile_number"
                                                placeholder="Mobile NUmber"
                                                value={inputValues.mobile_number}
                                                onChange={handleChange}
                                            >

                                            </textarea>
                                        </div>
                                    </div>

                                    <div className="col-6">
                                        <h6>LinkedIn URL</h6>
                                        <div className="form-group">
                                            <input type="url"
                                                name="linkedIn_url"
                                                placeholder="LinkedIn URL"
                                                className="single-input"
                                                value={inputValues.linkedIn_url}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-6">
                                        <h6>GitHub URL</h6>
                                        <div className="form-group">
                                            <input type="url"
                                                name="github_url"
                                                placeholder="GitHub URL"
                                                className="single-input"
                                                value={inputValues.github_url}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-6">
                                        <h6>Experience</h6>
                                        <div className="form-group">
                                            <input type="text"
                                                name="experience"
                                                placeholder="Experience"
                                                required
                                                className="single-input"
                                                value={inputValues.
                                                    experience}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-6">
                                        <h6>Years of Experience</h6>
                                        <div className="form-group">
                                            <input type="text"
                                                name="years_of_experience"
                                                placeholder="Years of Experience"
                                                required
                                                className="single-input"
                                                value={inputValues.
                                                    years_of_experience}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    
                                    <div className="col-6">
                                        <h6>Address</h6>
                                        <div className="form-group">
                                            <textarea className="single-textarea"
                                                name="address"
                                                placeholder="Address"
                                                value={inputValues.address}
                                                onChange={handleChange}
                                            >

                                            </textarea>
                                        </div>
                                    </div> 

                                    <div className="col-6">
                                        <h6>City</h6>
                                        <div className="form-group">
                                            <input type="text"
                                                name="city"
                                                placeholder="City"
                                                className="single-input"
                                                value={inputValues.city}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-6">
                                        <h6>State</h6>
                                        <div className="form-group">
                                            <input type="text"
                                                name="state"
                                                placeholder="State"
                                                className="single-input"
                                                value={inputValues.state}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>  

                                </div>
                                <div className="form-group mt-12 text-center">
                                    <button type="submit" className="button button-contactForm boxed-btn">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}