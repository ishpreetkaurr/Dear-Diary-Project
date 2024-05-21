// // Calendar.js
// import './calendar.css'
// import React, { useState, useEffect } from 'react';

// const Calendar = () => {
//   // Define state using useState hook
//   const [date, setDate] = useState(new Date());
//   // Define currentMonth and currentYear variables
//   const currentMonth = date.getMonth();
//   const currentYear = date.getFullYear();
//   // Define markedDates array
//   const [markedDates, setMarkedDates] = useState({});

//   // Use useEffect hook for side effects
//   useEffect(() => {
//     // Your side effect code here
//     console.log('Component mounted');
//     // Clean-up function for useEffect (optional)
//     return () => {
//       console.log('Component unmounted');
//     };
//   }, []); // Empty dependency array means this effect runs only once on component mount

//   const calculateNextThreeMonths = () => {
//     const currentDate = new Date();
//     let currentMonth = currentDate.getMonth(); // Get current month
//     let currentYear = currentDate.getFullYear(); // Get current year
    
//     currentMonth = (currentMonth + 2) % 12; 
//     currentYear += Math.floor((currentMonth + 4) / 12); // Adjust year if needed
  
//     let nextThreeMonths = [];
//     for (let i = 0; i < 3; i++) {
//       let nextMonth = (currentMonth + i) % 12;
//       let nextYear = currentYear + Math.floor((currentMonth + i) / 12);
//       nextThreeMonths.push({ month: nextMonth, year: nextYear });
//     }
//     return nextThreeMonths;
//   };

//   const renderCalendar = () => {
//     let calendarBody = document.getElementById('calendarBody');
//     calendarBody.innerHTML = ''; // Clear previous content
  
//     let nextThreeMonths = calculateNextThreeMonths();
  
//     nextThreeMonths.forEach((month) => {
//       let monthName = new Date(month.year, month.month).toLocaleString('en-us', {
//         month: 'long',
//         year: 'numeric'
//       });
  
//       let daysInMonth = new Date(month.year, month.month + 1, 0).getDate();
  
//       let monthDiv = document.createElement('div');
//       monthDiv.className = 'month'; // Add class for styling
//       monthDiv.innerHTML = `
//         <div class="calendar__header">${monthName}</div>
//         <div class="calendar__body" id="month-${month.month}-${month.year}"></div>
//       `;
//       calendarBody.appendChild(monthDiv);
  
//       let monthCalendarBody = document.getElementById(`month-${month.month}-${month.year}`);
  
//       let markedDatesForMonth = markedDates[`${month.year}-${month.month}`] || [];
//       let numHighlightedDates = markedDatesForMonth.length;
  
//       let gapBetweenDates = Math.floor(daysInMonth / (numHighlightedDates + 1));
  
//       let dateCounter = 0;
//       for (let day = 1; day <= daysInMonth; day++) {
//         let marked = markedDatesForMonth.includes(day) ? ' marked' : '';
//         monthCalendarBody.innerHTML += `<div class="cal__day${marked}">${day}</div>`;
//         if (marked) {
//           dateCounter++;
//           if (dateCounter < numHighlightedDates) {
//             day += gapBetweenDates;
//           }
//         }
//       }
//     });
//   };
  
  

//   // Call renderCalendar to render the calendar initially
//   useEffect(() => {
//     renderCalendar();
//   }, [markedDates]); // Re-render the calendar when markedDates change

//   return (
//     <div style={{backgroundColor: "#C87377", height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center"}}>
//       <h1 style={{color:"black"}}>Next 3 Months</h1>
//       <div className="cal" id="calendarBody"></div>
//     </div>
//   );
// };

// export default Calendar;
import './calendar.css';
import React, { useEffect } from 'react';

const Calendar = ({ periodLength, cycleLength }) => {
  const calculateNextThreeMonths = () => {
    const currentDate = new Date();
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();

    let nextThreeMonths = [];
    for (let i = 0; i < 3; i++) {
      let nextMonth = (currentMonth + i) % 12;
      let nextYear = currentYear + Math.floor((currentMonth + i) / 12);
      nextThreeMonths.push({ month: nextMonth, year: nextYear });
    }
    return nextThreeMonths;
  };

  const calculatePeriodDates = (cycleLength, periodLength, months) => {
    let periodDates = {};
    let startDate = new Date(); // Use current date as starting point
    let startDay = startDate.getDate();

    months.forEach(month => {
      const daysInMonth = new Date(month.year, month.month + 1, 0).getDate();
      periodDates[`${month.year}-${month.month}`] = [];

      let cycleStart = new Date(startDate.getFullYear(), startDate.getMonth(), startDay);

      while (cycleStart.getMonth() === month.month && cycleStart.getFullYear() === month.year || cycleStart < new Date(month.year, month.month + 1, 1)) {
        for (let i = 0; i < periodLength; i++) {
          let periodDay = cycleStart.getDate() + i;
          if (periodDay <= daysInMonth && cycleStart.getMonth() === month.month && cycleStart.getFullYear() === month.year) {
            periodDates[`${month.year}-${month.month}`].push(periodDay);
          }
        }
        cycleStart.setDate(cycleStart.getDate() + cycleLength);
      }
    });

    return periodDates;
  };

  const renderCalendar = () => {
    let calendarBody = document.getElementById('calendarBody');
    calendarBody.innerHTML = '';

    let nextThreeMonths = calculateNextThreeMonths();
    let periodDates = calculatePeriodDates(cycleLength, periodLength, nextThreeMonths);

    nextThreeMonths.forEach((month) => {
      let monthName = new Date(month.year, month.month).toLocaleString('en-us', {
        month: 'long',
        year: 'numeric'
      });

      let daysInMonth = new Date(month.year, month.month + 1, 0).getDate();

      let monthDiv = document.createElement('div');
      monthDiv.className = 'month';
      monthDiv.innerHTML = `
        <div class="calendar__header">${monthName}</div>
        <div class="calendar__body" id="month-${month.month}-${month.year}"></div>
      `;
      calendarBody.appendChild(monthDiv);

      let monthCalendarBody = document.getElementById(`month-${month.month}-${month.year}`);

      let markedDatesForMonth = periodDates[`${month.year}-${month.month}`] || [];

      for (let day = 1; day <= daysInMonth; day++) {
        let marked = markedDatesForMonth.includes(day) ? ' marked' : '';
        monthCalendarBody.innerHTML += `<div class="cal__day${marked}">${day}</div>`;
      }
    });
  };

  useEffect(() => {
    renderCalendar();
  }, [periodLength, cycleLength]);

  return (
    <div style={{ backgroundColor: "#C87377", height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center" }}>
      <h1 style={{ color: "black" }}>Next 3 Months</h1>
      <div className="cal" id="calendarBody"></div>
    </div>
  );
};

export default Calendar;
