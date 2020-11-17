import React from 'react';
import './App.css';
import Search from './Components/Search';

function App() {
  const dateBuilder = (d) => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const day = days[d.getDay()];
    const date = d.getDate();
    const month = months[d.getMonth()];
    const year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };
  return (
    <div>
      <h1 className="title">WEATHER</h1>
      <div className="search-data">
        <Search date={dateBuilder(new Date())} />
      </div>
    </div>
  );
}

export default App;
