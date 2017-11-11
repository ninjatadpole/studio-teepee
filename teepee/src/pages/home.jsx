import React from 'react';

import HomeContact from '../components/home/contact';
import HomeHero from '../components/home/hero';
import HomeWhy from '../components/home/why';

const Home = function(props) {
  return (
    <main className="page-home">
      <HomeHero version={ 1 } />
      <HomeContact />
      <HomeHero version={ 2 } />
      <HomeWhy />
    </main>
  );
}

export default Home;
