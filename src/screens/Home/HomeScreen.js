import React from 'react';
import Search from '../../components/Search/Search';
import Title from '../../components/Title/Title';
import { dateBuilder } from '../../constants/constants';

function HomeScreen() {
  return (
    <>
      <Title />
      <Search date={dateBuilder(new Date())} />
    </>
  );
}

export default HomeScreen;
