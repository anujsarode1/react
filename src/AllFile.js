import React from 'react';
import './AllFile.css';
import MovieHeader from './MovieHeader';

// Header Component
const Header = () => {
  return (
    <div className="header">
      <h1>React.js</h1>
      <div className="user-info">
        <span>Welcome, User!</span>
      </div>
    </div>
  );
};

// Widgets Component



// Main AllFile Component (The Dashboard Page)
const AllFile = () => {
  return (
    <div className="dashboard-page">
      <div className="main-content">
        <Header />
        {/* <DashboardContent /> */}

        <MovieHeader/>

      </div>
    </div>
  );
};

export default AllFile;
