import { React, useState } from 'react'
import Header from '../Compnenets/Header'
import Footer from '../Compnenets/Footer'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {
  const [inputVaules, setInputValues] = useState();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/user/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: inputVaules.email, password: inputVaules.password })
    })
    const json = await response.json()
    console.log(json);
    if (json.success) {
      console.log("Success")
      const expirationTime = Date.now() + 1 * 60 * 1000;
      localStorage.setItem("userEmail",inputVaules.email)
      localStorage.setItem("auth_token",json.auth_token)
      localStorage.setItem("userId", (json.user_data.user.user_id))
      localStorage.setItem("role", (json.user_data.user.role))
      localStorage.setItem("tokenExpiration", expirationTime); 
      console.log(json.auth_token)
  
      navigate("/");
    } else {
      console.log(json.errors)
    }


  }

  const handleChange = (e) => {
    setInputValues({ ...inputVaules, [e.target.name]: e.target.value })
    // console.log(e.target.value)
  }
  
   // Check if token is expired
   const isTokenExpired = () => {
    const expirationTime = localStorage.getItem("tokenExpiration");
    return expirationTime && Date.now() > expirationTime;
  };

  // Clear localStorage if token is expired
  if (isTokenExpired()) {
    localStorage.removeItem("auth_token");
    localStorage.removeItem("tokenExpiration");
    // Additional cleanup if needed
  }
  return (
    <>
      <Header />
      <div className="container mt-5 mb-5 p-5" style={{ border: "1px solid #00000042", borderRadius: "20px" }}>
        <div className="row">
          <div className="col-12">
            <h2 className="contact-title">Login</h2>
          </div>
          <div className="col-lg-12">
            <form className="form-contact contact_form" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <input type="email"
                      name="email"
                      placeholder="Email address"
                      required
                      className="single-input"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <input type="password"
                      name="password"
                      placeholder="Password"
                      required
                      className="single-input"
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="form-group mt-12 text-center">
                <button type="submit" className="button button-contactForm boxed-btn">Login</button>
              </div>
              <div className="form-group mt-12 text-center">
                <Link to="/registration" style={{ color: "#fb246a" }}>Don't Have an Account  ?</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}