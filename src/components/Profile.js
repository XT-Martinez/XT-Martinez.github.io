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
              <div id="About">
                <div className="img-frame">
                  <img src={DP} alt="" className="dp" />
                </div>
                <div className="about-caption">
                  <h2>Let me introduce myself</h2>
                  <p>
                    - Hi there! I'm Christian Joel M. Martinez and I'm a 26 year
                    old aspiring full-stack web developer. I recently left my
                    job as a SAP functional analyst to pursue a career in web
                    development. I've written a short blog below on how I ended
                    up leaving my job.
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
                          <p>
                            You may find more details about my work experience
                            in my resume.
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
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 start-xs start-sm">
                  {/* <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 start-xs start-sm"> */}
                  <h2>
                    <i className="fa fa-fw fa-user"></i> More about me
                  </h2>
                  <div className="card">
                    <div className="card-header">
                      <h2>College life</h2>
                    </div>
                    <div className="card-body">
                      <p>
                        Right when I written my first line of code in C
                        language, I knew that programming is meant for me. Back
                        then, I was invited to join a number of programming
                        competitions (and have won some) which made me realize
                        that I'm doing pretty well. I was quite involved in our
                        school org and helped develop some apps for our org
                        activities (digital quiz bee, asset borrowing system).
                      </p>
                      <p>
                        I was also able to use programming to support my studies
                        and my family financially by accepting side projects
                        using open-source technologies for web development such
                        as PHP and MySQL. Since then, programming has become my
                        passion and I nevet felt that I'm <i>working</i> while
                        I'm earning money. After graduating from college, I did
                        some more side projects before deciding to apply for a
                        full-time job to gain more experience.
                      </p>
                    </div>
                    <br />
                    <div className="card-header">
                      <h2>Landing my first full-time job</h2>
                    </div>
                    <div className="card-body">
                      <p>
                        I landed my first job as an{" "}
                        <i>Associate Software Engineer</i> at Accenture. I was
                        very much excited when I heard that I was hired and will
                        start soon. However, while my job title sounds cool, I
                        found out that I was assigned to a capability with very
                        less involvement to programming. It was <i>SAP MM</i>.
                        It was a tough pill to swallow and I was already
                        considering resigning at that time. I had a hard time
                        accepting the role at first but I decided to be open
                        minded and give it a try.
                      </p>
                      <p>
                        A month has passed and the bootcamp went fine and I was
                        quickly deployed to a support project for a Japanese
                        client. My job was to provide <i>"Level 2"</i> support
                        for business users that are using SAP applications
                        around the area of <i>material management</i>. I set
                        aside my aspirations and tried to fit in to a
                        professional work environment. Slowly, I got used to the
                        work and started to accept more responsibility as I
                        progress along. I was then promoted and then deployed to
                        different projects. I can say that I improved a lot in
                        terms of collaboration and communication skills as my
                        work involves a lot of working with onshore and offshore
                        resources.
                      </p>
                      <p></p>
                    </div>
                    <br />
                    <div className="card-header">
                      <h2>Decision to leave my job</h2>
                    </div>
                    <div className="card-body">
                      <p>
                        I've been progressing quite well and I'm enjoying the
                        work, the perks, the environment. However, I know in my
                        self that something is missing. I'm missing programming.
                        So I decided to do programming again, on top of my day
                        job. In my free time, I try to educate myself with the
                        latest trends using free resources on the internet
                        (Especially Youtube Tutorials from{" "}
                        <a
                          href="https://www.youtube.com/user/TechGuyWeb"
                          target="_blank"
                          rel="noreferrer noopener"
                          className="primary-text"
                        >
                          Brad Traversy
                        </a>
                        , hands down the best tech tutor for me) and then trying
                        to code on my own. Luckily, my girlfriend is a librarian
                        who happens to need an automated solution for her daily
                        manual tasks. I created a book borrowing logger for her
                        library which generates a report of the borrowing
                        statistics on a daily or monthly basis, or within a
                        specific date range. You may see the code in my GitHub
                        repository (
                        <a
                          href="https://github.com/XT-Martinez/book-borrowing-frontend"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="primary-text"
                        >
                          Frontend
                        </a>
                        {" | "}
                        <a
                          href="https://github.com/XT-Martinez/library-api"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="primary-text"
                        >
                          Backend
                        </a>
                        ).
                      </p>
                      <p>
                        Now that I'm getting comfortable again in programming, I
                        decided to leave my job in hopes to land a new job in
                        development. Possibly a full-stack developer role. I'm
                        now actively looking for a job where I can do what I
                        love. If you happen to have one for me, please{" "}
                        <a href="#Contact" className="primary-text">
                          get in touch
                        </a>{" "}
                        :)
                      </p>
                    </div>
                  </div>
                </div>
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
