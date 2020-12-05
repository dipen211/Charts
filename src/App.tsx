import React from 'react';
import './App.css';
import Weeks from './chart/bar/Weeks';
import Months from './chart/bar/Months';
import Years from './chart/bar/Years';
import WeekLine from './chart/line/WeekLine';
import MonthLine from './chart/line/MonthLine';
import YearLine from './chart/line/YearLine';
function App() {
  return (
    <>
      <Weeks />
      <Months />
      <Years />
      <WeekLine />
      <MonthLine />
      <YearLine />
    </>
  );
}

export default App;
