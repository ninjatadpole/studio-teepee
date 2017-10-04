import React from 'react';
import { Link } from 'react-router-dom';

const Home = function(props) {
  return (
    <main className="page-home">
      <div className="wide">
        <Link to="/homeowner" className="homeowner"><span>homeowner</span></Link>
        <Link to="/developer" className="developer"><span>developer</span></Link>
      </div>
    </main>
  );
}

export default Home;
