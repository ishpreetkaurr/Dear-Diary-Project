import React, { useState, useEffect } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
    const [isMenuActive, setIsMenuActive] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuActive(!isMenuActive);
    };

    useEffect(() => {
        const btns = document.querySelectorAll(".nav-btn");
        const slides = document.querySelectorAll(".video-slide");
        const contents = document.querySelectorAll(".hm-content");

        const sliderNav = (manual) => {
            btns.forEach((btn) => {
                btn.classList.remove("active");
            });

            slides.forEach((slide) => {
                slide.classList.remove("active");
            });

            contents.forEach((content) => {
                content.classList.remove("active");
            });

            btns[manual].classList.add("active");
            slides[manual].classList.add("active");
            contents[manual].classList.add("active");
        };

        btns.forEach((btn, i) => {
            btn.addEventListener("click", () => {
                sliderNav(i);
            });
        });

        // Cleanup function to remove event listeners
        return () => {
            btns.forEach((btn) => {
                btn.removeEventListener("click", () => { });
            });
        };
    }, []); // Empty dependency array ensures the effect runs only once

    return (
        <div className='skin-home'>



            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300&display=swap" rel="stylesheet" />

                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Arizonia&family=Dancing+Script:wght@400..700&family=Michroma&family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap" rel="stylesheet" />
            </head>

            <header>
                <a href="/" className="hm-brand">Skincare</a>
                <div className={isMenuActive ? "menu-btn active" : "menu-btn"} onClick={handleMenuToggle}></div>
                <div className={isMenuActive ? "navigation active" : "navigation"}>
                    <div className="navigation-items">
                        <a href="project.html">Home</a>
                        <a href="skin.html" target="_blank">Skin-Types</a>
                        <a href="/">Services</a>
                        <a href="/">Contacts</a>
                    </div>
                </div>
            </header>

            <section className="hm-home">
                <video className="hm-video-slide active" src="./pexels-roman-odintsov-6813024 (2160p).mp4" autoPlay muted loop></video>
                <video className="hm-video-slide" src="./pexels-ekaterina-bolovtsova-6768193 (Original).mp4" autoPlay muted loop></video>
                <video className="hm-video-slide" src="./video (2160p).mp4" autoPlay muted loop></video>
                <div className="hm-content active">
                    <h1 >
                        Say  Hello To<br /> <span> Glow</span>
                    </h1>
                    <p >Welcome to our skincare advice hub, where we offer expert tips and personalized guidance to help you achieve your skincare goals. From tackling acne to finding the perfect anti-aging regimen, we're here to empower you with the knowledge and tools to unlock your skin's full potential. Let's embark on this journey together towards healthier, happier skin.</p>
                    {/* <a href="/">Read More</a> */}
                </div>
                <div className="hm-content">
                    <h1>
                        Why Skincare is<br /> <span>Important?</span>
                    </h1>
                    <p>Skincare is crucial because it serves as a shield, guarding your skin from harmful environmental elements while maintaining hydration levels to prevent dryness and discomfort. By establishing a consistent routine, you can ward off common issues like acne and premature aging, ensuring your skin remains clear, youthful, and radiant. Moreover, skincare isn't just about physical health; it's a form of self-care that fosters relaxation and confidence, reflecting your overall well-being and vitality.</p>
                    {/* <a href="/">Read More</a> */}
                </div>
                <div className="hm-content">
                    <h1>
                        Healthcare with <br /> <span></span> Skincare
                    </h1>
                    <p>Internal healthcare is crucial for skin health as it addresses factors impacting skin from within. Nutrition provides essential nutrients for repair and protection. Hydration maintains skin moisture and prevents dryness. Managing hormonal balance helps regulate oiliness and acne. A healthy gut reduces inflammation, benefiting skin condition. Practices like exercise and stress management promote overall well-being, which reflects positively on skin health. These internal efforts complement external skincare, resulting in healthier, radiant skin.</p>
                    {/* <a href="/">Read More</a> */}
                </div>
                <div className="slider-navigation">
                    <div className="nav-btn active"></div>
                    <div className="nav-btn"></div>
                    <div className="nav-btn"></div>
                </div>
            </section>

            <div id="space1">
            </div>

            <div className="why" >
                <div className="box">
                    <h1 >Basic 3-Step Skincare Routine</h1>
                    <p>The basic 3-step skincare routine is a fundamental regimen designed to cleanse, tone, and moisturize the skin. This simple yet effective approach forms the cornerstone of a healthy skincare routine, providing essential care for maintaining clean, balanced, and hydrated skin.</p>
                    <div className="items">
                        <div className="item">
                            <img src="https://i.pinimg.com/236x/77/0a/d5/770ad53c3f4fadb895bd4b253be8d05a.jpg" alt="" />
                        </div>
                        <div className="item">
                            <img src="https://i.pinimg.com/236x/62/66/73/626673c524356aa62df0ecca7cbbf571.jpg" alt="" />
                        </div>
                        <div className="item">
                            <img src="https://i.pinimg.com/236x/4d/85/18/4d85186fe11578150543c5b1fba72978.jpg" alt="" />
                        </div>
                    </div>
                    <div className="heading">
                        <h1 style={{ marginLeft: "145px" }}>CLEANSER</h1>
                        <h1 style={{ marginLeft: "210px" }}>MOISTURIZER</h1>
                        <h1 style={{ marginLeft: "215px" }}>SUNSCREEN</h1>
                    </div>
                    <div className="para-skr">
                        <p className='skr-p' style={{ paddingLeft: "5%", textAlign: "center" }}>A cleanser removes dirt and oil from your skin.</p>
                        <p className='skr-p' style={{ marginLeft: "-5%", textAlign: "center" }}>It nourishes the skin, helping to keep it soft and smooth.</p>
                        <p className='skr-p' style={{ marginLeft: "-6%", textAlign: "center" }}>Sunscreen shields skin from UV rays, preventing damage.</p>
                    </div>
                </div>
                <img style={{ marginRight: "0%" }} src="https://i.pinimg.com/564x/ea/e0/03/eae0031260929659157277a6a847906e.jpg" alt="" />
            </div>

            <div className="am">
                <h1><i></i>Wanna Know Your Skin type??</h1>
                <Link to='/skin'><button className='btn-click' style={{marginLeft: '600px', marginBottom: '100px'}}>Click Here</button></Link>

            </div>

            <div id="space2">
            </div>
            <hr style={{ width: '80%', marginLeft: '200px' }} />
            <div id="space3">
            </div>
        </div>
    );
}

export default Home;
