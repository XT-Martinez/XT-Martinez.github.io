import React, { Component } from "react";
import "./Footer.css";
import Contact from "./Contact";

class Footer extends Component {
	render() {
		return (
			<div id="Footer">
				<div className="container container-fluid">
					<div className="row">
						{/* Contact Column*/}
						<div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 center-xs center-sm start-md start-lg">
							<Contact />
						</div>
						{/* Footer Column 2 */}
						<div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 center-xs center-sm start-md start-lg">
							<h3>About this site</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Laboriosam quam eos praesentium corrupti deleniti error libero,
								adipisci modi voluptatibus perferendis! Esse ducimus quia
								molestias magni iusto consequatur. Blanditiis, adipisci nemo.
							</p>
							<p>
								You may see the code of this site in my{" "}
								<a
									href="https://github.com/XT-Martinez/XT-Martinez.github.io"
									target="_blank"
									rel="noopener noreferrer"
									className="primary-text"
								>
									GitHub Repo
								</a>
								.
							</p>
						</div>
						{/* Footer Column 3 */}
						<div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 center-xs center-sm start-md start-lg">
							<h3>Other Projects</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Laboriosam quam eos praesentium corrupti deleniti error libero,
								adipisci modi voluptatibus perferendis! Esse ducimus quia
								molestias magni iusto consequatur. Blanditiis, adipisci nemo.
							</p>
						</div>
						{/* Copyright */}
						<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 center-xs center-sm center-md center-lg">
							<br />
							<small className="copyright">
								Copyright &#9400; 2019 <span className="primary-text">|</span>{" "}
								Designed by Christian Joel M. Martinez
								<br />
								Background image from{" "}
								<a
									href="https://unsplash.com/"
									target="_blank"
									rel="noopener noreferrer"
								>
									Unsplash
								</a>
							</small>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Footer;
