import React, { useEffect, useState } from 'react'

export default function TestimonalSection() {
    const [profile, setProfile] = useState([]);

    const fetchData = async (req, res) => {
        try {
            const response = await fetch(`http://localhost:5000/api/test/`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            const { data } = await response.json()
            console.log("testimonal", data)
            setProfile(data)
            console.log(profile)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])
    
    return (
        <>
            <div className="testimonial-area testimonial-padding ">
                {
                    profile.map(data => (
                        <div className="container" key={data._id}>
                            <div className="row d-flex justify-content-center">
                                <div className="col-xl-8 col-lg-8 col-md-10">
                                    <div className="h1-testimonial-active dot-style">
                                        <div className="single-testimonial text-center">
                                            <div className="testimonial-caption ">
                                                <div className="testimonial-founder  ">
                                                    <div className="founder-img mb-30">
                                                        <img src={data.image} alt="" style={{maxWidth : "100px",maxHeight : "100px",borderRadius : "100%"}} />
                                                        <span>{data.name}</span>
                                                        <p>{data.position}</p>
                                                    </div>
                                                </div>
                                                <div className="testimonial-top-cap">
                                                    <p>{data.reviews}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))

                }
            </div>
        </>
    )
}
