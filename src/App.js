import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import About from "./components/About";
import Footer from "./components/Footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Main />
        <About />
        <Footer />
    </div>
    );
  }
}

export default App;
