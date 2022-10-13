import React, { Component } from "react";
import Canvas from "../components/Canvas";
import Nav from "../components/Nav";
import About from "../components/About";
import Project from "../components/Project";
import Contact from "../components/Contact";
import "./Home.css";

class Home extends Component {
	render() {
		return (
			<div id="homeContainer">
				<div id="main">
					<Canvas />
					<About />
					<Project />
				</div>
				<Contact />
			</div>
		);
	}
}

export default Home;
