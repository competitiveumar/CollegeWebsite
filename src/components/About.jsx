import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about-container">
      <h2>About Wellington College</h2>
      
      <div className="about-content">
        <div className="about-image">
          <img 
            src="https://img.freepik.com/free-photo/group-college-students-standing-outside-building_1303-16027.jpg" 
            alt="College Campus" 
          />
        </div>
        
        <div className="about-text">
          <h3>Our History</h3>
          <p>
            Founded in 1853, Wellington College has a rich history of academic excellence and innovation. 
            For over 170 years, we have been committed to providing high-quality education to students from 
            across the United Kingdom and around the world.
          </p>
          
          <h3>Our Mission</h3>
          <p>
            Wellington College is dedicated to fostering intellectual curiosity, critical thinking, and personal growth.
            We aim to prepare our students not only for successful careers but also for meaningful contributions to society.
          </p>
          
          <h3>Our Values</h3>
          <ul>
            <li><strong>Excellence:</strong> We strive for the highest standards in all our endeavours.</li>
            <li><strong>Integrity:</strong> We value honesty, respect, and ethical behaviour.</li>
            <li><strong>Innovation:</strong> We embrace creative thinking and new approaches to education.</li>
            <li><strong>Inclusivity:</strong> We welcome diversity and foster an environment where everyone belongs.</li>
            <li><strong>Community:</strong> We nurture strong relationships among students, faculty, and staff.</li>
          </ul>
        </div>
      </div>
      
      <div className="about-stats">
        <div className="stat-item">
          <h3>170+</h3>
          <p>Years of Excellence</p>
        </div>
        <div className="stat-item">
          <h3>15,000+</h3>
          <p>Alumni Worldwide</p>
        </div>
        <div className="stat-item">
          <h3>200+</h3>
          <p>Expert Faculty</p>
        </div>
        <div className="stat-item">
          <h3>50+</h3>
          <p>Programmes Offered</p>
        </div>
      </div>
    </div>
  );
};

export default About; 