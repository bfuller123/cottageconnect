import React, { Component } from "react";
import "./Search.css";

class Search extends Component {
//sets the initial values of this.state.search
  state = {
    search: ""
  };

//handle any changes to the input fields
  handleInputChange = event => {
//pull the name and value properties off of the event.target (the element which triggered the event)
    const { name, value } = event.target;

//set the state for the appropriate input field
    this.setState({
      [name]: value
    });
  };

//when the form is submitted, prevent the default event, reset search box to empy
  handleFormSubmit = event => {
    event.preventDefault();
    this.setState({ search: "",});
  };

  render() {
    return (
		<div className="SearchBox">
			<div className="SearchCenter">
				<h1 className="SearchHed">What cottages are in your Area?</h1>
		    	<form className="SearchQuick">
	         		<input
	          		type="text"
	          		placeholder="Type in a zip code or city name"
	          		name="search"
	          		value={this.state.search}
	          		onChange={this.handleInputChange}
	        		/>
	        		<button onClick={this.handleFormSubmit}>Submit</button>
	      		</form>
	    	</div>
	    </div>	  
    );
  }
}

export default Search;