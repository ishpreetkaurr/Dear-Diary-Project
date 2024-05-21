// Track.js
import React from 'react';
import { Link } from 'react-router-dom';

const Track = () => {
  return (
    <div>
      <div id="sec4" className="sec4">
        <h1 className="tl">WHY is it IMPORTANT to TRACK PERIODS</h1>
        <p className="tl1">
          Keeping track of your period can help you understand more about your cycle and your overall health. 
          It can also help you plan so you can always be prepared. Learn more about how to track 
          your monthly cycle using our Period Tracker.
        </p>
      </div>
      <div className='button-container'>
        <Link to='/markeddates' className='my-button'>Track Your Periods</Link>
      </div>
    </div>
  );
};

export default Track;
