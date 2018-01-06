import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span> 
            </button>
            <a className="navbar-brand" href="#">COTTAGE CONNECT</a>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#about">ABOUT</a></li>
              <li><a href="#services">SEARCH</a></li>
              <li><a href="#portfolio">SIGN UP</a></li>
              <li><a href="#pricing">LOG IN</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;