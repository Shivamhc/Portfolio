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
              Hi! I am Shivam Sharma. I am a 3rd-year undergraduate student,
              currently pursuing Bachelor Of Technology in Computer Science from
              Shri Mata Vaishno Devi University, Katra. I am a fast learner. I
              always look for opportunities to learn , to upgrade my knowledge.I
              keep going because I believe in myself. I can reach out for help
              if I need it.I understand how precious time is that is why I do
              not waste chances given to me.I look for positivity in all things.
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
