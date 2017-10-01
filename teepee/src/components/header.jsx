import React from 'react';

function Header (props) {
  return (
    <header className="row container-fluid">
      <p className="brand">
        <i className="icon-logo" />
        <b>studio teepee</b> architects
      </p>

      <nav className="navigation">
        <button className="mobile-nav-trigger">
          menu
          <i className="icon-menu" />
        </button>
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
