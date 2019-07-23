import React, { Component } from "react";
import "./footer.css";

class Footer extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="footerHeading">
          <h1>Let's Get In Touch!</h1>
        </div>
        <div className="footerFooter">
          <a href="https://www.linkedin.com/in/shivam-sharma-20a744184/">
            <i
              className="fa fa-linkedin-square"
              id="linkedin"
              aria-hidden="true"
            />
          </a>
          <a href="mailto:shivamhc005@gmail.com">
            <i className="fa fa-envelope" id="gmail" aria-hidden="true" />
          </a>
          <a href="https://github.com/Shivamhc">
            <i className="fa fa-github" id="github" aria-hidden="true" />
          </a>
        </div>
        <div className="copyright">Copyright &#169; ss Portfolio2019</div>
      </React.Fragment>
    );
  }
}

export default Footer;
