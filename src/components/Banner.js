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
				<div className="banner-text">
					<div className="banner-text-header" style={this.style}>
						<div className="container container-fluid">
							<span>CHRISTIAN</span>
							<span>MARTINEZ</span>
							<a href="#Profile" className="banner-text-button">
								More About Me
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Banner;
