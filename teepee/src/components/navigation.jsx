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
          <li className="about">
            <NavLink
              to="/"
              onClick={ this.closeNav }
              activeClassName="active">
              about
            </NavLink>
          </li>
          <li className="projects">
            <NavLink
              to="/projects"
              onClick={ this.closeNav }
              activeClassName="active">
              projects
            </NavLink>
          </li>
          <li className="approach">
            <NavLink
              to="/approach"
              onClick={ this.closeNav }
              activeClassName="approach">
              approach
            </NavLink>
          </li>
          <li className="contact">
            <NavLink
              to="/contact"
              onClick={ this.closeNav }
              activeClassName="contact">
              contact
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
