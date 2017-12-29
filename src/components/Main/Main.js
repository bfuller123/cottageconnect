//sets up the reusable Jumbotron component
import React from "react";
import "./Main.css";

const Main = () => (
	<header className = "Main">
		<img src={require("../../images/cover.jpg")} />
		<h1>Cottage Connect</h1>
		<h2>Uniting people with homemade products.</h2>
	</header>
);

export default Main;