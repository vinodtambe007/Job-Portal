import React, { useEffect, useState } from 'react'
import Header from '../Compnenets/Header'
import Footer from '../Compnenets/Footer'
import Category from '../Compnenets/Category'
import TestimonalSection from '../Compnenets/TestimonalSection';

export default function Home() {
    const [category, setCategory] = useState([]);
    const [file, setFile] = useState()
    const loadData = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/category", {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            if (!response) {
                console.log("Error no response data found")
            }
            console.log(response.data);
            const { data } = await response.json();
            console.log(data);
            setCategory(data);
            console.log("in category", category.length)
        }
        catch (err) {
            console.error('Error:', err);
        }
    }
    useEffect(() => {
        loadData()
        // console.log("In UseEffect") 
    }, [])

    //upload resume
    const userId = localStorage.getItem("userId")
    console.log(userId)

    const upload = async () => {
        console.log(file)
        const formData = new FormData();
        formData.append('file', file); // Assuming 'file' is the file object you want to upload
        try {
            const response = await fetch(`http://localhost:5000/api/candidate/upload/${userId}`, {
                method: 'POST', // Assuming your backend expects POST requests
                body: formData, // Set FormData object as the request body
            });
            const data = await response.json();
            console.log(data);
            alert("Resume Uploaded Succesfully")
        } catch (error) {
            console.error('Error:', error);
        }

    }
    return (
        <div>
            <Header />
            <main>
                <div className="slider-area ">
                    <div className="slider-active">
                        <div className="single-slider slider-height d-flex align-items-center" style={{ backgroundImage: `url('assets/img/hero/h1_hero.jpg')` }}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-6 col-lg-9 col-md-10">
                                        <div className="hero__caption">
                                            <h1>Find the most exciting startup jobs</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-8">
                                        <form action="#" className="search-box">
                                            <div className="input-form">
                                                <input type="text" placeholder="Job Tittle or keyword" />
                                            </div>
                                            <div className="select-form">
                                                <div className="select-itms">
                                                    <select name="select" id="select1" >
                                                        <option value="">Location BD</option>
                                                        <option value="">Location PK</option>
                                                        <option value="">Location US</option>
                                                        <option value="">Location UK</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="search-form">
                                                <a href="#">Find job</a>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="our-services section-pad-t30">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-tittle text-center">
                                    <span>FEATURED TOURS Packages</span>
                                    <h2>Browse Top Categories </h2>
                                </div>
                            </div>
                        </div>
                        {/* category components start  */}
                        <div className="row d-flex justify-contnet-center">
                            {
                                category.length !== 0 ?
                                    category.map((data) => (
                                        <>
                                            {/* <Category key={data._id} icon={data.icon} cname={data.category_name} job={data.job_count} /> */}
                                            <Category key={data._id} categoryData={data} />

                                        </>
                                    )) :
                                    <div>
                                        No data found!!
                                    </div>
                            }
                            {/* <Category icon="flaticon-tour" cname="Design & Creative" job={658} />
                            <Category icon="flaticon-cms" cname="Design & Development" job={658} />
                            <Category icon="flaticon-report" cname="Sales & Marketing" job={658} />
                            <Category icon="flaticon-app" cname="Mobile Application" job={658} />
                            <Category icon="flaticon-helmet" cname="Construction" job={658} />
                            <Category icon="flaticon-high-tech" cname="Information Technology" job={658} />
                            <Category icon="flaticon-real-estate" cname="Real Estate" job={658} />
                            <Category icon="flaticon-content" cname="Content Writer" job={658} /> */}
                        </div>
                        {/* category components end */}
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="browse-btn2 text-center mt-50">
                                    <a href="job_listing.html" className="border-btn2">Browse All Sectors</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="online-cv cv-bg section-overly pt-90 pb-120" style={{ backgroundImage: `url('assets/img/gallery/cv_bg.jpg')` }}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-10">
                                <div className="cv-caption text-center">
                                    <p className="pera1">FEATURED TOURS Packages</p>
                                    <p className="pera2"> Make a Difference with Your Online Resume!</p>
                                    {
                                        (localStorage.getItem("auth_token") && localStorage.getItem("role") === 'Candidate')?
                                        <>
                                            <input type='file' className="border-btn2 border-btn4" onChange={(e) => setFile(e.target.files[0])}/>
                                            <button className="btn head-btn1" onClick={upload} style={{marginLeft:"10px",borderRadius:"10px"}}>Upload</button>
                                        </>
                                        :
                                        <>For Upload Resume you Have To Login</>
                                    }
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="featured-job-area feature-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-tittle text-center">
                                    <span>Recent Job</span>
                                    <h2>Featured Jobs</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-xl-10">
                                <div className="single-job-items mb-30">
                                    <div className="job-items">
                                        <div className="company-img">
                                            <a href="job_details.html"><img src="assets/img/icon/job-list1.png" alt="" /></a>
                                        </div>
                                        <div className="job-tittle">
                                            <a href="job_details.html"><h4>Digital Marketer</h4></a>
                                            <ul>
                                                <li>Creative Agency</li>
                                                <li><i className="fas fa-map-marker-alt"></i>Athens, Greece</li>
                                                <li>$3500 - $4000</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="items-link f-right">
                                        <a href="job_details.html">Full Time</a>
                                        <span>7 hours ago</span>
                                    </div>
                                </div>
                                <div className="single-job-items mb-30">
                                    <div className="job-items">
                                        <div className="company-img">
                                            <a href="job_details.html"><img src="assets/img/icon/job-list2.png" alt="" /></a>
                                        </div>
                                        <div className="job-tittle">
                                            <a href="job_details.html"><h4>Digital Marketer</h4></a>
                                            <ul>
                                                <li>Creative Agency</li>
                                                <li><i className="fas fa-map-marker-alt"></i>Athens, Greece</li>
                                                <li>$3500 - $4000</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="items-link f-right">
                                        <a href="job_details.html">Full Time</a>
                                        <span>7 hours ago</span>
                                    </div>
                                </div>
                                <div className="single-job-items mb-30">
                                    <div className="job-items">
                                        <div className="company-img">
                                            <a href="job_details.html"><img src="assets/img/icon/job-list3.png" alt="" /></a>
                                        </div>
                                        <div className="job-tittle">
                                            <a href="job_details.html"><h4>Digital Marketer</h4></a>
                                            <ul>
                                                <li>Creative Agency</li>
                                                <li><i className="fas fa-map-marker-alt"></i>Athens, Greece</li>
                                                <li>$3500 - $4000</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="items-link f-right">
                                        <a href="job_details.html">Full Time</a>
                                        <span>7 hours ago</span>
                                    </div>
                                </div>
                                <div className="single-job-items mb-30">
                                    <div className="job-items">
                                        <div className="company-img">
                                            <a href="job_details.html"><img src="assets/img/icon/job-list4.png" alt="" /></a>
                                        </div>
                                        <div className="job-tittle">
                                            <a href="job_details.html"><h4>Digital Marketer</h4></a>
                                            <ul>
                                                <li>Creative Agency</li>
                                                <li><i className="fas fa-map-marker-alt"></i>Athens, Greece</li>
                                                <li>$3500 - $4000</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="items-link f-right">
                                        <a href="job_details.html">Full Time</a>
                                        <span>7 hours ago</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="apply-process-area apply-bg pt-150 pb-150" style={{ backgroundImage: `url('assets/img/gallery/how-applybg.png')` }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-tittle white-text text-center">
                                    <span>Apply process</span>
                                    <h2> How it works</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="single-process text-center mb-30">
                                    <div className="process-ion">
                                        <span className="flaticon-search"></span>
                                    </div>
                                    <div className="process-cap">
                                        <h5>1. Search a job</h5>
                                        <p>Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod tempor incididunt ut laborea.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single-process text-center mb-30">
                                    <div className="process-ion">
                                        <span className="flaticon-curriculum-vitae"></span>
                                    </div>
                                    <div className="process-cap">
                                        <h5>2. Apply for job</h5>
                                        <p>Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod tempor incididunt ut laborea.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single-process text-center mb-30">
                                    <div className="process-ion">
                                        <span className="flaticon-tour"></span>
                                    </div>
                                    <div className="process-cap">
                                        <h5>3. Get your job</h5>
                                        <p>Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod tempor incididunt ut laborea.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <TestimonalSection />
                
                <div className="support-company-area support-padding fix">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-6 col-lg-6">
                                <div className="right-caption">
                                    <div className="section-tittle section-tittle2">
                                        <span>What we are doing</span>
                                        <h2>24k Talented people are getting Jobs</h2>
                                    </div>
                                    <div className="support-caption">
                                        <p className="pera-top">Mollit anim laborum duis au dolor in voluptate velit ess cillum dolore eu lore dsu quality mollit anim laborumuis au dolor in voluptate velit cillum.</p>
                                        <p>Mollit anim laborum.Duis aute irufg dhjkolohr in re voluptate velit esscillumlore eu quife nrulla parihatur. Excghcepteur signjnt occa cupidatat non inulpadeserunt mollit aboru. temnthp incididbnt ut labore mollit anim laborum suis aute.</p>
                                        <a href="about.html" className="btn post-btn">Post a job</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6">
                                <div className="support-location-img">
                                    <img src="assets/img/service/support-img.jpg" alt="" />
                                    <div className="support-img-cap text-center">
                                        <p>Since</p>
                                        <span>1994</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home-blog-area blog-h-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-tittle text-center">
                                    <span>Our latest blog</span>
                                    <h2>Our recent news</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6">
                                <div className="home-blog-single mb-30">
                                    <div className="blog-img-cap">
                                        <div className="blog-img">
                                            <img src="assets/img/blog/home-blog1.jpg" alt="" />
                                            <div className="blog-date text-center">
                                                <span>24</span>
                                                <p>Now</p>
                                            </div>
                                        </div>
                                        <div className="blog-cap">
                                            <p>|   Properties</p>
                                            <h3><a href="single-blog.html">Footprints in Time is perfect House in Kurashiki</a></h3>
                                            <a href="#" className="more-btn">Read more »</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6">
                                <div className="home-blog-single mb-30">
                                    <div className="blog-img-cap">
                                        <div className="blog-img">
                                            <img src="assets/img/blog/home-blog2.jpg" alt="" />
                                            <div className="blog-date text-center">
                                                <span>24</span>
                                                <p>Now</p>
                                            </div>
                                        </div>
                                        <div className="blog-cap">
                                            <p>|   Properties</p>
                                            <h3><a href="single-blog.html">Footprints in Time is perfect House in Kurashiki</a></h3>
                                            <a href="#" className="more-btn">Read more »</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}