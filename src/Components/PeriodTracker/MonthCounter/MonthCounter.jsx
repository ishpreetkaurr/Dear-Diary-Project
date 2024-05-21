// import React, { useState } from 'react';
// import './monthcounter.css'
// import { Link } from 'react-router-dom';
// const MonthCounter = () => {
//   const [currentDay, setCurrentDay] = useState(20);

//   const increaseDay = () => {
//     if (currentDay < 50) {
//       setCurrentDay(currentDay + 1);
//     }
//   };

//   const decreaseDay = () => {
//     if (currentDay > 20) {
//       setCurrentDay(currentDay - 1);
//     }
//   };

//   return (
//     <div className="counter2">
//       <h1 className="counter-heading">How many days are between your periods?</h1>
//       <div className="counter-text">
//       <button className="arrow2" onClick={decreaseDay}> ◄ </button>
//       <div className="day-circle" id="dayCircle">
//         <span id="dayCount">{currentDay}</span>
//       </div>
//       <button className="arrow2" onClick={increaseDay}> ► </button>
//       </div>
//       <Link to='/calendar'className="next-button">Save</Link>
//     </div>
//   );
// };

// export default MonthCounter;
import React from 'react';
import './monthcounter.css';
import { Link } from 'react-router-dom';

const MonthCounter = ({ cycleLength, setCycleLength }) => {

  const increaseDay = () => {
    if (cycleLength < 50) {
      setCycleLength(cycleLength + 1);
    }
  };

  const decreaseDay = () => {
    if (cycleLength > 20) {
      setCycleLength(cycleLength - 1);
    }
  };

  return (
    <div className="counter2">
      <h1 className="counter-heading">How many days are between your periods?</h1>
      <div className="counter-text">
        <button className="arrow2" onClick={decreaseDay}> ◄ </button>
        <div className="day-circle" id="dayCircle">
          <span id="dayCount">{cycleLength}</span>
        </div>
        <button className="arrow2" onClick={increaseDay}> ► </button>
      </div>
      <Link to='/calendar' className="next-button">Save</Link>
    </div>
  );
};

export default MonthCounter;
