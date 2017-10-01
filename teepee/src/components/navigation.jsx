import React, { Component } from 'react';
import classnames from 'classnames';

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      closing: false,
      open: false,
    };

    this.toggleNav = this.toggleNav.bind(this);
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
    );
  }
}

export default Navigation;
