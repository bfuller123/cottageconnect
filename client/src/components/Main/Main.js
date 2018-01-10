import React, { Component } from "react";
import "./Main.css";

class MainTwo extends Component {
  render() {
    return (
        <div className="row">
          <div className="container-fluid text-center col-lg-12 col-md-12 col-sm-12">
            <img src={require("./../../images/coverCenter.png")} className="img-responsive" alt="Responsive image" />

                <a href="/#About" title="To About">
                <span className="glyphicon glyphicon-circle-arrow-down"></span></a>

          </div>
        </div>
    );
  }
}

export default MainTwo;
