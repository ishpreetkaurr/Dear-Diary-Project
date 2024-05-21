import React from 'react';
import './Oily.css'; // Import the CSS file

// Define the OilySkinPage component
const Oily = () => {
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

      <div className='ol-space' style={{height: '30px'}}>

      </div>

      <div className="ol-main" style={{marginBottom: '20px'}}>
        <img src="./44.jpg" alt="" />
        <h1>
        <span style={{ fontFamily: "Michroma, sans-serif" }}>HOW</span>&nbsp; 
          <span style={{ fontFamily: "Michroma, sans-serif" }}>TO</span>&nbsp;
          <span style={{ fontFamily: "Michroma, sans-serif" }}>TREAT</span>&nbsp;
          <span style={{ fontFamily: "Michroma, sans-serif" }}>OILY</span>&nbsp;
          <span style={{ fontFamily: "Michroma, sans-serif" }}>SKIN</span>
        </h1>
        <p style={{marginLeft: '740px', marginTop: '25px'}}>AHAs, BHAs, hyaluronic acid, kojic acid—what's right for you?</p>
      </div>
      <br />
      <div className="ol-mai">
        <p>Oily skin is caused by an over-secretion of sebum, an oily substance our skin needs in order to function properly. Too much of this sebum can cause acne and too little can cause dry, cracked skin. The ol-main characteristics of oily skin include: <br />

          Shiny and often has breakouts ;

          Less visible wrinkles ;

          Visible and enlarged looking pores ;

          Make up may wear off easily</p>
      </div>
      <hr style={{ width: '70%', marginLeft: '200px' ,marginTop: '25px', marginBottom: '30px'}} />

      <div className="ol-headd">
        <h2 className="ol-head" style={{ fontFamily: "Michroma, sans-serif" , fontWeight: 'lighter', fontSize: '30px',paddingLeft: '300px', marginBottom: '30px'}}>What skincare ingredients are best for oily skin? </h2>
      </div>

      <div className="ol-sec1">
        <img src="https://i.pinimg.com/564x/36/94/32/3694324a4cefd03df003ace0677ef23b.jpg" alt="" />
        <h2>Hyaluronic Acid</h2>
        <p>Hyaluronic acid hydrates oily skin without making it greasy, helps regulate oil production, improves skin texture, and is non-comedogenic, meaning it won't clog pores.</p>
      </div>
      <div className='ol-space' style={{height: '20px'}}>

      </div>

      <div style={{ backgroundColor: '#CEE5A1' }} className="ol-sec2">
        <img src="https://i.pinimg.com/564x/44/44/e7/4444e7633790e07cdcfaf071bd7f404a.jpg" alt="" />
        <h2>Niacinamide</h2>
        <p>Niacinamide for oily skin: regulates oil production, minimizes pores, reduces inflammation, controls acne, and strengthens the skin barrier.</p>
      </div>

      <div className='ol-space' style={{height: '20px'}}>

      </div>

      <div style={{ backgroundColor: '#efd9be' }} className="ol-sec1">
        <img style={{ width: '400px' }} src="https://i.pinimg.com/564x/79/34/49/7934496b56552638258b4e2b9086d3c1.jpg" alt="" />
        <h2>Salicylic Acid</h2>
        <p>Salicylic acid helps oily skin by exfoliating, unclogging pores, reducing acne, controlling oil production, and calming inflammation.</p>
      </div>

      <hr style={{ width: '80%', marginLeft: '200px' , marginTop: '20px' , marginBottom: '30px'}} />
    </div>
  );
}

export default Oily;
