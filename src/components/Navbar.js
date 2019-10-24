import React, { Component } from "react";
import "./Navbar.css";
import avatar from "../assets/DP.jpg";
import ClassNames from "classnames";

class Navbar extends Component {
	state = {
		burgerMenuToggle: false
	};

	handleBurgerMenuToggle = e => {
		this.setState({ burgerMenuToggle: !this.state.burgerMenuToggle });
	};

	render() {
		let navLinksClassName = ClassNames("nav-links", {
			"mini-active": this.state.burgerMenuToggle
		});
		return (
			<header id="Navbar">
				<div className="container container-fluid">
					{/* Header banner */}
					<div className="nav-wrapper">
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
						{/* Links */}
						<nav className={navLinksClassName}>
							<div
								className="hamburger-btn"
								onClick={this.handleBurgerMenuToggle}
							>
								<i className="fa fa-bars "></i>
							</div>
							<ul className="link-list">
								<li>
									<a href="#Profile">
										<i className="fa fa-user"></i> About Me
									</a>
								</li>
								<li>
									<a href="#Skills">
										<i className="fa fa-code"></i> Core Skills
									</a>
								</li>
								<li>
									<a href="#Contact">
										<i className="fa fa-phone"></i> Contact Me
									</a>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</header>
		);
	}
}

export default Navbar;
