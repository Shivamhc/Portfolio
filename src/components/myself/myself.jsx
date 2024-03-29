import React, { Component } from "react";
import "./myself.css";
import profile from "../../images/profile.jpg";

class Myself extends Component {
  state = {};
  render() {
    return (
      <div className="myselfContainer">
        <h1>About My Self</h1>
        <div className="row">
          <div className="column">
            <div className="myselfPara">
              Hi! I am Shivam Sharma. I am a second year post-graduate student,
              currently pursuing Master Of Technology in Computer Science from
              Delhi Technological University, Delhi.<br> I am a fast learner. I
              always look for opportunities to learn , to upgrade my knowledge.I
              keep going because I believe in myself. I can reach out for help
              if I need it.I look for positivity in all things.
            </div>
          </div>
          <div className="column">
            <img src={profile} alt="Profile" />
          </div>
        </div>
      </div>
    );
  }
}

export default Myself;
