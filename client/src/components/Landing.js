import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div className="container text-center  mt-15">
        <div className="row">
          <div className="col-sm-12 ">
            <h1>
              Introducting, the one-stop Portfolio Network :  {" "}
              <span style={{ fontFamily: "sans-serif" }}>cPortfolio</span>
            </h1>
            <p><i>Showcase your your own personalised projects, achievements, journals and other interesting 
                documentation that truly shows your potential directly to employers, researchers, academic 
                and non academic coordinators.</i></p>
            </div>
            </div>
            <div className="row mt-4">
            <div className="col-sm-12">
              <Link
                to="/register"
                className="btn btn-large btn-dark hoverable"
              >
                Register
              </Link>
              <Link
                to="/login"
                className="btn btn-large btn-light hoverable ml-5"
              >
                Log In
              </Link>
            </div>
           
          </div>
        </div>
      
    );
  }
}
export default Landing;