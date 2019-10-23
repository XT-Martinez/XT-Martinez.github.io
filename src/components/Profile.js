import React, { Component } from "react";
import DP from "../assets/DP.jpg";
import "./Profile.css";
// import backgroundImage from "../assets/background.jpg";

class Profile extends Component {
	render() {
		return (
			// <div id="Profile" style={{ backgroundImage: `url(${backgroundImage})` }}>
			<div id="Profile">
				<div className="container container-fluid">
					{/* <h1 className="title">About Me</h1> */}
					<div className="row">
						{/* Row 1 */}
						<div className="col-xs-12 col-sm-6 col-md-offset-1 col-md-5 col-lg-offset-1 col-lg-5 center-xs">
							<img src={DP} alt="" className="dp" />
							<div className="card">
								<div className="card-body">
									<h2>
										About Me
										{/* <small>Aspiring Full-Stack Web Developer</small> */}
									</h2>
									<p>
										Lorem ipsum dolor sit amet consectetur, adipisicing elit.
										Fuga, id incidunt. Dignissimos dicta voluptas quas. Alias
										quasi saepe sequi, placeat nostrum earum, consectetur
										molestiae, autem laudantium tenetur nemo tempore odit.
									</p>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit.
										Ullam dignissimos aliquam animi dolorum, eum sunt officiis
										architecto aut fuga impedit numquam perspiciatis nemo,
										nulla, unde cum dicta et dolores repellat.
									</p>
								</div>
							</div>
						</div>
						<div className="col-xs-12 col-sm-6 col-md-5 col-lg-5 center-xs">
							<img src={DP} alt="" className="dp" />
							<div className="card">
								<div className="card-body">
									<h2>Hobbies & Interests</h2>
									<p>
										Lorem ipsum dolor sit amet consectetur, adipisicing elit.
										Fuga, id incidunt. Dignissimos dicta voluptas quas. Alias
										quasi saepe sequi, placeat nostrum earum, consectetur
										molestiae, autem laudantium tenetur nemo tempore odit.
									</p>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit.
										Ullam dignissimos aliquam animi dolorum, eum sunt officiis
										architecto aut fuga impedit numquam perspiciatis nemo,
										nulla, unde cum dicta et dolores repellat.
									</p>
								</div>
							</div>
						</div>
						{/* Badge 2 */}
						{/* <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 center-xs">
							<img src={DP} alt="" className="dp" />
							<div className="card">
								<div className="card-body">
									<h2>
										Experience
									</h2>
									<p>
										Lorem ipsum dolor sit amet consectetur, adipisicing elit.
										Fuga, id incidunt. Dignissimos dicta voluptas quas. Alias
										quasi saepe sequi, placeat nostrum earum, consectetur
										molestiae, autem laudantium tenetur nemo tempore odit.
									</p>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit.
										Ullam dignissimos aliquam animi dolorum, eum sunt officiis
										architecto aut fuga impedit numquam perspiciatis nemo,
										nulla, unde cum dicta et dolores repellat.
									</p>
								</div>
							</div>
						</div> */}
						{/* Badge 3 */}
						{/* <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 center-xs">
							<img src={DP} alt="" className="dp" />
							<div className="card">
								<div className="card-body">
									<h2>
										Hobbies & Interests
									</h2>
									<p>
										Lorem ipsum dolor sit amet consectetur, adipisicing elit.
										Fuga, id incidunt. Dignissimos dicta voluptas quas. Alias
										quasi saepe sequi, placeat nostrum earum, consectetur
										molestiae, autem laudantium tenetur nemo tempore odit.
									</p>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit.
										Ullam dignissimos aliquam animi dolorum, eum sunt officiis
										architecto aut fuga impedit numquam perspiciatis nemo,
										nulla, unde cum dicta et dolores repellat.
									</p>
								</div>
							</div>
						</div> */}
					</div>
				</div>
			</div>
		);
	}
}

export default Profile;
