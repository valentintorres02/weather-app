import React from 'react';
import './App.css';
import Search from './components/Search/Search';
import Title from './components/Title/Title';
import { dateBuilder } from './constants/constants';

function App() {
  return (
    <>
      <Title />
      <Search date={dateBuilder(new Date())} />
    </>
  );
}

export default App;
