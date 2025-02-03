import React, { useEffect, useState } from 'react';
import Header from '../Compnenets/Header';
import Footer from '../Compnenets/Footer';
import { useNavigate } from 'react-router-dom';

export default function CompanyProfile() {
    const [inputValues, setInputValues] = useState({
        company_name: '',
        company_email: '',
        company_short_desc: '',
        company_desc: '',
        contact_number: '',
        website_url: '',
        city: '',
        state: '',
        address: '',
        pincode: ''
    });
    const [companyData, setCompanyData] = useState({});
    const [category, setCategory] = useState();
    const [msg, setMsg] = useState();
    
    const navigate = useNavigate();

    const userId = localStorage.getItem("userId");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`http://localhost:5000/api/company/update/${userId}`, {
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
            navigate('/companyProfile')
        } else {
            console.log(json.errors)
        }
    }

    const handleChange = (e) => {
        setInputValues({ ...inputValues, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        const loadData = async () => {
            try {
                const companyData = await fetch(`http://localhost:5000/api/company/${userId}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                });
                const { data } = await companyData.json();
                setCompanyData(data);
                setInputValues(data[0]); 
                console.log("Company data: ", data);
            } catch (err) { 
                console.log("Error : ", err);
            }
        };
    
        loadData(); 
    }, [userId]); 
    
    useEffect(() => {
        const categoryData = async () => {
            try{
                const categoryList = await fetch(`http://localhost:5000/api/category/`,{
                    method:'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                });
                const { data } = await categoryList.json();
                console.log("Category Data 1 :-", data)
                setCategory(data);
                console.log("Category Data 2 :-", category)
            }
            catch(err){
                console.log("Error : ",err);
            }
        };
    
        categoryData(); 
    }, []); // Remove 'category' from the dependency array
    
    // useEffect(() => {
    //     console.log("Category Data 3 :-", category)
    // }, [category]);

    return (
        <div>
            <Header />
            <div className="container mt-5 mb-5 p-5 " style={{ border: `1px solid #00000042`, borderRadius: `20px` }}>
                <div className="row">
                    <div className="col-12">
                        <h2 className="contact-title">Company Profile</h2>
                    </div>
                    <div className="col-lg-12">
                        <div className='section-top-border'>
                            <form className="form-contact contact_form" onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-6">
                                        <h6>Name</h6>
                                        <div className="form-group">
                                            <input type="text"
                                                name="company_name"
                                                placeholder="Name"
                                                required
                                                className="single-input"
                                                value={inputValues.
                                                    company_name}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <h6>Email</h6>
                                        <div className="form-group">
                                            <input type="email"
                                                name="company_email"
                                                placeholder="Email"
                                                required
                                                className="single-input"
                                                value={inputValues.company_email}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <h6>Short Description</h6>
                                        <div className="form-group">
                                            <textarea className="single-textarea"
                                                name="company_short_desc"
                                                placeholder="Short Description"
                                                value={inputValues.company_short_desc}
                                                onChange={handleChange}
                                            >

                                            </textarea>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <h6>Description</h6>
                                        <div className="form-group">
                                            <textarea className="single-textarea"
                                                name="company_desc"
                                                placeholder="Description"
                                                value={inputValues.company_desc}
                                                onChange={handleChange}
                                            >

                                            </textarea>
                                        </div>
                                    </div>

                                    <div className="col-6">
                                        <h6>Mobile Number</h6>
                                        <div className="form-group">
                                            <input type="text"
                                                name="contact_number"
                                                placeholder="Mobile Number"
                                                className="single-input"
                                                value={inputValues.contact_number}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <h6>Website URL</h6>
                                        <div className="form-group">
                                            <input type="url"
                                                name="website_url"
                                                placeholder="Website URL"
                                                className="single-input"
                                                value={inputValues.website_url}
                                                onChange={handleChange}
                                            />
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

                                    <div className="col-6">
                                        <h6>Address</h6>
                                        <div className="form-group">
                                            <input type="text"
                                                name="address"
                                                placeholder="Address"
                                                className="single-input"
                                                value={inputValues.address}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-6">
                                        <h6>Pincode</h6>
                                        <div className="form-group">
                                            <input type="text"
                                                name="pincode"
                                                placeholder="Pincode"
                                                className="single-input"
                                                value={inputValues.pincode}
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
