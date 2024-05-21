import React from 'react';
import './Dry.css'; // Import the CSS file

// Define the Dry component
const Dry = () => {
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

      <div className="dry-main">
        <img src="./55.jpg" alt="" />
        <h1>
          <span style={{ fontFamily: "Michroma, sans-serif" }}>HOW</span>&nbsp;
          <span style={{ fontFamily: "Michroma, sans-serif" }}>TO</span>&nbsp;
          <span style={{ fontFamily: "Michroma, sans-serif" }}>TREAT</span>&nbsp;
          <span style={{ fontFamily: "Michroma, sans-serif" }}>DRY</span>&nbsp;
          <span style={{ fontFamily: "Michroma, sans-serif" }}>SKIN</span>&nbsp;
        </h1>
        <p style={{marginLeft: '740px', marginTop: '25px'}}>AHAs, BHAs, hyaluronic acid, kojic acid—what's right for you?</p>
      </div>
      <br />
      <div className="dry-mai">
        <p>Dry skin is characterised by 'poor epidermal function' and potential damage to the epidermal layer, the protective outer layer of the skin.

            Some people who have dry skin can attribute it to a genetic predisposition or inappropriate skincare habits but for others, there is no apparent reason. It is common for dry skin to be an issue for women entering menopause.
            
            The following characteristics are common in those women who suffers with dry skin:
            
            Skin feels tight and irritable ;

            Often looks flaky ;

            Shows fine lines ;

            Has visibly small pores ;

            Slow secretion of sebum ;

            May be hard to apply make up.</p>
      </div>
      <hr style={{ width: '70%', marginLeft: '200px' ,marginTop: '25px', marginBottom: '30px'}} />

      <div className="dry-headd">
        <h2 className="head" style={{ fontFamily: "Michroma, sans-serif" , fontWeight: 'lighter', fontSize: '30px',paddingLeft: '20px', marginBottom: '30px'}}>What skincare ingredients are best for dry skin? </h2>
      </div>

      <div className="dry-sec1">
        <img src="https://i.pinimg.com/564x/36/94/32/3694324a4cefd03df003ace0677ef23b.jpg" alt="" />
        <h2>Hyaluronic Acid</h2>
        <p>Hyaluronic acid is beneficial for dry skin because it's a humectant, meaning it attracts and retains moisture. It helps hydrate and plump the skin, reducing dryness, flakiness, and the appearance of fine lines.</p>
      </div>

      <div className='ol-space' style={{height: '20px'}}>

      </div>

      <div style={{ backgroundColor: '#e6c267' }} className="dry-sec2">
        <img src="https://i.pinimg.com/236x/af/3f/3e/af3f3ee682ae2e3c0fca012daea1340b.jpg" alt="" />
        <h2>Squalene</h2>
        <p>Squalene moisturizes dry skin, restoring suppleness and protecting against environmental damage.</p>
      </div>

      <div className='ol-space' style={{height: '20px'}}>

      </div>

      <div style={{ backgroundColor: '#efd9be' }} className="dry-sec1">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9cEFrXYk9Y0pIP9LufeIh3F1ppsBESfhCLQ&usqp=CAU" alt="" />
        <h2>Glycerin</h2>
        <p>Glycerin hydrates dry skin by attracting and retaining moisture, improving texture and reducing dryness. It also forms a protective barrier, shielding the skin from environmental stressors.</p>
      </div>

      <hr style={{ width: '80%', marginLeft: '200px' , marginTop: '20px' , marginBottom: '30px'}} />
    </div>
  );
}

export default Dry;
