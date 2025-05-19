import React from 'react';
import '../styles/CampusLife.css';

const CampusLife = () => {
  const campusActivities = [
    {
      id: 1,
      title: "Student Clubs & Societies",
      description: "Join one of our 50+ student-led clubs and societies, ranging from academic interest groups to cultural associations and hobby clubs.",
      image: "https://img.freepik.com/free-photo/people-taking-photos-concert_53876-95142.jpg"
    },
    {
      id: 2,
      title: "Sports & Recreation",
      description: "Stay active and competitive with our range of sports teams, fitness classes, and recreational activities at our modern sports facilities.",
      image: "https://img.freepik.com/free-photo/sports-tools_53876-138077.jpg"
    },
    {
      id: 3,
      title: "Arts & Culture",
      description: "Express yourself through music, theatre, dance, and visual arts with regular performances, exhibitions, and cultural events.",
      image: "https://img.freepik.com/free-photo/group-people-working-out-dance-studio_1303-16684.jpg"
    },
    {
      id: 4,
      title: "Student Government",
      description: "Make your voice heard by participating in the Student Union, which represents student interests and organises campus-wide events.",
      image: "https://img.freepik.com/free-photo/medium-shot-people-discussing-project_23-2149345510.jpg"
    }
  ];

  const facilitiesInfo = [
    {
      id: 1,
      title: "Student Accommodation",
      description: "Modern, comfortable accommodation options ranging from single rooms to shared flats, all within walking distance of campus facilities.",
      image: "https://img.freepik.com/free-photo/cozy-studio-apartment-with-bedroom-living-space_1262-12323.jpg"
    },
    {
      id: 2,
      title: "Dining Options",
      description: "Multiple cafes, restaurants, and food outlets offering a variety of cuisines to cater to all dietary preferences and requirements.",
      image: "https://img.freepik.com/free-photo/restaurant-hall-with-tables-chairs_1398-2983.jpg"
    },
    {
      id: 3,
      title: "Learning Spaces",
      description: "State-of-the-art libraries, study rooms, and collaborative spaces designed to enhance your learning experience.",
      image: "https://img.freepik.com/free-photo/modern-library-with-bookshelf_23-2149139004.jpg"
    },
    {
      id: 4,
      title: "Wellness Centre",
      description: "Comprehensive health and wellbeing services, including medical care, counselling, and mental health support.",
      image: "https://img.freepik.com/free-photo/patient-having-consultation-with-doctor-clinic_1170-2197.jpg"
    }
  ];

  return (
    <div className="campus-life-container">
      <h2>Campus Life</h2>
      
      <div className="campus-banner">
        <img 
          src="https://img.freepik.com/free-photo/high-angle-shot-university-students-sitting-lecture-hall-before-class_181624-45538.jpg" 
          alt="Campus Life" 
        />
        <div className="banner-text">
          <h3>Experience a Vibrant Community</h3>
          <p>At Wellington College, campus life extends beyond the classroom. Discover a welcoming community where you can pursue your passions, make lifelong friends, and create unforgettable memories.</p>
        </div>
      </div>
      
      <section className="activities-section">
        <h3>Student Activities</h3>
        <div className="activities-grid">
          {campusActivities.map((activity) => (
            <div key={activity.id} className="activity-card">
              <img src={activity.image} alt={activity.title} />
              <div className="activity-content">
                <h4>{activity.title}</h4>
                <p>{activity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <section className="facilities-section">
        <h3>Campus Facilities</h3>
        <div className="facilities-grid">
          {facilitiesInfo.map((facility) => (
            <div key={facility.id} className="facility-card">
              <img src={facility.image} alt={facility.title} />
              <div className="facility-content">
                <h4>{facility.title}</h4>
                <p>{facility.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <section className="events-section">
        <h3>Upcoming Events</h3>
        <div className="events-list">
          <div className="event-item">
            <div className="event-date">
              <span className="month">OCT</span>
              <span className="day">15</span>
            </div>
            <div className="event-details">
              <h4>Freshers' Welcome Party</h4>
              <p>Student Union Hall, 7:00 PM - 11:00 PM</p>
            </div>
          </div>
          <div className="event-item">
            <div className="event-date">
              <span className="month">OCT</span>
              <span className="day">22</span>
            </div>
            <div className="event-details">
              <h4>Autumn Career Fair</h4>
              <p>Main Campus, 10:00 AM - 4:00 PM</p>
            </div>
          </div>
          <div className="event-item">
            <div className="event-date">
              <span className="month">NOV</span>
              <span className="day">5</span>
            </div>
            <div className="event-details">
              <h4>International Food Festival</h4>
              <p>Central Square, 12:00 PM - 6:00 PM</p>
            </div>
          </div>
          <div className="event-item">
            <div className="event-date">
              <span className="month">NOV</span>
              <span className="day">18</span>
            </div>
            <div className="event-details">
              <h4>Annual Sports Tournament</h4>
              <p>Sports Complex, 9:00 AM - 5:00 PM</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="testimonials-section">
        <h3>Student Experiences</h3>
        <div className="testimonial">
          <img 
            src="https://img.freepik.com/free-photo/portrait-young-indian-top-manager-t-shirt-tie-crossed-arms-smiling-white-isolated-wall_496169-1513.jpg" 
            alt="Student" 
            className="testimonial-img" 
          />
          <blockquote>
            "The campus life at Wellington is incredible! I've made friends from all over the world and discovered new interests through the various clubs and societies. The balance between academics and social activities is perfect."
            <cite>- James Wilson, Computer Science, Year 3</cite>
          </blockquote>
        </div>
      </section>
    </div>
  );
};

export default CampusLife; 