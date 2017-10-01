import React from 'react';

import Navigation from './navigation.jsx';

function Header (props) {
  return (
    <header className="row container-fluid">
      <p className="brand">
        <i className="icon-logo" />
        <b>studio teepee</b> architects
      </p>

      <Navigation />
    </header>
  )
}

export default Header;
