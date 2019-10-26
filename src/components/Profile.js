import React, { Component } from "react";
// import DP from "../assets/DP.jpg";
import DP from "../assets/dp2.jpg";
import ResumePDF from "../assets/Christian_Martinez-Resume.pdf";
import "./Profile.css";

class Profile extends Component {
	render() {
		return (
			<div id="Profile">
				<div className="container container-fluid">
					{/* <h1 className="title">About Me</h1> */}
					<div className="row">
						<div className="col-xs-12 col-sm-12 col-md-offset-1 col-md-10 col-lg-offset-1 col-lg-10">
							<div className="row" id="About">
								<div className="col-xs-12 col-sm-3 col-md-3 col-lg-2 center-xs start-sm">
									<div className="img-frame">
										<img src={DP} alt="" className="dp" />
									</div>
								</div>
								<div className="col-xs-12 col-sm-9 col-md-9 col-lg-10 start-xs start-sm">
									<h2>Let me introduce myself</h2>
									<p>
										- Lorem ipsum dolor sit amet consectetur adipisicing elit. A
										incidunt, nemo magni quo odio sequi recusandae repudiandae.
										Quo vero numquam quod, at debitis mollitia minus iure in
										suscipit ullam repellat.
										<br />
										<a
											href={ResumePDF}
											className="btn btn-danger btn-sm"
											target="_blank"
											rel="noopener noreferrer"
										>
											Download Resume
										</a>
									</p>
								</div>
							</div>
							<div className="row">
								{/* Row 1 */}
								<div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 start-xs start-sm">
									<div className="card">
										{/* <div className="img-frame">
											<img src={DP} alt="" className="dp" />
										</div> */}
										<div className="card-header">
											<h2>Profile</h2>
										</div>
										<div className="card-body">
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
								{/* Badge 2 */}
								<div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 start-xs start-sm">
									<table border="0">
										<tbody>
											<tr>
												<th>
													<h2>
														<i className="fa fa-briefcase"></i>
													</h2>
												</th>
												<td>
													<h2>Work Experience</h2>
												</td>
											</tr>
											<tr>
												<th>
													<i className="fa fa-chevron-right"></i>
												</th>
												<td>
													<b>SAP MM Functional Analyst</b>
													<br />
													<small>Accenture Inc. | 2016 - 2019</small>
													<p>
														Lorem ipsum dolor sit, amet consectetur adipisicing
														elit. Facilis, saepe?
													</p>
												</td>
											</tr>
											<tr>
												<th>
													<i className="fa fa-chevron-right"></i>
												</th>
												<td>
													<b>OJT - PHP Developer</b>
													<br />
													<small>Firenze Corporation | Jun - Sep 2014</small>
													<p>
														Lorem ipsum dolor sit, amet consectetur adipisicing
														elit. Facilis, saepe?
													</p>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
							<div className="divider"></div>
							<div className="row">
								{/* Badge 4 */}
								<div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 start-xs start-sm">
									<div className="card">
										{/* <div className="img-frame">
											<img src={DP} alt="" className="dp zoom-1" />
										</div> */}
										<div className="card-header">
											<h2>
												Academic Achievements
												{/* <small>Aspiring Full-Stack Web Developer</small> */}
											</h2>
										</div>

										<div className="card-body">
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

										{/* <div className="card-footer">
											<button
												type="button"
												className="btn btn-danger btn-block"
											>
												Test
											</button>
										</div> */}
									</div>
								</div>
								{/* Badge 3 */}
								<div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 start-xs start-sm">
									<table border="0">
										<tbody>
											<tr>
												<th>
													<h2>
														<i className="fa fa-graduation-cap"></i>
													</h2>
												</th>
												<td>
													<h2>Education</h2>
												</td>
											</tr>
											<tr>
												<th>
													<i className="fa fa-chevron-right"></i>
												</th>
												<td>
													<b>Our Lady of Fatima University</b>
													<br />
													<small>Antipolo City</small>
													<p>
														Bachelor of Science in Information Technology
														<br />
														Batch of 2015
													</p>
												</td>
											</tr>
											<tr>
												<th>
													<i className="fa fa-chevron-right"></i>
												</th>
												<td>
													<b>Our Lady of Peace School</b>
													<br />
													<small>Antipolo City</small>
													<p>High School Diploma, Class of 2010</p>
												</td>
											</tr>
										</tbody>
									</table>
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
