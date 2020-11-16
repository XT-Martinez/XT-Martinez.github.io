import React, { Component } from "react";
import "./App.css";
import "flexboxgrid/dist/flexboxgrid.min.css";
import "font-awesome/css/font-awesome.min.css";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Banner from "./components/Banner";

class App extends Component {
	render() {
		return (
			<div id="App">
				<Navbar />
				<Banner />
				<Profile />
				<Skills />
				<Footer />
			</div>
		);
	}
}

export default App;
