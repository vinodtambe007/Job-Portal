import React from 'react'
import Header from '../Compnenets/Header'
import Footer from '../Compnenets/Footer'
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react'

export default function UpdateJob() {
    const [inputValues, setInputValues] = useState({
        company_id: '',
        category_id: '',
        job_title: '',
        job_short_desc: '',
        job_desc: '',
        job_type: '',
        number_of_openings: '',
        location: '',
        qualification: '',
        experience: '',
        salary: '',
        pay_type: '',
        skills: '' 
    }); 

    const [companyData, setCompanyData] = useState([]);    
    const [category, setCategory] = useState([]);
    const navigate = useNavigate();

    //Parameter job_id
    // const { job_id } = useParams(); 

    //Local Storage userId
    const userId = localStorage.getItem("userId");
    const job_id = localStorage.getItem("job_id");
    console.log("User Id :- ",userId);
    console.log("Job Id :- ",job_id);

    //Set data to input field if change occured
    const handleChange = (e) => {
        setInputValues({ ...inputValues, [e.target.name]: e.target.value })
    }

    //Company Data
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
                // setInputValues(data[0]); 
                setInputValues({inputValues, company_id: data[0].company_id })
                console.log("Company data: ", data);
            } catch (err) { 
                console.log("Error : ", err);
            }
        };
    
        loadData(); 
    }, [userId]);


    //Category Data
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
                // console.log("Category Data 1 :-", data)
                setCategory(data);
                console.log("Category Data :-", data)
            }
            catch(err){
                console.log("Error : ",err);
            }
        };
    
        categoryData(); 
    }, []);

    //Job Details
    useEffect(() => {
       
        const jobDetail = async () => {
            try{
                const job_details = await fetch(`http://localhost:5000/api/jobs/${job_id}`,{
                    method:"GET",
                    header:{
                        'Content-Type': 'application/json'
                    }
                })
                const {data} = await job_details.json();
                console.log("Job Details :- ",data);
                setInputValues(data[0]);
            }
            catch(err){
                console.log("Error :- ",err)
            }
        }; 

        jobDetail();
    },[userId]);

    //Submit Data
    const handleSubmit = async (e) => {
        // console.log("Input value",inputValues);
        e.preventDefault();
        const response = await fetch(`http://localhost:5000/api/jobs/update/${job_id}`, {
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


    return (
        <div>
            <Header />
            <div className="container mt-5 mb-5 p-5 " style={{ border: `1px solid #00000042`, borderRadius: `20px` }}>
                <div className="row">
                    <div className="col-12">
                        <h2 className="contact-title">Update Job</h2>
                    </div>
                    <div className="col-lg-12">
                        <div className='section-top-border'>
                            <form className="form-contact contact_form" onSubmit={handleSubmit}>
                                <div className="row">
                                    <input type="hidden"
                                        name="company_id"
                                        placeholder="Company"
                                        className="single-input"
                                        value={inputValues.
                                            company_id}
                                    />
                                    <div className="single-element-widget col-6" >
                                        <h6>Job Category</h6>
                                        <div className="default-select" id="default-select">
                                            <select className="single-input"
                                                style={{ height: `40px` }}
                                                onChange={handleChange}
                                                name="category_id"
                                                value={inputValues.category_id}
                                            >
                                                <option value="">Select Category</option>
                                                {
                                                    category.map((cat) => (
                                                        <option key={cat._id} value={cat.category_id}>{cat.category_name}</option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <h6>Job Title</h6>
                                        <div className="form-group">
                                            <input type="text"
                                                name="job_title"
                                                placeholder="Job Title"
                                                required
                                                className="single-input"
                                                value={inputValues.
                                                    job_title}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <h6>Short Description</h6>
                                        <div className="form-group">
                                            <textarea className="single-textarea"
                                                name="job_short_desc"
                                                placeholder="Short Description"
                                                value={inputValues.job_short_desc}
                                                onChange={handleChange}
                                            >

                                            </textarea>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <h6>Description</h6>
                                        <div className="form-group">
                                            <textarea className="single-textarea"
                                                name="job_desc"
                                                placeholder="Description"
                                                value={inputValues.job_desc}
                                                onChange={handleChange}
                                            >

                                            </textarea>
                                        </div>
                                    </div>

                                    <div className="single-element-widget col-6" >
                                        <h6>Job Type</h6>
                                        <div className="default-select" id="default-select">
                                            <select className="single-input"
                                                style={{ height: `40px` }}
                                                onChange={handleChange}
                                                name="job_type"
                                                value={inputValues.job_type}
                                            >
                                                <option value="">Select Job Type</option>
                                                <option value="Remote">Remote</option>
                                                <option value="On-Site">On-Site</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <h6>No of Openings</h6>
                                        <div className="form-group">
                                            <input type="text"
                                                name="number_of_openings"
                                                placeholder="No of Openings"
                                                className="single-input"
                                                value={inputValues.number_of_openings}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-6">
                                        <h6>Location</h6>
                                        <div className="form-group">
                                            <input type="text"
                                                name="location"
                                                placeholder="Location"
                                                className="single-input"
                                                value={inputValues.location}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-6">
                                        <h6>Qualification</h6>
                                        <div className="form-group">
                                            <input type="text"
                                                name="qualification"
                                                placeholder="Qualification"
                                                className="single-input"
                                                value={inputValues.qualification}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-6">
                                        <h6>Salary</h6>
                                        <div className="form-group">
                                            <input type="text"
                                                name="salary"
                                                placeholder="Salary"
                                                className="single-input"
                                                value={inputValues.salary}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="single-element-widget col-6" >
                                        <h6>Pay Type</h6>
                                        <div className="default-select" id="default-select">
                                            <select className="single-input"
                                                style={{ height: `40px` }}
                                                onChange={handleChange}
                                                name="pay_type"
                                                value={inputValues.pay_type}
                                            >
                                                <option value="">Select Type</option>
                                                <option value="Hourly">Hourly</option>
                                                <option value="Monthly">Monthly</option>
                                                <option value="Yearly">Yearly</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-6">
                                        <h6>Skills</h6>
                                        <div className="form-group">
                                            <input type="text"
                                                name="skills"
                                                placeholder="Skills"
                                                className="single-input"
                                                value={inputValues.skills}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                </div>
                                <div className="form-group mt-12 text-center">
                                    <button type="submit" className="button button-contactForm boxed-btn" on>Submit</button>
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