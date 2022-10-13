import React, { Component } from "react";
import "./style.css";

class Contact extends Component {
  state = {};

  componentDidMount() {}

  render() {
    return (
      <div id="contactBody">
        <div className="container w-75" id="contactContent">
          <div className="row">
            <div className="col-12 contactLine">
              <p>Feel free to contact me</p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 contactLine">
              <p></p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 contactLine">
              <p>for any work opportunities</p>
            </div>
          </div>
          <div className="row">
            <div className="col-8 email">
              <p> chloezhouny@gmail.com </p>
            </div>
          </div>
          <div className="row contactLink">
            <div className="col-12">
              <div className="row d-flex justify-content-center">
                <div className="col-1 linkwrapper">
                  <p>
                    {" "}
                    <a href="https://www.linkedin.com/in/chloeezhou/">
                      {" "}
                      LinkedIn.{" "}
                    </a>{" "}
                  </p>
                </div>
                <div className="col-1 linkwrapper">
                  <p>
                    {" "}
                    <a href="https://github.com/chloezhouny">Github.</a>{" "}
                  </p>
                </div>
                <div className="col-1 linkwrapper">
                  <p>
                    {" "}
                    <a href="https://medium.com/@chloezhouny">Medium</a>{" "}
                  </p>
                </div>
                <div className="col-1 linkwrapper">
                  <p>
                    {" "}
                    <a href="https://www.instagram.com/zhouzhouchlo/">
                      Instagram
                    </a>{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
