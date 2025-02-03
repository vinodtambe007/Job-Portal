import React from 'react'
import Header from '../Compnenets/Header'
import Footer from '../Compnenets/Footer'
import Slider from '../Compnenets/Slider';
import Job from '../Compnenets/Job';

export default function JobList() {
  return (
    <div>
        <Header/>
          <main>
        <Slider pagename ="Get your job" />
<div className="job-listing-area pt-120 pb-120">
    <div className="container">
        <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-4">
                <div className="row">
                    <div className="col-12">
                            <div className="small-section-tittle2 mb-45">
                            <h4>Filter Jobs</h4>
                        </div>
                    </div>
                </div>
                <div className="job-category-listing mb-50">
                    <div className="single-listing">
                       <div className="small-section-tittle2">
                             <h4>Job Category</h4>
                       </div>
                        <div className="select-job-items2">
                            <select name="select">
                                <option value="">All Category</option>
                                <option value="">Category 1</option>
                                <option value="">Category 2</option> 
                                <option value="">Category 3</option>
                                <option value="">Category 4</option>
                            </select>
                        </div>
                        <div className="select-Categories pt-80 pb-50">
                            <div className="small-section-tittle2">
                                <h4>Job Type</h4>
                            </div>
                            <label className="container">Full Time
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                            </label>
                            <label className="container">Part Time
                                <input type="checkbox" checked="checked active"/>
                                <span className="checkmark"></span>
                            </label>
                            <label className="container">Remote
                                <input type="checkbox"/>
                                <span className="checkmark"></span>
                            </label>
                            <label className="container">Freelance
                                <input type="checkbox"/>
                                <span className="checkmark"></span>
                            </label>
                        </div>
                    </div>
                    <div className="single-listing">
                       <div className="small-section-tittle2">
                             <h4>Job Location</h4>
                       </div>
                        <div className="select-job-items2">
                            <select name="select">
                                <option value="">Anywhere</option>
                                <option value="">Category 1</option>
                                <option value="">Category 2</option>
                                <option value="">Category 3</option>
                                <option value="">Category 4</option>
                            </select>
                        </div>
                        <div className="select-Categories pt-80 pb-50">
                            <div className="small-section-tittle2">
                                <h4>Experience</h4>
                            </div>
                            <label className="container">1-2 Years
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                            </label>
                            <label className="container">2-3 Years
                                <input type="checkbox" checked="checked active"/>
                                <span className="checkmark"></span>
                            </label>
                            <label className="container">3-6 Years
                                <input type="checkbox"/>
                                <span className="checkmark"></span>
                            </label>
                            <label className="container">6-more..
                                <input type="checkbox"/>
                                <span className="checkmark"></span>
                            </label>
                        </div>
                    </div>
                    <div className="single-listing">
                        <div className="select-Categories pb-50">
                            <div className="small-section-tittle2">
                                <h4>Posted Within</h4>
                            </div>
                            <label className="container">Any
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                            </label>
                            <label className="container">Today
                                <input type="checkbox" checked="checked active"/>
                                <span className="checkmark"></span>
                            </label>
                            <label className="container">Last 2 days
                                <input type="checkbox"/>
                                <span className="checkmark"></span>
                            </label>
                            <label className="container">Last 3 days
                                <input type="checkbox"/>
                                <span className="checkmark"></span>
                            </label>
                            <label className="container">Last 5 days
                                <input type="checkbox"/>
                                <span className="checkmark"></span>
                            </label>
                            <label className="container">Last 10 days
                                <input type="checkbox"/>
                                <span className="checkmark"></span>
                            </label>
                        </div>
                    </div>
                    <div className="single-listing">
                        <aside className="left_widgets p_filter_widgets price_rangs_aside sidebar_box_shadow">
                            <div className="small-section-tittle2">
                                <h4>Filter Jobs</h4>
                            </div>
                            <div className="widgets_inner">
                                <div className="range_item">
                                    <div id="slider-range"></div> 
                                    <input type="text" className="js-range-slider" value="" />
                                    <div className="d-flex align-items-center">
                                        <div className="price_text">
                                            <p>Price :</p>
                                        </div>
                                        <div className="price_value d-flex justify-content-center">
                                            <input type="text" className="js-input-from" id="amount" readonly />
                                            <span>to</span>
                                            <input type="text" className="js-input-to" id="amount" readonly />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
            <div className="col-xl-9 col-lg-9 col-md-8">
              
                <section className="featured-job-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="count-job mb-35">
                                    <span>39, 782 Jobs found</span>
                                    <div className="select-job-items">
                                        <span>Sort by</span>
                                        <select name="select">
                                            <option value="">None</option>
                                            <option value="">job list</option>
                                            <option value="">job list</option>
                                            <option value="">job list</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
      
                        {/* <Job /> */}

                         <Job/>

                        <div className="single-job-items mb-30">
                            <div className="job-items">
                                <div className="company-img">
                                    <a href="#"><img src="assets/img/icon/job-list2.png" alt=""/></a>
                                </div>
                                <div className="job-tittle job-tittle2">
                                    <a href="#">
                                        <h4>Vinod Digital Marketer</h4>
                                    </a>
                                    <ul>
                                        <li>Creative Agency</li>
                                        <li><i className="fas fa-map-marker-alt"></i>Athens, Greece</li>
                                        <li>$3500 - $4000</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="items-link items-link2 f-right">
                                <a href="job_details.html">Full Time</a>
                                <span>7 hours ago</span>
                            </div>
                        </div>
                        <div className="single-job-items mb-30">
                            <div className="job-items">
                                <div className="company-img">
                                    <a href="#"><img src="assets/img/icon/job-list3.png" alt=""/></a>
                                </div>
                                <div className="job-tittle job-tittle2">
                                    <a href="#">
                                        <h4>Digital Marketer</h4>
                                    </a>
                                    <ul>
                                        <li>Creative Agency</li>
                                        <li><i className="fas fa-map-marker-alt"></i>Athens, Greece</li>
                                        <li>$3500 - $4000</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="items-link items-link2 f-right">
                                <a href="job_details.html">Full Time</a>
                                <span>7 hours ago</span>
                            </div>
                        </div>
                        <div className="single-job-items mb-30">
                            <div className="job-items">
                                <div className="company-img">
                                    <a href="#"><img src="assets/img/icon/job-list4.png" alt=""/></a>
                                </div>
                                <div className="job-tittle job-tittle2">
                                    <a href="#">
                                        <h4>Digital Marketer</h4>
                                    </a>
                                    <ul>
                                        <li>Creative Agency</li>
                                        <li><i className="fas fa-map-marker-alt"></i>Athens, Greece</li>
                                        <li>$3500 - $4000</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="items-link items-link2 f-right">
                                <a href="job_details.html">Full Time</a>
                                <span>7 hours ago</span>
                            </div>
                        </div>
                        <div className="single-job-items mb-30">
                            <div className="job-items">
                                <div className="company-img">
                                    <a href="#"><img src="assets/img/icon/job-list1.png" alt=""/></a>
                                </div>
                                <div className="job-tittle job-tittle2">
                                    <a href="#">
                                        <h4>Digital Marketer</h4>
                                    </a>
                                    <ul>
                                        <li>Creative Agency</li>
                                        <li><i className="fas fa-map-marker-alt"></i>Athens, Greece</li>
                                        <li>$3500 - $4000</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="items-link items-link2 f-right">
                                <a href="job_details.html">Full Time</a>
                                <span>7 hours ago</span>
                            </div>
                        </div>
                        <div className="single-job-items mb-30">
                            <div className="job-items">
                                <div className="company-img">
                                    <a href="#"><img src="assets/img/icon/job-list3.png" alt=""/></a>
                                </div>
                                <div className="job-tittle job-tittle2">
                                    <a href="#">
                                        <h4>Digital Marketer</h4>
                                    </a>
                                    <ul>
                                        <li>Creative Agency</li>
                                        <li><i className="fas fa-map-marker-alt"></i>Athens, Greece</li>
                                        <li>$3500 - $4000</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="items-link items-link2 f-right">
                                <a href="job_details.html">Full Time</a>
                                <span>7 hours ago</span>
                            </div>
                        </div>
                        <div className="single-job-items mb-30">
                            <div className="job-items">
                                <div className="company-img">
                                    <a href="#"><img src="assets/img/icon/job-list4.png" alt=""/></a>
                                </div>
                                <div className="job-tittle job-tittle2">
                                    <a href="#">
                                        <h4>Digital Marketer</h4>
                                    </a>
                                    <ul>
                                        <li>Creative Agency</li>
                                        <li><i className="fas fa-map-marker-alt"></i>Athens, Greece</li>
                                        <li>$3500 - $4000</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="items-link items-link2 f-right">
                                <a href="job_details.html">Full Time</a>
                                <span>7 hours ago</span>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
</div>
<div className="pagination-area pb-115 text-center">
    <div className="container">
        <div className="row">
            <div className="col-xl-12">
                <div className="single-wrap d-flex justify-content-center">
                    <nav aria-label="Page navigation example">
                        <ul className="pagination justify-content-start">
                            <li className="page-item active"><a className="page-link" href="#">01</a></li>
                            <li className="page-item"><a className="page-link" href="#">02</a></li>
                            <li className="page-item"><a className="page-link" href="#">03</a></li>
                        <li className="page-item"><a className="page-link" href="#"><span className="ti-angle-right"></span></a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</div>

</main>
<Footer/>
    </div>
  )
}
