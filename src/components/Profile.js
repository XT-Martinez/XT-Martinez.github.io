import React, { Component } from "react";
import DP from "../assets/DP.jpg";
import background from "../assets/background.jpg";
import "./Profile.css";

class Profile extends Component {
	style = {
		backgroundImage: `url(${background})`
	};

	render() {
		return (
			<div id="Profile" style={this.style}>
				<div className="container container-fluid">
					<div className="row">
						<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 center-xs center-sm center-md center-lg">
							<img src={DP} alt="" className="dp" />
							<div className="row">
								<div className="col-xs-12 col-sm-offset-2 col-sm-8 col-md-offset-3 col-md-6 col-lg-offset-3 col-lg-6">
									<div className="card">
										<div className="card-body">
											<h1>
												Christian Joel Martinez
												<small>Aspiring Full-Stack Web Developer</small>
											</h1>
											<p>
												Lorem ipsum dolor sit amet consectetur, adipisicing
												elit. Fuga, id incidunt. Dignissimos dicta voluptas
												quas. Alias quasi saepe sequi, placeat nostrum earum,
												consectetur molestiae, autem laudantium tenetur nemo
												tempore odit.
											</p>
											<p>
												Lorem ipsum dolor sit amet, consectetur adipisicing
												elit. Ullam dignissimos aliquam animi dolorum, eum sunt
												officiis architecto aut fuga impedit numquam
												perspiciatis nemo, nulla, unde cum dicta et dolores
												repellat.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Profile;
