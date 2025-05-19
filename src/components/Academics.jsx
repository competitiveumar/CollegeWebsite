import React from 'react';
import '../styles/Academics.css';

const Academics = () => {
  const academicPrograms = [
    {
      id: 1,
      title: "Computer Science",
      description: "Our Computer Science programme equips students with skills in programming, algorithms, artificial intelligence, and software engineering.",
      image: "https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010158.jpg"
    },
    {
      id: 2,
      title: "Business Administration",
      description: "Develop expertise in management, marketing, finance, and entrepreneurship with our comprehensive Business Administration programme.",
      image: "https://img.freepik.com/free-photo/business-people-discussing-plans_53876-101882.jpg"
    },
    {
      id: 3,
      title: "Media & Communications",
      description: "Study journalism, digital media, public relations, and broadcasting in our state-of-the-art media facilities.",
      image: "https://img.freepik.com/free-photo/medium-shot-people-working-together_23-2150179733.jpg"
    },
    {
      id: 4,
      title: "Engineering",
      description: "Our Engineering programmes cover mechanical, electrical, civil, and chemical engineering with hands-on laboratory experience.",
      image: "https://img.freepik.com/free-photo/engineer-meeting-architectural-project-working-with-partner_1423-2581.jpg"
    },
    {
      id: 5,
      title: "Arts & Humanities",
      description: "Explore literature, history, philosophy, and the arts through our engaging humanities curriculum.",
      image: "https://img.freepik.com/free-photo/group-diverse-grads-throwing-caps-up-sky_53876-56031.jpg"
    },
    {
      id: 6,
      title: "Health Sciences",
      description: "Prepare for careers in healthcare with programmes in nursing, public health, and biomedical sciences.",
      image: "https://img.freepik.com/free-photo/medical-banner-with-doctor-wearing-coat_23-2149611240.jpg"
    }
  ];

  return (
    <div className="academics-container">
      <h2>Academic Programmes</h2>
      
      <div className="intro-text">
        <p>
          Wellington College offers a wide range of undergraduate and postgraduate programmes 
          designed to prepare students for successful careers in their chosen fields. Our academics 
          combine theoretical knowledge with practical experience, ensuring that graduates are 
          well-equipped for the challenges of the professional world.
        </p>
      </div>
      
      <div className="programs-grid">
        {academicPrograms.map((program) => (
          <div key={program.id} className="program-card">
            <div className="program-image">
              <img src={program.image} alt={program.title} />
            </div>
            <div className="program-content">
              <h3>{program.title}</h3>
              <p>{program.description}</p>
              <button className="learn-more-btn">Learn More</button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="academic-resources">
        <h3>Academic Resources</h3>
        <ul>
          <li>State-of-the-art libraries with extensive digital collections</li>
          <li>Modern laboratories and research facilities</li>
          <li>Academic advising and career counselling</li>
          <li>Study abroad opportunities at partner universities</li>
          <li>Internship and placement assistance</li>
        </ul>
      </div>
    </div>
  );
};

export default Academics; 