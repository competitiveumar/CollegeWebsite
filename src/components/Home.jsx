import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  const highlights = [
    {
      id: 1,
      title: "Academic Excellence",
      description: "Our programmes are designed to challenge and inspire, with world-class faculty dedicated to your success.",
      icon: "🎓",
      link: "/academics"
    },
    {
      id: 2,
      title: "Modern Facilities",
      description: "State-of-the-art classrooms, laboratories, libraries, and recreational spaces support your learning journey.",
      icon: "🏛️",
      link: "/campus-life"
    },
    {
      id: 3,
      title: "Global Community",
      description: "Join a diverse community of students and scholars from over 80 countries around the world.",
      icon: "🌍",
      link: "/about"
    },
    {
      id: 4,
      title: "Career Support",
      description: "Comprehensive career services to help you transition from education to professional success.",
      icon: "💼",
      link: "/academics"
    }
  ];

  const latestNews = [
    {
      id: 1,
      title: "Wellington College Ranks in Top 50 UK Universities",
      date: "10 September 2023",
      image: "https://img.freepik.com/free-photo/education-campus-college-building-concept_53876-146485.jpg"
    },
    {
      id: 2,
      title: "New Business Innovation Centre Opens on Campus",
      date: "5 September 2023",
      image: "https://img.freepik.com/free-photo/workplace-results-professional-report-accounting-during-discussion_1418-61.jpg"
    },
    {
      id: 3,
      title: "Wellington Students Win National Research Competition",
      date: "30 August 2023",
      image: "https://img.freepik.com/free-photo/researchers-making-scientific-discovery-with-microscope_23-2149197653.jpg"
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Open Day for Prospective Students",
      date: "15 October 2023",
      time: "10:00 AM - 4:00 PM",
      location: "Main Campus"
    },
    {
      id: 2,
      title: "Guest Lecture: Future of Artificial Intelligence",
      date: "22 October 2023",
      time: "2:00 PM - 4:00 PM",
      location: "Lincoln Auditorium"
    },
    {
      id: 3,
      title: "Annual Career Fair",
      date: "29 October 2023",
      time: "11:00 AM - 5:00 PM",
      location: "Wellington Hall"
    },
    {
      id: 4,
      title: "Student Art Exhibition",
      date: "5 November 2023",
      time: "6:00 PM - 9:00 PM",
      location: "Arts Centre"
    }
  ];

  return (
    <div className="home-container">
      {/* Hero Banner */}
      <div className="hero-banner">
        <div className="hero-content">
          <h1>Welcome to Wellington College</h1>
          <p>Inspiring Excellence, Shaping Futures</p>
          <div className="hero-buttons">
            <Link to="/about" className="btn primary-btn">Discover Our College</Link>
            <Link to="/admissions" className="btn secondary-btn">Apply Now</Link>
          </div>
        </div>
        <img 
          src="https://img.freepik.com/free-photo/group-diverse-students-working-together_1303-10801.jpg" 
          alt="Wellington College Campus" 
          className="hero-image" 
        />
      </div>

      {/* College Highlights */}
      <section className="highlights-section">
        <h2>Why Choose Wellington College</h2>
        <div className="highlights-grid">
          {highlights.map((highlight) => (
            <div key={highlight.id} className="highlight-card">
              <div className="highlight-icon">{highlight.icon}</div>
              <h3>{highlight.title}</h3>
              <p>{highlight.description}</p>
              <Link to={highlight.link} className="highlight-link">Learn More</Link>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Programmes */}
      <section className="featured-programmes">
        <h2>Featured Programmes</h2>
        <div className="programmes-container">
          <div className="programme-item">
            <img 
              src="https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010142.jpg" 
              alt="Computer Science" 
            />
            <div className="programme-content">
              <h3>Computer Science</h3>
              <p>Become a leader in technology innovation with our cutting-edge curriculum.</p>
              <Link to="/academics" className="programme-link">Explore Programme</Link>
            </div>
          </div>

          <div className="programme-item">
            <img 
              src="https://img.freepik.com/free-photo/businesswoman-presentation-woman-demonstrating-graphs-charts_1150-13189.jpg" 
              alt="Business Administration" 
            />
            <div className="programme-content">
              <h3>Business Administration</h3>
              <p>Develop the skills needed to excel in the global business environment.</p>
              <Link to="/academics" className="programme-link">Explore Programme</Link>
            </div>
          </div>

          <div className="programme-item">
            <img 
              src="https://img.freepik.com/free-photo/art-supplies-paint-tubes-palette_23-2147694176.jpg" 
              alt="Arts & Design" 
            />
            <div className="programme-content">
              <h3>Arts & Design</h3>
              <p>Express your creativity and pursue your passion for visual arts.</p>
              <Link to="/academics" className="programme-link">Explore Programme</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="news-section">
        <div className="section-header">
          <h2>Latest News</h2>
          <Link to="/notices" className="view-all-link">View All News</Link>
        </div>
        <div className="news-grid">
          {latestNews.map((news) => (
            <div key={news.id} className="news-card">
              <img src={news.image} alt={news.title} />
              <div className="news-content">
                <span className="news-date">{news.date}</span>
                <h3>{news.title}</h3>
                <Link to="/notices" className="read-more">Read More</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="events-section">
        <div className="section-header">
          <h2>Upcoming Events</h2>
          <Link to="/notices" className="view-all-link">View All Events</Link>
        </div>
        <div className="events-list">
          {upcomingEvents.map((event) => (
            <div key={event.id} className="event-item">
              <div className="event-date-container">
                <span className="event-date">{event.date.split(' ')[0]}</span>
                <span className="event-month">{event.date.split(' ')[1]}</span>
              </div>
              <div className="event-details">
                <h3>{event.title}</h3>
                <p><span className="event-time">{event.time}</span> | <span className="event-location">{event.location}</span></p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Join Our Community?</h2>
          <p>Take the first step towards your future at Wellington College.</p>
          <div className="cta-buttons">
            <Link to="/admissions" className="btn primary-btn">Apply Now</Link>
            <Link to="/contact" className="btn secondary-btn">Contact Us</Link>
          </div>
        </div>
        <img 
          src="https://img.freepik.com/free-photo/graduation-cap-diploma-placed-desk_1150-17666.jpg" 
          alt="Graduation" 
          className="cta-image" 
        />
      </section>
      
      {/* Testimonials */}
      <section className="testimonials-section">
        <h2>What Our Students Say</h2>
        <div className="testimonial">
          <img 
            src="https://img.freepik.com/free-photo/waist-up-portrait-happy-african-student-girl-with-books-happy-smile-education-concept_1258-83365.jpg" 
            alt="Student Testimonial" 
            className="testimonial-image" 
          />
          <blockquote>
            "My time at Wellington College has been transformative. The supportive faculty, diverse community, and rich learning experiences have prepared me well for my career goals."
            <cite>- Sarah Johnson, Computer Science Graduate</cite>
          </blockquote>
        </div>
      </section>
    </div>
  );
};

export default Home; 