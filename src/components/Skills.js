import React, { Component } from "react";
import "./Skills.css";

class Skills extends Component {
	render() {
		return (
			<div id="Skills">
				<div className="container container-fluid">
					<div className="row">
						<div className="col-xs-12 center-xs">
							<h1>Core Skills</h1>
						</div>
						{/* Skill 1 */}
						<div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 center-xs">
							<div className="skill-block">
								<div className="card-body">
									<i className="fa fa-html5 primary-text"></i>
									<h4>HTML</h4>
									<p className="secondary-text">
										Lorem ipsum, dolor sit amet consectetur adipisicing elit.
										Debitis adipisci necessitatibus labore incidunt, quod
										voluptatibus iure nobis nesciunt hic vitae magnam expedita.
										Ad placeat, necessitatibus totam sunt doloremque nihil enim.
									</p>
								</div>
							</div>
						</div>
						{/* Skill 1 */}
						<div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 center-xs">
							<div className="skill-block">
								<div className="card-body">
									<i className="fa fa-css3 primary-text"></i>
									<h4>CSS</h4>
									<p className="secondary-text">
										Lorem ipsum, dolor sit amet consectetur adipisicing elit.
										Debitis adipisci necessitatibus labore incidunt, quod
										voluptatibus iure nobis nesciunt hic vitae magnam expedita.
										Ad placeat, necessitatibus totam sunt doloremque nihil enim.
									</p>
								</div>
							</div>
						</div>
						{/* Skill 1 */}
						<div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 center-xs">
							<div className="skill-block">
								<div className="card-body">
									<i className="fa fa-code primary-text"></i>
									<h4>Backend Stack</h4>
									<p className="secondary-text">
										Lorem ipsum, dolor sit amet consectetur adipisicing elit.
										Debitis adipisci necessitatibus labore incidunt, quod
										voluptatibus iure nobis nesciunt hic vitae magnam expedita.
										Ad placeat, necessitatibus totam sunt doloremque nihil enim.
									</p>
								</div>
							</div>
						</div>
						{/* Skill 1 */}
						<div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 center-xs">
							<div className="skill-block">
								<div className="card-body">
									<i className="fa fa-desktop primary-text"></i>
									<h4>Frontend Javascript Frameworks</h4>
									<p className="secondary-text">
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Quasi harum dolore voluptatibus, quidem quisquam, esse
										perspiciatis, minus corrupti ullam sapiente magni molestiae
										odio aperiam molestias sunt repellat. Consequuntur, sequi
										facere!
									</p>
								</div>
							</div>
						</div>
						{/* Skill 1 */}
						<div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 center-xs">
							<div className="skill-block">
								<div className="card-body">
									<i className="fa fa-database primary-text"></i>
									<h4>Database</h4>
									<p className="secondary-text">
										Lorem ipsum, dolor sit amet consectetur adipisicing elit.
										Debitis adipisci necessitatibus labore incidunt, quod
										voluptatibus iure nobis nesciunt hic vitae magnam expedita.
										Ad placeat, necessitatibus totam sunt doloremque nihil enim.
									</p>
								</div>
							</div>
						</div>
						{/* Skill 1 */}
						<div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 center-xs">
							<div className="skill-block">
								<div className="card-body">
									<i className="fa fa-linux primary-text"></i>
									{/* <img src={LogoUbuntu} alt="" />
									<img src={LogoFedora} alt="" />
									<img src={LogoDocker} alt="" /> */}
									<h4>Linux, Containers</h4>
									<p className="secondary-text">
										I started diving into Linux back when Ubuntu 12.04 was
										released. Since then, a linux distro has been my daily
										driver which made me more familiar with command-line
										interface (CLI). Now, I'm using{" "}
										<a
											href="https://silverblue.fedoraproject.org/"
											target="_blank"
											rel="noreferrer noopener"
											className="primary-text"
										>
											Fedora Silverblue
										</a>{" "}
										(a container-focused distribution) as my daily driver OS.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Skills;
