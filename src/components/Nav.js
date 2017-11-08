import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/css/Nav.css';
import 'font-awesome/css/font-awesome.min.css';

const classNames = require('classnames');

class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showAbout: false,
      showAboutFull: false
    }
  }

  toggleAbout(e) {
    e.preventDefault();
    if (this.state.showAbout) {
      this.setState({ showAboutFull: false })
      setTimeout(() => {
        this.setState({ showAbout: false })
      }, 150);
    } else {
      this.setState({ showAbout: true })
      setTimeout(() => {
        this.setState({ showAboutFull: true })
      }, 150);
    }
  }

  render() {
    let navbarContainerClasses = classNames(
      'navbar-container',
      {
        'navbar-container--hide-nav': !this.props.showNav,
        'navbar-container--hide-nav-full': !this.props.showNavFull,
        'navbar-container--show-about': this.state.showAbout
      }
    );

    let aboutClasses = classNames(
      'about',
      {
        'about--show': this.state.showAbout,
        'about--show-full': this.state.showAboutFull
      }
    );

    return (
      <div className={navbarContainerClasses}>
        <div className="navbar-body">
          <div className="navbar">
            <NavLink to='/'>
              <h1>Mason Chan</h1>
            </NavLink>
            <ul>
              <li><NavLink activeClassName="active" to='/sf'>San Francisco</NavLink></li>
              <li><NavLink activeClassName="active" to='/berkeley'>Berkeley</NavLink></li>
              <li><NavLink activeClassName="active" to='/la'>Los Angeles</NavLink></li>
              <li><NavLink activeClassName="active" to='/nyc'>New York</NavLink></li>
              <li><NavLink activeClassName="active" to='/chicago'>Chicago</NavLink></li>
              <li><NavLink activeClassName="active" to='/personal'>Personal</NavLink></li>
            </ul>
            <a className="about-link"
               href="js-about"
               onClick={this.toggleAbout.bind(this)}
            >
              About
              {this.state.showAbout &&
                <span className="fa fa-caret-down"></span>
              }
            </a>
          </div>
          <div className={aboutClasses}>
            <p>Hello, I'm Mason.</p>
            <p>I find great joy in capturing humanity in its rawest form through the medium of photography.</p>
            <div className="hide-about-btn__wrapper" onClick={this.toggleAbout.bind(this)}>
              <div className="hide-about-btn"></div>
            </div>
            <p>I also maintain a fascination for urban landscapes and public transportation.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;
