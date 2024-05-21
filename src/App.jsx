// import React from 'react'
// import Main from './Components/Home/Main'
// import Login from './Components/Home/Login'
// import { Routes, Route } from 'react-router-dom'
// import Journal from './Components/Journal/JournalHome'
// import MoodTracker from './Components/Journal/JournalEntry'
// import Calendar from './Components/PeriodTracker/Calendar/Calendar'
// import DayCounter from './Components/PeriodTracker/DayCounter/DayCounter'
// import MonthCounter from './Components/PeriodTracker/MonthCounter/MonthCounter'
// import Homepage from './Components/PeriodTracker/HomePage/Homepage'
// import MarkedDates from './Components/PeriodTracker/HomePage/MarkedDates'
// import Skin from './Components/SkinCare/Skin'
// import Comb from './Components/SkinCare/Comb'
// import Dry from './Components/SkinCare/Dry'
// import Oily from './Components/SkinCare/Oily'
// import Home from './Components/SkinCare/Home'
// const App = () => {
//   return (
//     <div>
//       <Routes>
//       <Route path='/' element={<Main/>} />
//       <Route path='/login' element={<Login/>} />
//       <Route path='/journal' element={<Journal/>} />
//       <Route path='/entry' element={<MoodTracker/>} />
//       <Route path='/periodTracker' element={<Homepage/>} />
//       <Route path='/calendar' element={<Calendar/>} />
//       <Route path='/daycounter' element={<DayCounter/>} />
//       <Route path='/monthcounter' element={<MonthCounter/>} />
//       <Route path='/periodtracker' element={<Homepage/>} />
//       <Route path='/markeddates' element={<MarkedDates/>} />
//       <Route path='/skincare' element={<Home/>}/>
//       <Route path='/skin' element={<Skin/>}/>
//       <Route path='/oily' element={<Oily/>}/>
//       <Route path='/comb' element={<Comb/>}/>
//       <Route path='/dry' element={<Dry/>}/>
//       </Routes>
//     </div>
//   )
// }

// export default App
import React, { useState } from 'react';
import Main from './Components/Home/Main';
import Login from './Components/Home/Login';
import { Routes, Route } from 'react-router-dom';
import Journal from './Components/Journal/JournalHome';
import MoodTracker from './Components/Journal/JournalEntry';
import Calendar from './Components/PeriodTracker/Calendar/Calendar';
import DayCounter from './Components/PeriodTracker/DayCounter/DayCounter';
import MonthCounter from './Components/PeriodTracker/MonthCounter/MonthCounter';
import Homepage from './Components/PeriodTracker/HomePage/Homepage';
import MarkedDates from './Components/PeriodTracker/HomePage/MarkedDates';
import Skin from './Components/SkinCare/Skin';
import Comb from './Components/SkinCare/Comb';
import Dry from './Components/SkinCare/Dry';
import Oily from './Components/SkinCare/Oily';
import Home from './Components/SkinCare/Home';
import Music from './Components/Music/Music';
import Playlist from './Components/Music/Playlist';
import playlist1 from './Components/Playlists/playlist1';
import playlist2 from './Components/Playlists/playlist2';
import playlist3 from './Components/Playlists/playlist3';
import playlist4 from './Components/Playlists/playlist4';
import playlist5 from './Components/Playlists/playlist5';
import PaymentForm from './Components/Subscription/PaymentForm';

const App = () => {
  const [periodLength, setPeriodLength] = useState(1);
  const [cycleLength, setCycleLength] = useState(20);

  return (
    <div>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/login' element={<Login />} />
        <Route path='/journal' element={<Journal />} />
        <Route path='/entry' element={<MoodTracker />} />
        <Route path='/periodTracker' element={<Homepage />} />
        <Route path='/calendar' element={<Calendar periodLength={periodLength} cycleLength={cycleLength} />} />
        <Route path='/daycounter' element={<DayCounter periodLength={periodLength} setPeriodLength={setPeriodLength} />} />
        <Route path='/monthcounter' element={<MonthCounter cycleLength={cycleLength} setCycleLength={setCycleLength} />} />
        <Route path='/markeddates' element={<MarkedDates />} />
        <Route path='/skincare' element={<Home />} />
        <Route path='/skin' element={<Skin />} />
        <Route path='/oily' element={<Oily />} />
        <Route path='/comb' element={<Comb />} />
        <Route path='/dry' element={<Dry />} />
        <Route path="/music" element={<Music />} />
        <Route path="/playlist1" element={<Playlist songs={playlist1} />} />
        <Route path="/playlist2" element={<Playlist songs={playlist2} />} />
        <Route path="/playlist3" element={<Playlist songs={playlist3} />} />
        <Route path="/playlist4" element={<Playlist songs={playlist4} />} />
        <Route path="/playlist5" element={<Playlist songs={playlist5} />} />
        <Route path='/subscribe' element={<PaymentForm/>} />
      </Routes>
    </div>
  );
};

export default App;
