import React from 'react';
import logo from '../assets/logo/logo_white.png';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <nav id="menu" className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              {' '}
              <span className="sr-only">Toggle navigation</span>{' '}
              <span className="icon-bar"></span>{' '}
              <span className="icon-bar"></span>{' '}
              <span className="icon-bar"></span>{' '}
            </button>
            <Link to="/">
              <img className="navbar__logo" src={logo} alt="Logo"></img>
            </Link>
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="#investor-sheet" className="page-scroll">
                  Investor Sheet
                </a>
              </li>
              <li>
                <a href="#sales-package" className="page-scroll">
                  Sales Package
                </a>
              </li>
              <a
                href="#register"
                className="btn btn-custom btn-lg page-scroll nav-button"
              >
                Register Interest
              </a>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
