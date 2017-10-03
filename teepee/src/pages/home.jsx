import React from 'react';
import { Link } from 'react-router-dom';

const Home = function(props) {
  return (
    <main className="page-home">
      <div className="wide">
        <Link to="/homeowner" className="homeowner"><span>Homeowner</span></Link>
        <Link to="/homeowner" className="developer"><span>Developer</span></Link>
      </div>
    </main>
  );
}

export default Home;
