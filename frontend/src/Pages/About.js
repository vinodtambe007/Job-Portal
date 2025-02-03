import React from 'react'
import Header from '../Compnenets/Header'
import Footer from '../Compnenets/Footer'
import Slider from '../Compnenets/Slider'
import TestimonalSection from '../Compnenets/TestimonalSection'


export default function About() {

    return (
        <div>
            <Header/>
            <main>
                <Slider pagename ="About us"/>

                <div className="support-company-area fix section-padding2">
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

                <div className="apply-process-area apply-bg pt-150 pb-150" style={{backgroundImage: `url('assets/img/gallery/how-applybg.png')`}} >
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
                <TestimonalSection />
                 <TestimonalSection />
                <div className="online-cv cv-bg section-overly pt-90 pb-120" data-background="assets/img/gallery/cv_bg.jpg">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-10">
                                <div className="cv-caption text-center">
                                    <p className="pera1">FEATURED TOURS Packages</p>
                                    <p className="pera2"> Make a Difference with Your Online Resume!</p>
                                    <a href="#" className="border-btn2 border-btn4">Upload your cv</a>
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
            <Footer/>
        </div>
    )
}
