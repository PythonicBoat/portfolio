import React from 'react';
import '../index.css';

const Preloader = () => {
  return (
    <div className="preloader-container">
      <div className="preloader-card">
        <div className="apple-logo" aria-label="Apple logo" style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M47.2 34.1c-.1-7.1 5.8-10.5 6-10.7-3.3-4.8-8.4-5.5-10.2-5.6-4.3-.4-8.4 2.5-10.6 2.5-2.2 0-5.6-2.4-9.2-2.3-4.7.1-9 2.7-11.4 6.8-4.9 8.5-1.3 21.1 3.5 28 2.3 3.3 5 7 8.6 6.9 3.5-.1 4.8-2.2 9-2.2 4.2 0 5.4 2.2 9 2.1 3.7-.1 6-3.3 8.2-6.6 2.6-3.8 3.7-7.5 3.7-7.7-.1 0-7.1-2.7-7.2-10.7zM40.7 13.2c1.9-2.3 3.2-5.5 2.8-8.7-2.7.1-6 1.8-7.9 4.1-1.7 2-3.3 5.2-2.7 8.3 3 .2 6.1-1.5 7.8-3.7z" fill="#fff"/>
          </svg>
          <div className="apple-loading-bar">
            <div className="apple-loading-bar-inner"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
