import React from 'react'
import { useState } from 'react';

export default function ApplyNowModal({ onClose }) {
    // alert("123")
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      resume: null
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    };
  
    const handleFileChange = (e) => {
      const file = e.target.files[0];
      setFormData(prevState => ({
        ...prevState,
        resume: file
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission here, e.g., send data to the server
      console.log('Form submitted with data:', formData);
      onClose(); // Close the modal after form submission
    };
  
    return (
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={onClose}>&times;</span>
          <h2>Apply Now</h2>
          <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
  
            <label>Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
  
            <label>Phone:</label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
  
            <label>Resume:</label>
            <input type="file" name="resume" onChange={handleFileChange} accept=".pdf,.doc,.docx" required />
  
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }