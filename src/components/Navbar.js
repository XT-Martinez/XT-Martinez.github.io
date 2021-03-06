import React, { Component } from "react";
import "./Navbar.css";
import avatar from "../assets/dp2.jpg";
import ClassNames from "classnames";

class Navbar extends Component {
  state = {
    burgerMenuToggle: false,
  };

  handleBurgerMenuToggle = (e) => {
    this.setState((prevState) => ({
      burgerMenuToggle: !prevState.burgerMenuToggle,
    }));
  };

  render() {
    let navLinksClassName = ClassNames("nav-links", {
      "mini-active": this.state.burgerMenuToggle,
    });
    return (
      <header id="Navbar">
        <div className="container container-fluid">
          {/* Header banner */}
          <div className="nav-wrapper">
            <div className="banner">
              <img src={avatar} alt="" />
              <div className="banner-lg">
                Christian <span className="primary-text">Martinez</span>
                {/* <br /> */}
                <small>Full-Stack Web Developer</small>
              </div>
              <div className="banner-sm">
                C<span className="primary-text">M</span>
              </div>
            </div>
            <div
              className="hamburger-btn"
              onClick={this.handleBurgerMenuToggle}
            >
              <i className="fa fa-bars "></i>
            </div>
            {/* Links */}
            <nav className={navLinksClassName}>
              <ul className="link-list">
                <li>
                  <a href="#Profile">
                    <i className="fa fa-lg fa-fw fa-id-card-o"></i>{" "}
                    <span>About</span>
                  </a>
                </li>
                <li>
                  <a href="#Skills">
                    <i className="fa fa-lg fa-fw fa-code"></i>{" "}
                    <span>Skills</span>
                  </a>
                </li>
                <li>
                  <a href="#Contact">
                    <i className="fa fa-lg fa-fw fa-phone"></i>{" "}
                    <span>Contact</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}

export default Navbar;
