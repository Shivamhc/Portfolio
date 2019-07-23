import React, { Component } from "react";
import "./strength.css";

class Strength extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="strengthHeading">My Strengths</div>
        <div className="row">
          <div className="columnStr">
            <i class="fa fa-book " id="icon" aria-hidden="true" />
            <br />
            <div className="fontHeadings">Frameworks & Libraries</div>
            <div className="fontAbout">HTML, CSS, Bootstrap, Reactjs.</div>
          </div>

          <div className="columnStr">
            <i class="fa fa-code" id="icon" aria-hidden="true" />
            <br />
            <div className="fontHeadings">Coding Skills</div>
            <div className="fontAbout">C, C++, Javascript, Python, Sql.</div>
          </div>
        </div>
        <div className="row">
          <div className="columnStr">
            <i class="fa fa-calendar" id="icon" aria-hidden="true" />
            <br />
            <div className="fontHeadings">Up To Date</div>

            <div className="fontAbout">
              <a href="https://res.cloudinary.com/dx3moxwcn/image/upload/v1563805303/CoI_Shivam_nog0ed.pdf">
                Internship Program
              </a>
            </div>
          </div>

          <div className="columnStr">
            <i class="fa fa-code-fork" id="icon" aria-hidden="true" />
            <div className="fontHeadings">My Work</div>

            <div className="fontAbout">
              <a href="https://shivamhc.github.io/Home-Page/">
                Project Details
              </a>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Strength;
