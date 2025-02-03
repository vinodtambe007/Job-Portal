import React from 'react'

export default function Slider(props) {
  return (
    <div>
      <div className="slider-area ">
                    <div className="single-slider section-overly slider-height2 d-flex align-items-center" style={{backgroundImage: `url('assets/img/hero/about.jpg')`}}>
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="hero-cap text-center">
                                        <h2>{props.pagename}</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    </div>
  )
}
