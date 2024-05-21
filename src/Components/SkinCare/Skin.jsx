import React from 'react';
import './Skin.css';
import { Link } from 'react-router-dom';

const Skin = () => {
    return (
        <>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/csskin-s2?family=Arizonia&family=Dancing+Script:wght@400..700&family=Michroma&family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap" rel="stylesheet" />

                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/csskin-s2?family=Cormorant+Garamond:wght@300&display=swap" rel="stylesheet" />

                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                
            </head>

            <div className="skin-space" style={{ fontFamily: "Michroma, sans-serif" , marginTop: '30px', marginBottom: '30px'}}>
                <h1>
                    <span >KNOW</span>&nbsp;
                    <span >YOUR</span>&nbsp;
                    <span >SKIN</span>&nbsp;
                    <span >TYPE !</span>
                </h1>
            </div>

            <div className="skin-pic">
                <img src="https://images.pexels.com/photos/3762766/pexels-photo-3762766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <div className="skin-di1" >
                    <h1 style={{marginTop: '20px', marginBottom: '20px', fontWeight: 'light'}}>WHAT IS MY SKIN <br /> TYPE?</h1>
                    <p>Discover the various skin types and find out what is your individual skin type below!</p>
                </div>
            </div>
            <hr style={{ width: '70%', color: '#220f0a', marginTop: '10px', marginLeft: '250px'}} />
            <div id="skin-s1"></div>
            <div className="skin-content" style={{marginTop: '25px'}}>
                <h1>COMBINATION SKIN, DRY SKIN, NORMAL SKIN...WHAT TYPE OF SKIN DO I HAVE?</h1>
                <p>Everyone can benefit from a regular, daily skincare routine targeted at its needs, no matter what skin type. Understanding “what is my skin type” is key to adopting the proper skincare routine for your particular skin type. Sometimes our skin type doesn't fall into a convenient bracket; it may straddle a few different skin types, or change depending on the season, outside factors and lifestyle changes. Read on to explore different skin types and learn more about giving your skin the care it needs with our skin type test.</p>
            </div>
            <hr style={{ width: '50%', color: '#220f0a' , marginTop: '19px', marginLeft: '350px'}} />

            <div className='skin-care-cards'>
                <div className="skin-oily" >
                    <img src="https://cdn.shopify.com/s/files/1/0578/9155/3325/t/12/assets/oily_skin-1659118965083_600x.jpg?v=1659118966" alt="" />
                    <div className="skin-s2">
                    <p>WHAT TYPE OF SKIN DO I HAVE?</p>
                    <h1>SKIN-TYPE 1: OILY SKIN</h1>
                    <p className="skin-para">Oily skin is caused by an over-secretion of sebum, an oily substance our skin needs in order to function properly. Too much of this sebum can cause acne and too little can cause dry, cracked skin. The main characteristics of oily skin include:</p>
                    <ul>
                        <li>Shiny and often has breakouts</li>
                        <li>Less visible wrinkles</li>
                        <li>Visible and enlarged looking pores</li>
                        <li>Makeup may wear off easily</li>
                    </ul>
                    <Link to='/oily'><button className='btn-readMore'>Read More</button></Link>
                    </div>
                </div>

                <div className="skin-oily" >
                    <img src="https://cdn.shopify.com/s/files/1/0578/9155/3325/t/12/assets/dryness_tall_pfeffer_sal-1659118796508_400x.jpg?v=1659118797" alt="" />
                    <div className="skin-s2">
                    <p>WHAT TYPE OF SKIN DO I HAVE?</p>
                    <h1>SKIN-TYPE 2: DRY SKIN</h1>
                    <p className="skin-para">Dry skin is characterised by 'poor epidermal function' and potential damage to the epidermal layer, the protective outer layer of the skin. Some people who have dry skin can attribute it to a genetic predisposition or inappropriate skincare habits but for others, there is no apparent reason. The following characteristics are common in those women who suffer with dry skin:</p>
                    <ul>
                        <li>Skin feels tight and irritable</li>
                        <li>Often looks flaky</li>
                        <li>Has visibly small pores</li>
                        <li>May be hard to apply makeup</li>
                    </ul>
                    <Link to='/dry'><button className='btn-readMore'>Read More</button></Link>
                    </div>
                </div>

                <div className="skin-oily" >
                    <img src="https://cdn.shopify.com/s/files/1/0578/9155/3325/t/12/assets/dryness_tall_pfeffer_sal-1659118796508_400x.jpg?v=1659118797" alt="" />
                    <div className="skin-s2">
                    <p>WHAT TYPE OF SKIN DO I HAVE?</p>
                    <h1>SKIN-TYPE 3: COMBINATION SKIN</h1>
                    <p className="skin-para">People often hear about yet wonder, 'what is combination skin'. When talking about combination skin, it means we
                    have at least two different types of facial skin and may need to adjust our skincare habits accordingly. The main
                    variations of combination skin are tyskin-pically:</p>
                    <ul>
                        <li>Either oily or normal skin around the T-Zone area of the face. This includes the nose, forehead, and chin</li>
                        <li>Dry or normal skin around the U-ZONE, which is the cheek, mouth, and eyes</li>
                    </ul >
                    <Link to='/comb'><button className='btn-readMore'>Read More</button></Link>
                    </div>
                </div>
            </div>

            <div className="skin-s2">
                <h1 style={{ marginTop: '60px' }}>HOW  TO  KNOW  YOUR  SKIN  TYPE  AT  HOME</h1>
            </div>

            <div className="skin-type">
            <div className="skin-left" >
                <h2>The Bare Face Method</h2>
                <p>To find out your skin type at home, you can wash your face and leave it for around thirty minutes without applying any of your skincare products. After waiting for half an hour, you can analyze your skin.</p>
                <ul>
                    <li>You have dry skin if you feel tight, flaky, and itchy.</li>
                    <li>You have oily skin if you feel greasy and oily all over your face.</li>
                    <li>If you notice oiliness and greasiness on your t-zone and a dry patch on your cheeks, you have combination skin.</li>
                    <li>If you don't feel tight and itchy, with less shine and oiliness on your face, and feel like your skin is quite balanced, then you have normal skin.</li>
                </ul>
            </div>
            
            <div className="skin-left">
                <h2>Blotting sheet method</h2>
                <p>There is also another method that you can follow to figure out your skin type, which is the blotting sheet method.</p>
                <ul>
                    <li>First, wash your face with a gentle cleanser.</li>
                    <li>Pat the water dry with a clean towel and leave it for around an hour</li>
                    <li>After an hour, place the blotting sheets on different areas of your face like the forehead, nose area, cheeks, and chin.</li>
                    <li>Remove the blotting sheet and see how much oil is accumulated.</li>
                </ul>
                <p>If the sheets have no oil, you have dry skin. If the sheet is full of oil, you have oily skin. If the sheets from the t-zone (forehead, nose, and chin) have oil with no oil from the sheets of your u-zone, then you have combination skin, and if there is less oil on the sheet, looking relatively even, then you have normal skin.</p>
            </div>
            <div className="skin-quote" style={{fontfamily: "Arizonia, cursive"}}>
                <h1>Once you know and understand your skin type, you can start with your skincare journey!!!!</h1>
            </div>
            </div>
        </>
    );
};

export default Skin;