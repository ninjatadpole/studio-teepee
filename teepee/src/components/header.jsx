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
      <header>
        <div className="wrapper">
          <div className="header-content">
            <p className="brand">
              <Link to="/" onClick={ this.closeNav }>
                <i className="icon-logo" />
                <b className="company">studio teepee</b>
              </Link>
            </p>

            <Navigation registerCloseNav={ this.registerCloseNav } />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
