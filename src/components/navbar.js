import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">
          Question and Answer
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/" className="nav-link">
                Questions
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/create-question" className="nav-link">
                Create Question
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
