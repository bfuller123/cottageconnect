import React from 'react';
import "./Search.css";

class Searchbar extends React.Component {
  render() {
    return(
      <div>
        <form className="SearchBox form-inline" id="Search">

           <h1 className="SearchHed">Quick Search of your Area</h1>
            <div className="row">  
              <div className="col-lg-8 col-lg-offset-2 col-md-6 col-sm-12">
                <div className="form-group">
                  <h3 className="search seachHeader">Food &#160;
                  <input type="text" className="search searchInput" id="searchFood" placeholder="ex. cookies" /></h3>
                </div>
                <div className="form-group">
                  <h3 className="search seachHeader">&#160;&#160;Area&#160;
                  <input type="text" className="search searchInput" id="searchCity" placeholder="ex. Dallas, TX or 75202" /></h3>
                </div>              
                <input type="submit" className="btn btn-info btn-lg search searchButton p-3" id="searchSubmit" value="Search" />
              </div>  
            </div>
            <div className="row">  
              <div className="col-lg-8 col-lg-offset-2 col-md-6 col-sm-12">
                <p>Results from search goes here. question: can the search be by food or area OR does it have to be both????</p>
              </div>
            </div>
        </form> 
      </div>  
    )
  }
}

export default Searchbar;
