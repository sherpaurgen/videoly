import React from "react";
//change class to functional component notice the props passed to function
export default function navbar(props) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        <span className="badge badge-pill badge-secondary">
          {props.totalCounters} Navbar
        </span>
      </a>
    </nav>
  );
}
