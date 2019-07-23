import React, { Component } from "react";
import "./resume.css";

class Resume extends Component {
  state = {};
  render() {
    return (
      <div className="resumeContainer">
        <h2>View and Download Resume</h2>
        <button className="downloadResume">
          <a href="https://res.cloudinary.com/dx3moxwcn/image/upload/v1563813632/SHIVAMSHARMA_InternshalaResume_tbok6y.pdf">
            Download Resume
          </a>
        </button>
      </div>
    );
  }
}

export default Resume;
