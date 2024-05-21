import React from 'react';
import './Comb.css'; // Import the CSS file

// Define the Comb component
const Comb = () => {
  return (
    <div>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Arizonia&family=Dancing+Script:wght@400..700&family=Michroma&family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap" rel="stylesheet" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300&display=swap" rel="stylesheet" />
      </head>

      <div className='comb-space' style={{height: '30px'}}>

      </div>

      <div className="comb-main">
        <img src="./11.avif" alt="" />
        {/* <h1>The skincare ingredients you should look for, if you have COMBINATION skin type</h1> */}
        <h1>
          <span style={{ fontFamily: "Michroma, sans-serif" }}>HOW</span>&nbsp;
          <span style={{ fontFamily: "Michroma, sans-serif" }}>TO</span>&nbsp;
          <span style={{ fontFamily: "Michroma, sans-serif" }}>TREAT</span>&nbsp;
          <span style={{ fontFamily: "Michroma, sans-serif" }}>COMBINATION</span>&nbsp;
          <span style={{ fontFamily: "Michroma, sans-serif" }}>SKIN</span>
        </h1>
        <p style={{marginLeft: '740px', marginTop: '25px'}}>AHAs, BHAs, hyaluronic acid, kojic acid—what's right for you?</p>
      </div>
      <br />
      <div className="comb-mai">
        <p>People often hear about yet wonder, 'what is combination skin'. When talking about combination skin, it means we have at least two different types of facial skin and may need to adjust our skincare habits accordingly. The main variations of combination skin are typically:

          Either oily or normal skin around the T-Zone area of the face. This includes the nose, forehead, and chin ;
          
          Dry or normal skin around the U-ZONE, which is the cheek, mouth, and eyes.</p>
      </div>
      <hr style={{ width: '70%', marginLeft: '200px', marginTop: '25px', marginBottom: '30px' }} />

      <div className="comb-headd">
        <h2 className="comb-head" style={{ fontFamily: "Michroma, sans-serif" , fontWeight: 'lighter', fontSize: '30px', marginBottom: '30px'}}>What skincare ingredients are best for combination skin? </h2>
      </div>

      <div className="comb-sec1">
        <img src="https://i.pinimg.com/236x/5f/56/0c/5f560c1d5630f879de5fcff5350c7b4b.jpg" alt="" />
        <h2>Lactic Acid (AHA)</h2>
        <p>Lactic acid gently exfoliates combination skin, balancing oil production without over-drying, while promoting smoother and more even skin texture.</p>
      </div>

      <div className='comb-space' style={{height: '30px'}}>

      </div>

      <div style={{ backgroundColor: '#DDECEF' }} className="comb-sec2">
        <img src="https://i.pinimg.com/564x/36/94/32/3694324a4cefd03df003ace0677ef23b.jpg" alt="" />
        <h2>Hyaluronic Acid</h2>
        <p>Hyaluronic acid hydrates combination skin, balancing moisture levels without adding excess oil.</p>
      </div>

      <div className='comb-space' style={{height: '30px'}}>

      </div>

      <div style={{ backgroundColor: '#f1d4b2' }} className="comb-sec1">
        <img src="https://i.pinimg.com/236x/b5/21/6b/b5216be43e969bc4cb0646d3eea96308.jpg" alt="" />
        <h2>Peptides</h2>
        <p>Peptides regulate oil production and improve firmness in combination skin, addressing both dry and oily areas.</p>
      </div>

      <hr style={{ width: '80%', marginLeft: '200px' , marginTop: '20px' , marginBottom: '30px'}} />
    </div>
  );
}

export default Comb;
