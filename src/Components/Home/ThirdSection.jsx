// ThirdSection.js
import React, { useEffect, useState } from 'react';
import periodImage from './period.jpg';
import yogaImage from './yoga.jpg';
import skincareImage from './skincare.jpg';
import journalImage from './journal.jpg';
import musicImage from './music3.jpg';
import centreImage from './isn_t_selfish__1_-removebg-preview.png';
import { Link } from 'react-router-dom'

const ThirdSection = () => {
  const [subs, setSubs] = useState("/subscribe");

  useEffect(() => {
    if (localStorage.getItem('paymentSuccess') === 'true') {
      setSubs("/journal");
    }
  })

  return (
    <div id = "services" className="heading" style={{ fontFamily: 'Poppins', color:'brown' }}>
        <h2>OUR SERVICES</h2>
    <section className="Third">
      <section className="Third2">
        <div className="periods">
          <Link to='/periodTracker'><img src={periodImage} alt="Period Tracker" /></Link>
         
          <h3 style={{ color: 'brown', fontFamily: 'Poppins', fontSize: '20px' }}>Period Tracker</h3>
        </div>
        <div className="journal">
          <Link to={subs}><img src={journalImage} alt="Journal" /></Link>
          <h3 style={{ color: 'brown', fontFamily: 'Poppins', fontSize: '20px' }}>Journal</h3>
        </div>
      </section>
      <div className="centre">
        <img src={centreImage} alt="SelfishImage"/>
      </div>
      <section className="Third1">
        <div className="skincare">
          <Link to="./skincare"><img src={skincareImage} alt="Skin Care" /></Link>
          <h3 style={{ color: 'brown', fontFamily: 'Poppins', fontSize: '20px' }}>Skin Care</h3>
        </div>
       
        <div className="music">
          <Link to="/music"><img src={musicImage} alt="Mood Mix"/></Link>
          <h3 style={{ color: 'brown', fontFamily: 'Poppins', fontSize: '20px' }}>Mood Mix</h3>
        </div>
      </section>
    </section>
    </div>
  );
};

export default ThirdSection;
