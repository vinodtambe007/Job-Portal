import React from 'react'
import Slider from '../Compnenets/Slider'
import Header from '../Compnenets/Header'
import Footer from '../Compnenets/Footer'
import ApplyNowModal from '../Compnenets/ApplyNowModal'
import { useState,useEffect } from 'react'


export default function JobDetails() {

    const [jobDetails,setJobDetails] = useState([]);
    const [companyDetails,setCompanyDetails] = useState([]);
    const [categoryDetails,setCategoryDetails] = useState([]);
    const company_id= localStorage.getItem("company_id")    

    //new code
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);

        // alert("akshy sir OP in the Chat")
    };

    const closeModal = () => {
        setShowModal(false);
    };
    //new code 

    const jobId = localStorage.getItem('jobId');
    console.log("details= ",jobId)

    useEffect(() => {
        const jobData = async () => {
            try{
                const  response =  await fetch(`http://localhost:5000/api/jobs/${jobId}`,{
                    method:"GET",
                    headers:{
                        'Content-Type': 'application/json'
                    }, 
                });
                const {data} = await response.json();
                console.log("JobDetails Page1 :- ",data);
                setJobDetails(data[0])
            
                setCategoryDetails(data[0].categoryDetails) 
                setCompanyDetails(data[0].companyDetails)

                console.log("JobDetails Page :- ",data); 
                console.log("CategoryDetails Page :- ",data[1].categoryDetails); 
                console.log("CompanyDetails Page :- ",data[1].companyDetails);
            }
            catch(err){
             console.log("Error :- ",err)   
            }
        }
        jobData();
    },[jobId])

    return (
        <div>
            <Header/>
            <main>
                <Slider pagename="job Details" />
                <div class="job-post-company pt-120 pb-120">
                    <div class="container">
                        <div class="row justify-content-between">
                            <div class="col-xl-7 col-lg-8">
                                <div class="single-job-items mb-50">
                                    <div class="job-items">
                                        <div class="company-img company-img-details">
                                            <a href="#"><img src="assets/img/icon/job-list1.png" alt="" /></a>
                                        </div>
                                        <div class="job-tittle">
                                            <a href="#">
                                                <h4>{jobDetails.job_title}</h4>
                                            </a>
                                            <ul>
                                                <li>{companyDetails[0]?.company_name}</li>
                                                <li><i class="fas fa-map-marker-alt"></i>{jobDetails.location}</li>
                                                <li>{jobDetails.salary}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div class="job-post-details">
                                    <div class="post-details1 mb-50">
                                        <div class="small-section-tittle">
                                            <h4>{jobDetails.job_short_desc}</h4>
                                        </div>
                                        {/* <p>It is a long established fact that a reader will beff distracted by vbthe creadable content of a page when looking at its layout. The pointf of using Lorem Ipsum is that it has ahf mcore or-lgess normal distribution of letters, as opposed to using, Content here content here making it look like readable.</p> */}
                                        <p> {jobDetails.job_desc} </p>
                                    </div>
                                    <div class="post-details2  mb-50">
                                        <div class="small-section-tittle">
                                            <h4>Required Knowledge, Skills, and Abilities</h4>
                                        </div>
                                        <ul>
                                            {/* <li>System Software Development</li>
                                            <li>Mobile Applicationin iOS/Android/Tizen or other platform</li>
                                            <li>Research and code , libraries, APIs and frameworks</li>
                                            <li>Strong knowledge on software development life cycle</li>
                                            <li>Strong problem solving and debugging skills</li> */}
                                            {jobDetails.skills}
                                        </ul>
                                    </div>
                                    <div class="post-details2  mb-50">
                                        <div class="small-section-tittle">
                                            <h4>Education + Experience</h4>
                                        </div>
                                        <ul>
                                            <li>  {jobDetails.experience} or more years of professional design experience</li>
                                            {/* <li>Direct response email experience</li>
                                            <li>Ecommerce website design experience</li>
                                            <li>Familiarity with mobile and web apps preferred</li>
                                            <li>Experience using Invision a plus</li> */}
                                           <li> qualification : {jobDetails.qualification}</li> 

                                        </ul>
                                    </div>
                                </div>

                            </div>
                            <div class="col-xl-4 col-lg-4">
                                <div class="post-details3  mb-50">
                                    <div class="small-section-tittle">
                                        <h4>Job Overview</h4>
                                    </div>
                                    <ul>
                                        {/* <li>Posted date : <span>{new Date(jobDetails.publish_on).toISOString().split('T')[0]}</span></li> */}
                                        <li>Location : <span>{jobDetails.location}</span></li>
                                        <li>Vacancy : <span>{jobDetails.number_of_openings}</span></li>
                                        <li>Job nature : <span>Full time</span></li>
                                        <li>Salary :  <span>{jobDetails.salary}</span></li>
                                        {/* <li>Application date : <span>{new Date(jobDetails.start_date).toISOString().split('T')[0]}</span></li> */}
                                    </ul>
                                    <div class="apply-btn2">
                                        <a   onClick={openModal} class="btn">Apply Now</a>
                                    </div>
                                </div>
                                <div class="post-details4  mb-50">
                                    <div class="small-section-tittle">
                                        <h4>Company Information</h4>
                                    </div>
                                    {/* <span>{companyDetails[0].company_name}</span> */}
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                    <ul>
                                        <li>Name: <span> {companyDetails[0]?.company_name} </span></li>
                                        <li>Web : <span> {companyDetails[0]?.website_url}</span></li>
                                        <li>Email: <span>{companyDetails[0]?.company_email}</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
            <Footer/>
            {showModal && <ApplyNowModal onClose={closeModal} />}
        </div>
    )
}
