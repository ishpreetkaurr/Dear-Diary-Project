import React from 'react';
import { useNavigate } from 'react-router-dom';
import './music.css';

function Home() {
  const navigate = useNavigate();

  const navigateToPlaylist = (playlist) => {
    navigate(`/${playlist}`);
  };

  return (
    <div className="mainpage">
      <nav>
        <div className="nav-container">
          <div className="logo"><img src="/images/xyz2.png" alt="logo" /></div>
          {/* <div className="links">
            <a href="/">HOME</a>
            <a href="/discover">DISCOVER</a>
            <a href="/genres">GENRES</a>
            <a href="/albums">ALBUMS</a>
            <a href="/playlist">PLAYLIST</a>
          </div> */}
        </div>
      </nav>
      <section className="sec1">
        <div className="main-container">
          <div className="content">
            <h3 data-aos="fade-right" data-aos-duration="1500">"Music is the art of thinking with sounds."</h3>
            <h1 data-aos="fade-left" data-aos-duration="1500" data-aos-delay="200">Harmony Haven</h1>
            <div className="buttons">
              <button data-aos="zoom-in-right" data-aos-duration="1500" data-aos-delay="400" onClick={() => navigateToPlaylist('playlist1')}>PLAYLIST</button>
              <button data-aos="fade-in-left" data-aos-duration="1500" data-aos-delay="500">LISTEN MUSIC</button>
            </div>
          </div>
          <div className="image">
            <img src="/images/home.jpeg" style={{ height: '400px', width: '400px' }} data-aos="fade-left" data-aos-duration="2500" alt="Music Sticker" />
          </div>
        </div>
      </section>
      <div className="pagesec">
        <h1 className="artstyle">Playlists</h1>
        <div className="artist">
          <div className="list">
            <div className="item" onClick={() => navigateToPlaylist('playlist1')}>
            <img src="/images/satranga.jpg" alt="English" />
              <div className="play"></div>
              <h4>Hindi</h4>
              <p>A melodious journey of music</p>
            </div>
            <div className="item" onClick={() => navigateToPlaylist('playlist2')}>
              <img src="/images/love ya.jpg" alt="English" />
              <div className="play"></div>
              <h4>Punjabi</h4>
              <p>Beats of Punjab, heart's rhythm.</p>
            </div>
            <div className="item" onClick={() => navigateToPlaylist('playlist3')}>
              <img src="/images/who says.jpg" alt="English" />
              <div className="play"></div>
              <h4>English</h4>
              <p>Harmony flows through timeless melodies.</p>
            </div>
            <div className="item" onClick={() => navigateToPlaylist('playlist4')}>
              <img src="/images/home2.jpeg" alt="Peaceful meditation" />
              <div className="play"></div>
              <h4>Peaceful Meditation</h4>
              <p>Soothing sounds embrace serene tranquility.</p>
            </div>
            <div className="item" onClick={() => navigateToPlaylist('playlist5')}>
              <img src="/images/kar gayi chull.jpg" alt="POP" />
              <div className="play"></div>
              <h4>Party</h4>
              <p>Energetic beats ignite the night.</p>
            </div>
          </div>
        </div>
      </div>
      <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
      <script>AOS.init();</script>
    </div>
  );
}

export default Home;
