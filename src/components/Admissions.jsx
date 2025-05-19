import React from 'react';
import '../styles/Admissions.css';

const Admissions = () => {
  const admissionSteps = [
    {
      id: 1,
      title: "Research Programmes",
      description: "Explore our academic programmes to find the one that matches your interests and career goals.",
      icon: "🔍"
    },
    {
      id: 2,
      title: "Check Requirements",
      description: "Review the entry requirements for your chosen programme, including academic qualifications and English language proficiency.",
      icon: "📋"
    },
    {
      id: 3,
      title: "Submit Application",
      description: "Complete the online application form and upload all required documents, including transcripts and personal statement.",
      icon: "📝"
    },
    {
      id: 4,
      title: "Interview Process",
      description: "Shortlisted candidates may be invited for an interview, which can be conducted in person or online.",
      icon: "💬"
    },
    {
      id: 5,
      title: "Receive Offer",
      description: "Successful applicants will receive an offer letter specifying the terms of admission.",
      icon: "📨"
    },
    {
      id: 6,
      title: "Accept Offer & Enrol",
      description: "Accept your offer, pay the deposit, and complete the enrolment process to secure your place.",
      icon: "✅"
    }
  ];

  return (
    <div className="admissions-container">
      <h2>Admissions</h2>
      
      <div className="admissions-banner">
        <img 
          src="https://img.freepik.com/free-photo/group-diverse-students-campus_53876-140888.jpg" 
          alt="Students on campus" 
        />
        <div className="banner-overlay">
          <h3>Join Our Community of Scholars</h3>
          <p>Applications for the 2023-2024 academic year are now open!</p>
          <button className="apply-btn">Apply Now</button>
        </div>
      </div>
      
      <div className="admission-process">
        <h3>Application Process</h3>
        <div className="process-steps">
          {admissionSteps.map((step) => (
            <div key={step.id} className="step-card">
              <div className="step-icon">{step.icon}</div>
              <h4>{step.title}</h4>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="requirements-section">
        <h3>General Requirements</h3>
        <ul>
          <li>Completed application form</li>
          <li>Personal statement (500-800 words)</li>
          <li>Academic transcripts and certificates</li>
          <li>English language proficiency (IELTS 6.5 or equivalent)</li>
          <li>Two academic references</li>
          <li>CV/Resume (for postgraduate programmes)</li>
          <li>Portfolio (for relevant creative programmes)</li>
        </ul>
        <p className="note">
          <strong>Note:</strong> Specific programmes may have additional requirements.
          Please check the individual programme pages for details.
        </p>
      </div>
      
      <div className="key-dates">
        <h3>Key Dates</h3>
        <div className="dates-grid">
          <div className="date-item">
            <h4>15 October</h4>
            <p>Early application deadline</p>
          </div>
          <div className="date-item">
            <h4>15 January</h4>
            <p>Main application deadline</p>
          </div>
          <div className="date-item">
            <h4>31 March</h4>
            <p>Late application deadline</p>
          </div>
          <div className="date-item">
            <h4>June-August</h4>
            <p>Enrolment period</p>
          </div>
          <div className="date-item">
            <h4>September</h4>
            <p>Start of academic year</p>
          </div>
        </div>
      </div>
      
      <div className="contact-info">
        <h3>Contact Admissions</h3>
        <p>For any questions regarding the application process, please contact our admissions team:</p>
        <p><strong>Email:</strong> admissions@wellingtoncollege.ac.uk</p>
        <p><strong>Phone:</strong> +44 20 1234 5678</p>
        <p><strong>Office Hours:</strong> Monday to Friday, 9:00 AM - 5:00 PM</p>
      </div>
    </div>
  );
};

export default Admissions; 