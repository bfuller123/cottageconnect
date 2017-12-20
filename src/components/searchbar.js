import React from 'react';

class Searchbar extends React.Component {
  render() {
    return(
      <form>
        <input type="text" id="searchInput" placeholder="city"/>
        <input type="submit" id="searchSubmit" value="search" />
      </form>
    )
  }
}

export default Searchbar;
