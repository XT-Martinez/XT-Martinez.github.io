import React, { Component } from "react";
import background from "../assets/background.jpg";
import "./Banner.css";

class Banner extends Component {
	render() {
		let style = {
			backgroundImage: `url(${background})`
		};
		return (
			<div id="Banner" style={style}>
				<div className="banner-text">
					<div className="banner-text-header" style={style}>
						<div className="container container-fluid">
							<span>CHRISTIAN</span>
							<span>MARTINEZ</span>
							<a href="#Profile" className="btn btn-primary">
								About Me
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Banner;
