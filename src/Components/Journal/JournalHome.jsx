import React from 'react';
import image1 from './Dear_Diary-removebg-preview.png'
import image2 from './Untitled_design__2_-removebg-preview.png'
import image3 from './Untitled_design__6_-removebg-preview.png'
import image4 from './2.png'
import image5 from './3.png'
import image6 from './4.png'
import { Link } from 'react-router-dom'
import './Journal.css'; // Import your CSS file here

function Journal() {
  return (
    <div className='journal-css'>
      <header className="header">
        <nav className="nav" style={{ justifyContent: 'center' }}>
          <div>
            <ul style={{ fontFamily: 'Poppins', fontWeight: 400 }}>
              <li><Link to="/">HOME</Link></li>
              <img src={image1} alt="Dear Diary Logo" />
              <li><a href="#Why">WHY JOURNAL</a></li>
            </ul>
          </div>
        </nav>
      </header>

      <section className="first">
        <div className="title">
          <img src={image2} alt="Journal Title" />
          <h1>Free Digital Journal</h1>
          <img src={image3} alt="Journal Decoration" />
        </div>
        <div className="content">
          <p>Capture your thoughts, dreams, and daily reflections with our Free Digital Journal. A versatile space for mindful expression and creative introspection.</p>
        </div>

        <div className="section-content__button-wrapper">
          <a className="btn--custom button--custom-primary" href="#download">
            <Link to='/entry'><span>Let's Get Started</span></Link>
          </a>
        </div>
      </section>

      <div className='secondParent'>
      <section className="second">
        <div className="container">
          <div className="card">
            <div className="imgBox">
              <img src={image4} alt="JournalImage" />
            </div>
            <div className="details">
              <h2>Free Your Mind</h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni ducimus soluta ipsa!</p>
            </div>
          </div>

          <div className="card">
            <div className="imgBox">
              <img src={image5} alt="JournalImage2" />
            </div>
            <div className="details">
              <h2>Improve your life</h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni ducimus soluta ipsa!</p>
            </div>
          </div>
          
         
          <div className="card">
            <div className="imgBox">
              <img src={image6} alt="JournalImage3" />
            </div>
            <div className="details">
              <h2>Always with you</h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni ducimus soluta ipsa!</p>
            </div>
          </div>

        </div>
      </section>
      </div>
    </div>
  );
}

export default Journal;
