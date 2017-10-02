import React from 'react';
import { Link } from 'react-router-dom';

import Navigation from './navigation.jsx';

function Header (props) {
  return (
    <header className="wrapper">
      <div className="row header-content">
        <p className="brand">
          <Link to="/">
            <i className="icon-logo" />
            <b>studio teepee</b> architects
          </Link>
        </p>

        <Navigation />
      </div>
    </header>
  )
}

export default Header;
