import React, { Component } from "react";
import "./Contact.css";

class Contact extends Component {
	render() {
		return (
			<div id="Contact">
				<h3>
					I'm looking for work.{" "}
					<span className="primary-text">Contact Me!</span>
				</h3>
				<div className="contact-details">
					<i className="fa fa-mobile primary-text circle-icon"></i> (+63)
					995-472-5760
				</div>
				<div className="contact-details">
					<i className="fa fa-envelope primary-text circle-icon"></i>{" "}
					<a href="mailto:xtian437@gmail.com">xtian437@gmail.com</a>
				</div>
				<div className="contact-details">
					<i className="fa fa-globe primary-text circle-icon"></i>{" "}
					<a href="https://xt-martinez.github.io">xt-martinez.github.io</a>
				</div>
				<br />
				<div className="icon-link-group">
					{/* Facebook */}
					<a
						href="https://www.facebook.com/xtian437"
						target="_blank"
						rel="noopener noreferrer"
						className="icon-link"
					>
						<i className="fa fa-facebook circle-icon"></i>
					</a>
					{/* Twitter */}
					<a
						href="https://twitter.com/xt_martinez"
						target="_blank"
						rel="noopener noreferrer"
						className="icon-link"
					>
						<i className="fa fa-twitter circle-icon"></i>
					</a>
					{/* GitHub */}
					<a
						href="https://github.com/XT-Martinez/"
						target="_blank"
						rel="noopener noreferrer"
						className="icon-link"
					>
						<i className="fa fa-github circle-icon"></i>
					</a>
					{/* LinkedIn */}
					<a
						href="https://www.linkedin.com/in/christian-joel-martinez-20969a109/"
						target="_blank"
						rel="noopener noreferrer"
						className="icon-link"
					>
						<i className="fa fa-linkedin circle-icon"></i>
					</a>
				</div>
			</div>
		);
	}
}

export default Contact;
