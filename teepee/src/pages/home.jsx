import React from 'react';
import { Link } from 'react-router-dom';

import HomeHero from '../components/home/hero';

const Home = function(props) {
  return (
    <main className="page-home">
      <HomeHero version={ 1 } />
      <HomeHero version={ 2 } />
    </main>
  );
}

export default Home;
