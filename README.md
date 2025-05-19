# Wellington College Website

A modern, responsive website for a fictional college built with React.js. This project demonstrates best practices in component-based architecture, responsive design, and state management.

## Project Overview

This website is designed for Wellington College, featuring various sections such as Home, About, Academics, Admissions, Campus Life, Notices, and Contact. It is built using functional React components, React Router for navigation, and custom CSS for styling.

## Features

- **Responsive Design**: The website is fully responsive and works well on all devices (mobile, tablet, desktop)
- **Component-Based Architecture**: Clean separation of concerns with modular components
- **Dynamic Content Rendering**: Uses .map() for rendering lists of content
- **Interactive Elements**: Filtering functionality in the Notices section, navigation menus, etc.
- **React Router Integration**: Smooth navigation between different sections without page reloads

Project dependencies and scripts
## Component Details

### Header
- Navigation links to all sections
- College logo and name
- Responsive mobile menu

### Footer
- Contact information
- Quick links to main sections
- Social media links
- Copyright information

### Home
- Hero section with call-to-action
- Featured academic programmes
- Campus highlights
- Upcoming events
- Student testimonials

### About
- Mission and vision
- College history
- Leadership profiles

### Academics
- Programme offerings
- Faculty information
- Research highlights

### Admissions
- Application process
- Requirements
- Tuition and financial aid
- Important dates

### Campus Life
- Student activities
- Accommodation
- Facilities
- Student support services

### Notices
- Announcements and important notices
- Category filtering (Academic, Events, Facilities, Health & Safety)
- Archive link
- Email subscription option

### Contact
- Contact form
- Location information
- Map
- Department contact details

## Testing

The project includes comprehensive test files for all components using React Testing Library. All tests are passing and verify the proper rendering and functionality of each component:

- `App.test.js` - Tests the main application structure
- `Header.test.jsx` - Tests the header component rendering with navigation links
- `Footer.test.jsx` - Tests the footer component rendering with contact info and links
- `Home.test.jsx` - Tests the home page component sections and content
- `About.test.jsx` - Tests the about page component with history and leadership information
- `Notices.test.jsx` - Tests the notices page component with category filtering functionality

To run the tests:
```
npm test
```

To run tests without watch mode:
```
npm test -- --watchAll=false
```

## Setup and Installation

1. Clone the repository
   ```bash
   
   ```

2. Navigate to the project directory
   ```bash
   cd collegewebsite-main
   ```

3. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

4. Start the development server
   ```bash
   npm start
   # or
   yarn start
   ```

5. Open your browser and navigate to `http://localhost:3000`

## Build for Production

To create a production build:
```
npm run build
```

## Accessibility

The website follows accessibility best practices:
- Semantic HTML
- Proper contrast ratios
- Alt text for images
- Keyboard navigation support
- ARIA attributes where necessary

## Browser Support

The website is compatible with all modern browsers:
- Chrome
- Firefox
- Safari
- Edge

## Credits

- Designed and developed using React.js
- Icons from various free sources
- Images from free stock photo sites
