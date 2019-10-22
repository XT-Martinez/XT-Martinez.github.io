import React, { Component } from "react";
import SkillCard from "./SkillCard";
import "./Skills.css";

class Skills extends Component {
	state = {
		skills: [
			{
				name: "html",
				label: "HTML",
				proficiency: 9,
				description: (
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
						ab libero inventore excepturi pariatur dignissimos asperiores
						dolores nesciunt, perferendis placeat eligendi sed repellat
						incidunt. Dolorum enim sed accusantium rem obcaecati!
					</p>
				)
			},
			{
				name: "css",
				label: "CSS",
				proficiency: 7,
				description: (
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
						ab libero inventore excepturi pariatur dignissimos asperiores
						dolores nesciunt, perferendis placeat eligendi sed repellat
						incidunt. Dolorum enim sed accusantium rem obcaecati!
					</p>
				)
			},
			{
				name: "backend",
				label: "Backend Stack",
				proficiency: 8,
				description: (
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
						ab libero inventore excepturi pariatur dignissimos asperiores
						dolores nesciunt, perferendis placeat eligendi sed repellat
						incidunt. Dolorum enim sed accusantium rem obcaecati!
					</p>
				)
			},
			{
				name: "frontend",
				label: "Frontend Frameworks",
				proficiency: 7,
				description: (
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
						ab libero inventore excepturi pariatur dignissimos asperiores
						dolores nesciunt, perferendis placeat eligendi sed repellat
						incidunt. Dolorum enim sed accusantium rem obcaecati!
					</p>
				)
			},
			{
				name: "database",
				label: "Database",
				proficiency: 8,
				description: (
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
						ab libero inventore excepturi pariatur dignissimos asperiores
						dolores nesciunt, perferendis placeat eligendi sed repellat
						incidunt. Dolorum enim sed accusantium rem obcaecati!
					</p>
				)
			},
			{
				name: "linux",
				label: "Linux, Containers",
				proficiency: 7,
				description: (
					<p>
						I started diving into Linux back when Ubuntu 12.04 was released.
						Since then, a linux distro has been my daily driver which made me
						more familiar with command-line interface (CLI). Now, I'm using{" "}
						<a
							key="1"
							href="https://silverblue.fedoraproject.org/"
							target="_blank"
							rel="noreferrer noopener"
							className="primary-text"
						>
							Fedora Silverblue
						</a>{" "}
						(a container-focused linux distribution) as my daily driver OS.
					</p>
				)
			}
		]
	};

	render() {
		return (
			<div id="Skills">
				<div className="container container-fluid">
					<div className="row">
						<div className="col-xs-12 center-xs">
							<h1 className="title">Core Skills</h1>
						</div>
						{this.state.skills.map(skill => {
							return (
								<div
									key={skill.name}
									className="col-xs-12 col-sm-6 col-md-4 col-lg-4 center-xs"
								>
									<SkillCard skill={skill} />
								</div>
							);
						})}
					</div>
				</div>
			</div>
		);
	}
}

export default Skills;
