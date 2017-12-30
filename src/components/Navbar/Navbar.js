import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container-fluid">
              <div className = "navbar-header">
                  <a className="navbar-brand" href="/">Like Mom Made</a>
              </div>
              <div className="collapse navbar-collapse">
                  <ul className="nav navbar-nav navbar-right">
                      <li><a href="/">About</a></li>
                      <li><a href="/">Sign In</a></li>
                  </ul>
              </div>
          </div>
      </nav>
    );
  }
}

export default Navbar;