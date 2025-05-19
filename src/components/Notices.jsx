import React, { useState } from 'react';
import '../styles/Notices.css';

const Notices = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const noticeData = [
    {
      id: 1,
      title: "Autumn Term Registration Open",
      date: "08 September 2023",
      category: "academic",
      content: "Registration for the Autumn Term 2023 is now open. All students must complete their registration by 25 September. Please log in to the student portal to complete the process.",
      important: true
    },
    {
      id: 2,
      title: "Library Extended Hours During Exams",
      date: "15 September 2023",
      category: "facility",
      content: "The main library will extend its opening hours to 24/7 during the examination period from 1st October to 15th October to support student studying needs.",
      important: false
    },
    {
      id: 3,
      title: "Guest Lecture: AI and Future of Education",
      date: "20 September 2023",
      category: "event",
      content: "We are pleased to announce a guest lecture by Professor Sarah Johnson from Oxford University on 'AI and the Future of Education' on 5th October at 2:00 PM in the Main Auditorium.",
      important: false
    },
    {
      id: 4,
      title: "COVID-19 Safety Protocols Update",
      date: "22 September 2023",
      category: "health",
      content: "Please note the updated COVID-19 safety protocols for the new academic year. While masks are now optional in most settings, they are still required in healthcare facilities on campus.",
      important: true
    },
    {
      id: 5,
      title: "Scholarship Applications Deadline",
      date: "25 September 2023",
      category: "academic",
      content: "The deadline for applying for the Wellington Merit Scholarship for the Spring term is 15th October. Please submit all required documents to the financial aid office.",
      important: true
    },
    {
      id: 6,
      title: "Campus Wi-Fi Maintenance",
      date: "28 September 2023",
      category: "facility",
      content: "The campus Wi-Fi network will undergo maintenance on 30th September from 10:00 PM to 2:00 AM. Internet services may be interrupted during this period.",
      important: false
    },
    {
      id: 7,
      title: "Student Council Elections",
      date: "01 October 2023",
      category: "event",
      content: "Nominations for the Student Council elections are now open. Interested candidates can submit their nominations by 10th October. The election will be held on 20th October.",
      important: false
    },
    {
      id: 8,
      title: "Career Fair 2023",
      date: "03 October 2023",
      category: "event",
      content: "The annual Career Fair will be held on 22nd October from 10:00 AM to 4:00 PM in the Main Hall. Over 50 companies will be present to discuss career opportunities.",
      important: false
    }
  ];

  const filteredNotices = activeCategory === 'all' 
    ? noticeData 
    : noticeData.filter(notice => notice.category === activeCategory);

  return (
    <div className="notices-container">
      <h2>Notices & Announcements</h2>
      
      <div className="notice-filters">
        <button 
          className={activeCategory === 'all' ? 'active' : ''} 
          onClick={() => setActiveCategory('all')}
        >
          All Notices
        </button>
        <button 
          className={activeCategory === 'academic' ? 'active' : ''} 
          onClick={() => setActiveCategory('academic')}
        >
          Academic
        </button>
        <button 
          className={activeCategory === 'event' ? 'active' : ''} 
          onClick={() => setActiveCategory('event')}
        >
          Events
        </button>
        <button 
          className={activeCategory === 'facility' ? 'active' : ''} 
          onClick={() => setActiveCategory('facility')}
        >
          Facilities
        </button>
        <button 
          className={activeCategory === 'health' ? 'active' : ''} 
          onClick={() => setActiveCategory('health')}
        >
          Health & Safety
        </button>
      </div>
      
      <div className="notices-grid">
        {filteredNotices.map((notice) => (
          <div key={notice.id} className={`notice-card ${notice.important ? 'important' : ''}`}>
            {notice.important && <span className="important-badge">Important</span>}
            <div className="notice-header">
              <h3>{notice.title}</h3>
              <span className="notice-date">{notice.date}</span>
            </div>
            <div className="notice-content">
              <p>{notice.content}</p>
            </div>
            <div className="notice-footer">
              <span className={`notice-category ${notice.category}`}>
                {notice.category.charAt(0).toUpperCase() + notice.category.slice(1)}
              </span>
              <button className="read-more-btn">Read More</button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="archive-link">
        <a href="/notices/archive">View Notices Archive &rarr;</a>
      </div>
      
      <div className="notices-subscribe">
        <div className="subscribe-content">
          <h3>Stay Updated</h3>
          <p>Subscribe to receive notifications about important notices and announcements.</p>
          <div className="subscribe-form">
            <input type="email" placeholder="Enter your email address" />
            <button>Subscribe</button>
          </div>
        </div>
        <div className="subscribe-image">
          <img 
            src="https://img.freepik.com/free-vector/new-message-concept-illustration_114360-666.jpg" 
            alt="Stay updated" 
          />
        </div>
      </div>
    </div>
  );
};

export default Notices; 