import React, { Component } from "react";
class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          navbar <span className="badge badge-pill">{this.props.counter}</span>
        </a>
      </nav>
    );
  }
}

export default NavBar;
