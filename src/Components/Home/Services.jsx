// ServicesSection.js
import React from 'react';
import journal from './journalNew.jpg';
import periods from './periodsNew.jpg';
import skincare from './skincareNew.jpg';
import music from './musicNew.jpg';
import yoga from './yogaNew.jpg';

const ServicesSection = () => {
  return (
    <section className="service">
      <div id = "about" className="heading" style={{ fontFamily: 'Poppins' }}>
        <h1>WHAT WE OFFER</h1>
      </div>
      <section className="slide">
        <div className="container">
          <div className="box">
            <div className="Imgbx">
              <img src={journal} alt="Journal Service" />
            </div>
            <div className="content1">
              <div>
                <h2>Ink your thoughts, unlock your potential with a virtual journal</h2>
                <p>A private space to express yourselves, set goals, and track your progress.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="box">
            <div className="Imgbx">
              <img src={periods} alt="Journal Service" />
            </div>
            <div className="content1">
              <div>
                <h2>Say goodbye to Period surprises: Track it, predict it, conquer it</h2>
                <p>Predict the start of the next period, track symptoms and emotions, with tailored health tips.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="box">
            <div className="Imgbx">
              <img src={skincare} alt="Journal Service" />
            </div>
            <div className="content1">
              <div>
                <h2>Hydrate, protect, reflect: Your flawless skin effect</h2>
                <p>Personalized skincare routines based on skin type, goals, and environmental factors.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="box">
            <div className="Imgbx">
              <img src={music} alt="Journal Service" />
            </div>
            <div className="content1">
              <div>
                <h2>Unscramble your emotions: Hit play on your mood mix</h2>
                <p>Indulge in your customized playlist tailored to your mood.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="box">
            <div className="Imgbx">
              <img src={yoga} alt="Journal Service" />
            </div>
            <div className="content1">
              <div>
                <h2>Mindful moments, mindful you: Breathe, relax, and thrive</h2>
                <p>Emphasize the importance of taking moments to center yourself and be present.Cultivate a more mindful version of yourself.</p>
              </div>
            </div>
          </div>
        </div>
    
      </section>
    </section>
  );
};

export default ServicesSection;
