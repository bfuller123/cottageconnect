//sets up the reusable Jumbotron component
import React from "react";
import "./Main.css";

const Main = () => (
	<div className = "Main">
		<img src={require("../../images/cover.jpg")} />
		<h1 className="MainH1">Cottage Connect</h1>
		<h2 className="MainH2">Uniting people with homemade products</h2>
	</div>
);

export default Main;