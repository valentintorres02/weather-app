import React from 'react';
import './App.css';
import Search from './Components/Search'

function App() {

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }
  return (
    <div>
        <h1 className="title">WEATHER</h1>
      <div className="search-data">
      <Search weatherData={{date: dateBuilder(new Date())}}/>
      </div>
    </div>
  );
}

export default App;
