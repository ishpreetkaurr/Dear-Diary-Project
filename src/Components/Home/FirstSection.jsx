// FirstSection.js
import React from 'react';
import videoSrc from './pexels-vlada-karpovich-6725001 (2160p).mp4';

const FirstSection = () => {
  return (
    <section className="FirstSec">
      <div className="video-container">
        <video autoPlay muted loop>
          <source src={videoSrc} type="video/mp4" />
        </video>
        <div className="caption">
          <h1 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}>
            Your Self-Care Destination
          </h1>
          <h6 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}>
            Thank you for joining Dear Diary - a safe haven for your well-being journey. We're here to help you prioritize your health, both mentally and physically.
          </h6>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
