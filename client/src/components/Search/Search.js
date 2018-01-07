import React from 'react';
import "./Search.css";

class Searchbar extends React.Component {
  render() {
    return(
      <form className="SearchBox" id="Search">
        <div className="col-lg-6 col-lg-offset-3 col-md-8 col-md-offset-2 col-sm-12">
          <h1 className="SearchHed">Quick Search of your Area</h1>
          <h3 className="search seachHeader">Food &#160;
          <input type="text" className="search searchInput" id="searchFood" placeholder="ex. cookies" /></h3>
          <h3 className="search seachHeader">Area&#160;
          <input type="text" className="search searchInput" id="searchCity" placeholder="ex. Dallas, TX or 75202" /></h3>
          <input type="submit" className="btn btn-info btn-lg search searchButton p-3" id="searchSubmit" value="Search" />
        </div>   
      </form>
    )
  }
}

export default Searchbar;
