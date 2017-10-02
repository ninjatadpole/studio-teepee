import React from 'react';

import Navigation from './navigation.jsx';

function Header (props) {
  return (
    <header className="wrapper">
      <div className="row header-content">
        <p className="brand">
          <i className="icon-logo" />
          <b>studio teepee</b> architects
        </p>

        <Navigation />
      </div>
    </header>
  )
}

export default Header;
