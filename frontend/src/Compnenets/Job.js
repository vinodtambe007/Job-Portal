import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


export default function Job() {
    const [jobs, setJobs] = useState([]);

    const navigate = useNavigate();
    
    const fetchData = async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/jobs`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const { data } = await response.json();
            console.log("joblist", data);
            if (data.length > 0) {
                setJobs(data)
            } else {
                console.log("No jobs found.");
            }

            console.log("jons = ", jobs);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData()
    }, []);

    
    const handleClick = (jobId) => {
    console.log(jobId)
    localStorage.setItem('jobId', jobId);
        navigate(`/jobdetails`)
    }

    return (
        <>
                {
                     
                    jobs.map(job => (
                        <>
                        <div className="single-job-items mb-10 mt-10" onClick={() => handleClick(job.job_id)}>
                        <div className="job-items" key={job._id}>
                        <div className="company-img">
                            <a href="#"><img src="assets/img/icon/job-list2.png" alt="" /></a>
                        </div>
                        <div className="job-tittle job-tittle2">
                            <a href="#">
                                <h4>{job.job_title}</h4>
                            </a>
                            <ul>
                                <li>{job.job_short_desc}</li>
                                <li><i className="fas fa-map-marker-alt"></i>{job.location}</li>
                                <li>{job.salary}</li>
                            </ul>
                        </div>
                    </div>
                    <div className="items-link items-link2 f-right">
                        <a href="job_details.html">{job.job_type}</a>
                        <span>Abhi Kiya</span>
                    </div>
                    </div>
                    </>
                    ))
                }
           
        </>
    );

}
