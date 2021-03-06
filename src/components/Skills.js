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
						I used Bootstrap framework extensively in my previous projects which
						made me familiar with grid layout and responsive design. I'm also
						knowledgeable with flexbox layout. However, I have little experience
						with CSS preprocesors such as SASS and LESS which I'm currently
						teaching myself.
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
				label: "SQL",
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
						I started using Linux back when Ubuntu 12.04 was released. Since
						then, a linux distro has been my daily driver which made me more
						familiar with command-line interface (CLI) and some linux commands.
						Now, I'm using{" "}
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
							<h2 className="title">Technology Stack</h2>
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
