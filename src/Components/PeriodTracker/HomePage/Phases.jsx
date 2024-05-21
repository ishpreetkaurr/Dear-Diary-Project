import React from 'react';
const Phases = () => {
  return (
    <div id="sec3" className="sec3">
      <div className="container">
        <p className="text">4 Phases of <br /> Menstrual Cycle</p>
        
        <div className="flip-container top">
          <div className="flipper">
            <div className="front" style={{ backgroundColor: '#F886A8' }}>
              <p style={{fontSize: '18px' ,color: 'white' }}> 1st Phase<br /> Menstruation Phase<br /> Days 1 - 7 <br/> <br/> Estrogen levels rise slightly, and <br />
                progesterone levels dip. Making<br /> you feel low on energy <br /> uterine lining breaks down <br /> causing your period.</p>
            </div>
            <div className="back" style={{ backgroundColor: '#F886A8' }}>
              <p style={{ color: 'antiquewhite', textAlign: 'center', fontSize: '25px' }}>
                ✨ rest, relax, <br /> reflect <br /> 🧘‍♀️ walking + yoga + massages <br /> 🍒 easy to digest, meals rich in iron & zinc, seeds
                <br /> 📝 "me time" 
              </p>
            </div>
          </div>
        </div>

        <div className="flip-container right">
          <div className="flipper">
            <div className="front" style={{ backgroundColor: '#FB9E25' }}>
              <p style={{ fontSize: '18px' ,color: 'white' }}>2nd Phase<br /> Follicular Phase<br /> Days 8 - 13<br /> 
              <br />The hypothalamus releases FSH. Estrogen and progesterone levels rise to help follicles in the ovary mature. Creativity is at its highest here!</p>
            </div>
            <div className="back" style={{ backgroundColor: '#FB9E25' }}>
              <p style={{ color: 'antiquewhite', fontSize: '25px' }}>
                🧠 be creative <br /> and brainstorm <br /> 🤽‍♀️ cardio, dance, weights <br /> 🥑 probiotic-rich, lighter meals, eggs
                <br /> 🎨 stress-relieving activities
              </p>
            </div>
          </div>
        </div>

        <div className="flip-container bottom">
          <div className="flipper">
            <div className="front" style={{ backgroundColor: '#EB7370' }}>
              <p style={{ fontSize: '18px' ,color: 'white' }}>3rd Phase<br /> Ovulation Phase<br /> Days 14 - 21<br /> 
              <br />Release of luteinising hormone stimulates the follicle to release an egg, uterine lining begins to thicken as estrogen <br /> and testosterone levels peak</p>
            </div>
            <div className="back" style={{ backgroundColor: '#EB7370' }}>
              <p style={{ color: 'antiquewhite', fontSize: '25px' }}>
                🧠 full of energy, <br /> socially confident <br /> 🧗‍♀️ hiking, weight training <br /> 🍊 veggies, fruit, flaxseeds, and chia seeds
                <br /> 🏞️ go for outings
              </p>
            </div>
          </div>
        </div>

        <div className="flip-container left">
          <div className="flipper">
            <div className="front" style={{ backgroundColor: '#72C9BF', marginBottom:'20px'}}>
              <p style={{ fontSize: '18px' ,color: 'white'}}> 4th Phase<br /> Luteal Phase <br /> Days 22 - 28<br /> 
              <br />Estrogen, progesterone + testosterone<br /> will rapidly decrease. PMS is common during the 2nd half of this phase if an imbalance is present.</p>
            </div>
            <div className="back" style={{ backgroundColor: '#72C9BF' }}>
              <p style={{ color: 'rgb(255, 246, 234)', fontSize: '25px' }}>
                🎯 task-focused, <br /> detail-oriented <br /> 🍳 warm, freshly-cooked meals <br /> 🏋️‍♀️ slower strength training 
                <br /> 🛑 honor your boundaries
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Phases;
