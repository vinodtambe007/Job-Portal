import React, { useEffect, useState } from 'react';
import Header from '../Compnenets/Header';
import Footer from '../Compnenets/Footer';
import { useNavigate } from 'react-router-dom';

export default function CompanyJobListPage() {  

    const [companyData, setCompanyData] = useState([]); 
    const [jobList, setJobList] = useState([]);
    const [companyId, setCompanyId] = useState(null); // Define companyId state
    const navigate = useNavigate();

    const userId = localStorage.getItem("userId");  

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
                console.log("Company data: ", data);

                setCompanyData(data); 
                console.log(data) 
            
                // Set companyId state
                setCompanyId(data[0].company_id);
            } catch (err) { 
                console.log("Error : ", err);
            }
        };
    
        loadData(); 
    }, [userId]);  

  useEffect(() => { 
        // Check if companyId is defined before fetching job list
        if (companyId !== null) 
        {
            jobListt(companyId);
        }
    }, [companyId]);

    // Define jobListt function to fetch job list data
    const jobListt = async (companyId) => {
        try {
            const jobListData = await fetch(`http://localhost:5000/api/jobs/companyJobs/${companyId}`,{
                method:"GET",
                headers:{
                    'Content-Type': 'application/json'
                },
            });
            const {data} = await jobListData.json();
            setJobList(data);
            console.log("Job List :- ",data);
        } catch(err) {
            console.log("Error : ",err);
        }
    };

    const handleDelete = async (job_id) => {
        console.log(job_id);  
        // const deleteJob = async () => {
            try{
                const deleteResponse = await fetch(`http://localhost:5000/api/jobs/deleteJob`,{
                    method:'POST',
                    headers:{
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({job_id:job_id,user_id:localStorage.getItem("userId")})
                });
                const {message} = await deleteResponse.json();
                console.log(message);
                // navigate("/companyJobList")
                // window.location.reload();
            }
            catch(err){
                console.log("Error : ",err);
            }
        // }
    }

    const handleViewJob = async (jobId) => {
    localStorage.setItem('jobId', jobId);
        navigate("/jobdetails");
    }
    const handleUpdateJob = async (job_id) => {
        // console.log(job_id)
        localStorage.setItem("job_id",job_id);
        navigate('/updateJob') 
    }

    return (
        <div>
            <Header />
            <div class="container box_1170">
                <div className="section-top-border">
                    <h3 className="mb-30">Job Lists</h3>
                    <div className="progress-table-wrap">
                        <div className="progress-table">
                            <div className="table-head">
                                <div className="serial" style={{width: `10%`}}>#</div>
                                <div className="country" style={{width: `20%`}}>Date</div>
                                <div className="visit" style={{width: `40%`}}>Job Title</div>
                                <div className="percentage" style={{width: `10%`}}>Published</div>
                                <div className="percentage" style={{width: `40%`}}>Action</div>
                            </div> 
                            
                                {jobList.map((jobs, index) => (
                                    <>
                                        <div className="table-row">
                                            <div key={index} className="serial" style={{width: '10%'}}>{index+1}</div>
                                            <div key={index} className="" style={{width: '20%'}}>{jobs.date}</div>
                                            <div key={index} className="" style={{width: '40%'}}>{jobs.job_title}</div>
                                            <div key={index} className="" style={{width: '10%'}}>No</div>
                                            <div key={index} className="" style={{width: '40%'}}>
                                                <button class="genric-btn info circle arrow" onClick={() => handleViewJob(jobs.job_id)}>View</button>&nbsp;
                                                <button class="genric-btn primary circle arrow" onClick={() => handleUpdateJob(jobs.job_id)}>Update</button>&nbsp;
                                                <button class="genric-btn danger circle arrow" onClick={() => handleDelete(jobs.job_id)}>Delete</button></div> 
                                        </div>
                                    </>
                                ))} 
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}