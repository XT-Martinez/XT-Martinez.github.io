import React, { Component } from "react";
import background from "../assets/background.jpg";
import "./Banner.css";

class Banner extends Component {
	style = {
		backgroundImage: `url(${background})`
	};

	render() {
		return (
			<div id="Banner" style={this.style}>
				<h1 className="banner-text">
					<div className="banner-text-header" style={this.style}>
						<span>
							CHRISTIAN <br /> MARTINEZ
						</span>
						<a href="#Profile" className="banner-text-button">
							More About Me
						</a>
					</div>
				</h1>
			</div>
		);
	}
}

export default Banner;
