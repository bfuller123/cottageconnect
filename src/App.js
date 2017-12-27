import React, { Component } from 'react';
import './App.css';
import Cardloader from './components/cardloader';
import Searchbar from './components/searchbar';
import PortalLoader from './components/portalloader';

// TODO: Move PortalLoader to its own page!

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Cottage Connect</h1>
          <h3>Connecting People with Homemade Products</h3>
          <button id="sign-up btn">Sign Up</button>
          <button id="sign-in btn">Sign In</button>
          <Searchbar />
        </header>
        <Cardloader />
        <PortalLoader />
      </div>
    );
  }
}

export default App;
