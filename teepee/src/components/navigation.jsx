import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { NavLink } from 'react-router-dom';

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      closing: false,
      open: false,
    };

    this.closeNav = this.closeNav.bind(this);
    this.toggleNav = this.toggleNav.bind(this);

    this.props.registerCloseNav(this.closeNav);
  }

  toggleNav() {
    if (!this.state.open) {
      this.setState({
        open: true,
      });
    } else {
      this.setState({
        closing: true,
        open: false,
      }, () => {
        window.setTimeout(() => {
          this.setState({
            closing: false,
          });
        }, 330);
      });
    }
  }

  closeNav() {
    if (this.state.open) {
      this.toggleNav();
    }
  }

  render() {
    return (
      <nav className="navigation">
        <button
          className="mobile-nav-trigger"
          onClick={ this.toggleNav }
        >
          menu
          <i className="icon-menu" />
        </button>
        <ul
          role="navigation"
          className={ classnames({
            'open': this.state.open,
            'closing': this.state.closing
          }) }>
          <li className="homeowner">
            <NavLink
              to="/homeowner"
              onClick={ this.closeNav }
              activeClassName="active">
              homeowner
            </NavLink>
          </li>
          <li className="developer">
            <NavLink
              to="/developer"
              onClick={ this.closeNav }
              activeClassName="active">
              developer
            </NavLink>
          </li>
          <li className="experience">
            <NavLink
              to="/experience"
              onClick={ this.closeNav }
              activeClassName="active">
              past experience
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

Navigation.propTypes = {
  registerCloseNav: PropTypes.func,
}

export default Navigation;
