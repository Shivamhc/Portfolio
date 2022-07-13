import React, { Component } from "react";
import "./welcome.css";
import Myself from "../myself/myself";
import Strength from "../strengths/strength";
import Resume from "../resume/resume";
import Footer from "../footer/footer";

class Welcome extends Component {
  state = {};
  render() {
    return (
      <div className="row">
        <div className="welcomeContainer">
          <div className="welcomeName">Hi! I am Shivam Sharma</div>

          <div className="welcomePortfolio">
            Welcome to my portfolio.
          </div>
        </div>
        <Myself />
        <Strength />
        <Resume />
        <Footer />
      </div>
    );
  }
}

export default Welcome;
