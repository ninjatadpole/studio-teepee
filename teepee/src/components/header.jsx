import React from 'react';
import { Link } from 'react-router-dom';

import Navigation from './navigation.jsx';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.closeNav = ()=>{};
    this.registerCloseNav = this.registerCloseNav.bind(this);
  }

  registerCloseNav(closeNavFunc) {
    this.closeNav = closeNavFunc;
  }

  render() {
    return (
      <header className="wrapper">
        <div className="row header-content">
          <p className="brand">
            <Link to="/" onClick={ this.closeNav }>
              <i className="icon-logo" />
              <b className="company">studio teepee</b>
              <span className="profession">architects</span>
            </Link>
          </p>

          <Navigation registerCloseNav={ this.registerCloseNav } />
        </div>
      </header>
    );
  }
}

export default Header;
