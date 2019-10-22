import React, { Component } from "react";
import "./Navbar.css";
import avatar from "../assets/DP.jpg";

class Navbar extends Component {
	render() {
		return (
			<header id="Navbar">
				<div className="container container-fluid">
					<div className="row middle-xs middle-sm middle-md middle-lg">
						{/* Header banner */}
						<div className="col-xs-2 col-sm-5 col-md-8 col-lg-8 start-xs start-sm start-md start-lg">
							<div className="banner">
								<img src={avatar} alt="" />
								<div className="banner-lg">
									Christian <span className="primary-text">Martinez</span>
									{/* <br /> */}
									<small>Aspiring Full-Stack Web Developer</small>
								</div>
								<div className="banner-sm">
									C<span className="primary-text">M</span>
								</div>
							</div>
						</div>
						{/* Links */}
						<div className="col-xs-10 col-sm-7 col-md-4 col-lg-4 center-xs end-sm end-md end-lg">
							<nav id="NavLinks">
								<ul>
									<li>
										<a href="#Profile" className="">
											<i className="fa fa-user"></i>
											<br />
											About Me
										</a>
									</li>
									<li>
										<a href="#Skills">
											<i className="fa fa-code"></i>
											<br />
											Core Skills
										</a>
									</li>
									<li>
										<a href="#Contact">
											<i className="fa fa-phone"></i>
											<br />
											Contact Me
										</a>
									</li>
									{/* <li>
										<a
											href="https://github.com/XT-Martinez/"
											target="_blank"
											rel="noopener noreferrer"
										>
											<i className="fa fa-github"></i>
											<br />
											Github
										</a>
									</li>
									<li>
										<a
											href="https://www.linkedin.com/in/christian-joel-martinez-20969a109/"
											target="_blank"
											rel="noopener noreferrer"
										>
											<i className="fa fa-linkedin"></i>
											<br />
											LinkedIn
										</a>
									</li> */}
								</ul>
							</nav>
						</div>
					</div>
				</div>
			</header>
		);
	}
}

export default Navbar;
