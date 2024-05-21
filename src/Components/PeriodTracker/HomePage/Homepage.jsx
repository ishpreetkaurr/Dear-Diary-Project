import React from 'react';
import Navbar from './Navbar';
import MenstrualCycle from './MenstralCycle';
import Phases from './Phases'; 
import Track from './Track';
import './Homepage.css';
import Pic from './Pic';

const Homepage = () => {
  return (
    <div className='period-css'>
      <Navbar/>
      <Pic/>  
      <MenstrualCycle/>
      <Phases/>
      <Track/>
    </div>
  );
};

export default Homepage;



