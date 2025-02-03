import React from 'react'
import {useNavigate} from 'react-router-dom'

export default function Category(props,onClick) {
    const navigate = useNavigate();
    const handleClick = ()=> {
        navigate('/joblist')
    }
  return (
    <>
               <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6" onClick={handleClick}>
                <div className="single-services text-center mb-30">
                    <div className="services-ion">
                        <span className={props.categoryData.icon}></span>
                    </div>
                    <div className="services-cap">
                        
                       <h5>{props.categoryData.category_name}</h5>
                        <span>({props.categoryData.job_count})</span>
                    </div>
                </div>
            </div>
    </>
  )
}
