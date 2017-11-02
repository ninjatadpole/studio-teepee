import React from 'react';
import { Link } from 'react-router-dom';

import HomeContact from '../components/home/contact';
import HomeHero from '../components/home/hero';

const Home = function(props) {
  return (
    <main className="page-home">
      <HomeHero version={ 1 } />
      <HomeContact />
      <HomeHero version={ 2 } />
    </main>
  );
}

export default Home;
