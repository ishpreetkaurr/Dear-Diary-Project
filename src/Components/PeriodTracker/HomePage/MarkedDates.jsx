import React, { useEffect, useState } from 'react';
import './mark.css'; // Import your CSS file
import { Link } from 'react-router-dom';

const MarkedDates = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());
  const [markedDates, setMarkedDates] = useState({}); // Object to store marked dates

  useEffect(() => {
    const storedDates = localStorage.getItem('markedDates'); // Load marked dates from localStorage
    if (storedDates) {
      setMarkedDates(JSON.parse(storedDates));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('markedDates', JSON.stringify(markedDates)); // Save marked dates to localStorage
  }, [markedDates]);

  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const toggleDate = (date) => {
    const key = `${currentYear}-${currentMonth}`;
    const marked = markedDates[key] || []; // Initialize if key doesn't exist

    if (marked.includes(date)) {
      setMarkedDates({ ...markedDates, [key]: marked.filter((d) => d !== date) });
    } else {
      setMarkedDates({ ...markedDates, [key]: [...marked, date] });
    }
  };

  const prevMonth = () => {
    setCurrentMonth((currentMonth - 1 + 12) % 12); // Handle month overflow
    setCurrentYear(currentMonth === 0 ? currentYear - 1 : currentYear);
  };

  const nextMonth = () => {
    setCurrentMonth((currentMonth + 1) % 12);
    setCurrentYear(currentMonth === 11 ? currentYear + 1 : currentYear);
  };

  const renderCalendar = () => {
    const monthYear = new Date(currentYear, currentMonth).toLocaleString('en-us', { month: 'long', year: 'numeric' });
    const totalDays = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    let dateCounter = 1;

    return (
      <div className='marked-css'>
      <div className="calendar">
        <div className="calendar__header">
          <button className="arrow3" onClick={prevMonth}>&#10094;</button>
              <span id="monthYear">{monthYear}</span>
          <button className="arrow3" onClick={nextMonth}>&#10095;</button>
        </div>
        <div className="calendar__body">
          {days.map((day) => (
            <div className="calendar__day" key={day}>
              {day}
            </div>
          ))}
          {Array.from({ length: firstDay }).map(() => (
            <div className="calendar__day" key={`empty-${dateCounter++}`} />
          ))}
          {Array.from({ length: totalDays }).map((_, i) => {
            const date = i + 1;
            const marked = markedDates[`${currentYear}-${currentMonth}`]?.includes(date) ? ' marked' : '';
            return (
              <div className={`calendar__day${marked}`} key={date} onClick={() => toggleDate(date)}>
                {date}
              </div>
            );
          })}
        </div>
      </div>
      </div>
    );
  };

  return (
    <div className="marked-dates-container marked-css"> 
      <h1>Mark the dates of your current Period</h1>
      {renderCalendar()}
      <div className="next-button-container">
        <Link to='/DayCounter' className="next-button">Next</Link>
      </div>
    </div>
  );
};

export default MarkedDates;
