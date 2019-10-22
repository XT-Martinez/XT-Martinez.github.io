import React, { Component } from "react";
import ClassNames from "classnames";
import StarScale from "./StarScale";
import "./Skills.css";

class Skills extends Component {
	render() {
		let iconClassName = ClassNames("fa", "primary-text", "skill-icon", {
			"fa-html5": this.props.skill.name === "html",
			"fa-css3": this.props.skill.name === "css",
			"fa-code": this.props.skill.name === "backend",
			"fa-desktop": this.props.skill.name === "frontend",
			"fa-database": this.props.skill.name === "database",
			"fa-linux": this.props.skill.name === "linux"
		});

		return (
			<div className="skill-block">
				<div className="card-body">
					<i className={iconClassName}></i>
					<StarScale scale={this.props.skill.proficiency} />
					<h3>{this.props.skill.label}</h3>
					<div className="secondary-text">{this.props.skill.description}</div>
				</div>
			</div>
		);
	}
}

export default Skills;
