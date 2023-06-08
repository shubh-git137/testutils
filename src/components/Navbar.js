import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <a className="navbar-brand" href="/">
        TextUtils
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto mx-4">
          <li className="nav-item">
            <a className="nav-link" href="/">
              {props.title}   
            </a>
          </li>

          {/* <li className="nav-item">
            <Link className="nav-link " to="/about">
              {props.aboutText}
            </Link>
          </li> */}
        </ul>
        <form className="d-flex">
          {/* <input className="form-control float-right" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-primary float-left mx-2" type="submit">
              Search
            </button> */}
          <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}`}>
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
              Enable Darkmode
            </label>
          </div>
        </form>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Title is here",

  aboutText: "About",
};
