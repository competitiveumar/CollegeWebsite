import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    enquiryType: '',
    message: ''
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to a server
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      enquiryType: '',
      message: ''
    });
    
    // Reset submission status after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };
  
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      
      <div className="contact-content">
        <div className="contact-info">
          <div className="contact-card">
            <div className="contact-icon">📍</div>
            <h3>Visit Us</h3>
            <p>Wellington College</p>
            <p>123 College Road</p>
            <p>London, SW1 2AB</p>
            <p>United Kingdom</p>
          </div>
          
          <div className="contact-card">
            <div className="contact-icon">📞</div>
            <h3>Call Us</h3>
            <p><strong>Main Office:</strong> +44 20 1234 5678</p>
            <p><strong>Admissions:</strong> +44 20 1234 5679</p>
            <p><strong>Student Support:</strong> +44 20 1234 5680</p>
          </div>
          
          <div className="contact-card">
            <div className="contact-icon">📧</div>
            <h3>Email Us</h3>
            <p><strong>General Enquiries:</strong> info@wellingtoncollege.ac.uk</p>
            <p><strong>Admissions:</strong> admissions@wellingtoncollege.ac.uk</p>
            <p><strong>Student Support:</strong> support@wellingtoncollege.ac.uk</p>
          </div>
          
          <div className="contact-card">
            <div className="contact-icon">🕒</div>
            <h3>Office Hours</h3>
            <p><strong>Monday-Friday:</strong> 9:00 AM - 5:00 PM</p>
            <p><strong>Saturday:</strong> 10:00 AM - 2:00 PM</p>
            <p><strong>Sunday:</strong> Closed</p>
          </div>
        </div>
        
        <div className="contact-form-container">
          <h3>Send Us a Message</h3>
          {formSubmitted ? (
            <div className="form-success">
              <img 
                src="https://img.freepik.com/free-vector/completed-concept-illustration_114360-3267.jpg" 
                alt="Message sent" 
              />
              <h4>Thank you for your message!</h4>
              <p>We have received your enquiry and will respond to you shortly.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="enquiryType">Enquiry Type</label>
                <select 
                  id="enquiryType" 
                  name="enquiryType" 
                  value={formData.enquiryType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select an option</option>
                  <option value="admission">Admission Enquiry</option>
                  <option value="programme">Programme Information</option>
                  <option value="facilities">Campus Facilities</option>
                  <option value="accommodation">Accommodation</option>
                  <option value="fees">Fees and Funding</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          )}
        </div>
      </div>
      
      <div className="map-container">
        <h3>Find Us On Map</h3>
        <div className="map-placeholder">
          <img 
            src="https://img.freepik.com/free-vector/city-map-with-pins-navigation-app_23-2148767379.jpg" 
            alt="College location map" 
          />
          <p>Interactive map loading... Please enable JavaScript to view the map.</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;