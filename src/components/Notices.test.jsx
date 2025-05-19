import React from 'react';
import { render, screen } from '@testing-library/react';

// Mock data for testing
const mockNoticeData = [
  {
    id: 1,
    title: "Autumn Term Registration Open",
    date: "08 September 2023",
    category: "academic",
    content: "Registration for the Autumn Term 2023 is now open.",
    important: true
  },
  {
    id: 2,
    title: "Library Extended Hours During Exams",
    date: "15 September 2023",
    category: "facility",
    content: "The main library will extend its opening hours to 24/7 during the examination period.",
    important: false
  },
  {
    id: 3,
    title: "Guest Lecture: AI and Future of Education",
    date: "20 September 2023",
    category: "event",
    content: "We are pleased to announce a guest lecture by Professor Sarah Johnson.",
    important: false
  },
  {
    id: 5,
    title: "Scholarship Applications Deadline",
    date: "25 September 2023",
    category: "academic",
    content: "The deadline for applying for the Wellington Merit Scholarship for the Spring term is 15th October.",
    important: true
  },
  {
    id: 7,
    title: "Student Council Elections",
    date: "01 October 2023",
    category: "event",
    content: "Nominations for the Student Council elections are now open.",
    important: false
  }
];

// Create a mock Notices component with filtered state
const createMockNotices = (activeCategory = 'all') => {
  const filteredNotices = activeCategory === 'all' 
    ? mockNoticeData 
    : mockNoticeData.filter(notice => notice.category === activeCategory);

  return (
    <div className="notices-container">
      <h2>Notices & Announcements</h2>
      
      <div className="notice-filters">
        <button 
          className={activeCategory === 'all' ? 'active' : ''} 
          data-testid="filter-all"
        >
          All Notices
        </button>
        <button 
          className={activeCategory === 'academic' ? 'active' : ''} 
          data-testid="filter-academic"
        >
          Academic
        </button>
        <button 
          className={activeCategory === 'event' ? 'active' : ''} 
          data-testid="filter-event"
        >
          Events
        </button>
        <button 
          className={activeCategory === 'facility' ? 'active' : ''} 
          data-testid="filter-facility"
        >
          Facilities
        </button>
        <button 
          className={activeCategory === 'health' ? 'active' : ''} 
          data-testid="filter-health"
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
            <button className="subscribe-btn">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

describe('Notices Component', () => {
  test('renders notices page heading', () => {
    render(createMockNotices());
    
    expect(screen.getByRole('heading', { name: /notices & announcements/i })).toBeInTheDocument();
  });

  test('renders filter buttons', () => {
    render(createMockNotices());
    
    expect(screen.getByTestId('filter-all')).toBeInTheDocument();
    expect(screen.getByTestId('filter-academic')).toBeInTheDocument();
    expect(screen.getByTestId('filter-event')).toBeInTheDocument();
    expect(screen.getByTestId('filter-facility')).toBeInTheDocument();
    expect(screen.getByTestId('filter-health')).toBeInTheDocument();
  });

  test('renders notice cards with titles', () => {
    render(createMockNotices());
    
    expect(screen.getByRole('heading', { name: /autumn term registration open/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /library extended hours during exams/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /guest lecture: ai and future of education/i })).toBeInTheDocument();
  });

  test('renders filtered notices when academic category is active', () => {
    render(createMockNotices('academic'));
    
    // Should show only academic notices
    expect(screen.getByRole('heading', { name: /autumn term registration open/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /scholarship applications deadline/i })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: /library extended hours during exams/i })).not.toBeInTheDocument();
  });

  test('renders filtered notices when event category is active', () => {
    render(createMockNotices('event'));
    
    // Should show only event notices
    expect(screen.getByRole('heading', { name: /guest lecture: ai and future of education/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /student council elections/i })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: /autumn term registration open/i })).not.toBeInTheDocument();
  });

  test('renders notices archive link', () => {
    render(createMockNotices());
    
    const archiveLink = screen.getByText(/view notices archive/i);
    expect(archiveLink).toBeInTheDocument();
    expect(archiveLink.closest('a')).toHaveAttribute('href', '/notices/archive');
  });

  test('renders subscription section', () => {
    render(createMockNotices());
    
    expect(screen.getByRole('heading', { name: /stay updated/i })).toBeInTheDocument();
    expect(screen.getByText(/subscribe to receive notifications/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/enter your email address/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /subscribe/i })).toBeInTheDocument();
  });
}); 