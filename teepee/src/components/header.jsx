import React from 'react';

import imgLogo from '../assets/images/logo.svg';

function Header (props) {
  return (
    <header>
      <p className="logo">
        <img src={ imgLogo } alt="" />
        <strong>studio teepee</strong> architects
      </p>

      <nav className="navigation">
        <ul role="navigation">
          <li className="home">
            <a href="/homeowner">homeowner</a>
          </li>
          <li className="developer">
            <a href="/developer">developer</a>
          </li>
          <li className="experience">
            <a href="/experience">past experience</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
