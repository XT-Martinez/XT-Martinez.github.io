import React, { Component } from "react";
import DP from "../assets/dp2.jpg";
// import ResumePDF from "../assets/Christian_Martinez-Resume.pdf";
import "./Profile.css";

class Profile extends Component {
  render() {
    return (
      <div id="Profile">
        <div className="container container-fluid">
          {/* <h1 className="title">About Me</h1> */}
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-offset-1 col-md-10 col-lg-offset-1 col-lg-10">
              <div
                id="About"
                className="row center-xs start-md start-lg start-xl"
              >
                <div className="img-frame col-xs-12 col-sm-12 col-md-3 center-xl-2 center-md ">
                  <img src={DP} alt="" className="dp" />
                </div>
                <div className="about-caption col-xs-12 col-sm-12 col-md-9 center-xl-10">
                  <h2>Let me introduce myself</h2>
                  <p>
                    I'm Christian Joel M. Martinez, a 27 year old
                    full-stack/.NET web developer. Lorem, ipsum dolor sit amet
                    consectetur adipisicing elit. Recusandae eius iusto unde,
                    itaque laudantium reiciendis corrupti iste veniam soluta!
                    Reprehenderit odit consectetur in distinctio ex, fugit
                    dolorum dolore tempora aliquid?
                    <br />
                    {/* <a
                      href={ResumePDF}
                      className="btn btn-danger btn-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-fw fa-download"></i> Download Resume
                    </a> */}
                  </p>
                </div>
              </div>
              <div className="row">
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
                          <b>Full-Stack/.NET Developer</b>
                          <br />
                          <small>iRely Philippines Inc. | 2019 - Present</small>
                          <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Praesentium perferendis nemo vel labore
                            repellat dolores corrupti delectus asperiores ad!
                            Aut distinctio nihil ad. Consequuntur quasi esse
                            facere velit delectus. Nisi.
                          </p>
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
                            My primary role was to support business users on
                            their "Business as Usual" operations. I also have
                            project work experience where I translated business
                            requirements into functional and technical
                            specifications in SAP.
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
                            I performed build and test for an inventory
                            management system written in PHP using a custom
                            framework.
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
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
                {/* Row 1 */}
              </div>
              <div className="divider"></div>
              <div className="row">
                {/* Badge 4 */}
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 start-xs start-sm"></div>
                {/* Badge 3 */}
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 start-xs start-sm"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
