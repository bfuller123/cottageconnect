import React, { Component } from 'react';
import './App.css';
import Shops from './components/shops'
import Searchbar from './components/searchbar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Cottage Connect</h1>
          <h3>Connecting People with Homemade Products</h3>
          <Searchbar />
        </header>
        <Shops />
      </div>
    );
  }
}

export default App;
