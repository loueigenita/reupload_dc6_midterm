import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
    <div className="container shadow" style={{ color: 'white', backgroundColor: 'black', borderRadius: '8px'}}>
      <h1 className="text-light ">MDC VENUE</h1>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item px-5">
              <a href="/" className="nav-link"style={{ color: 'white', backgroundColor: 'blue', borderRadius: '8px'}}>HOME</a>
            </li>
          </ul>
            <Link className="btn btn-outline-primary text-light shadow" to="/venues">Add Venues</Link>
      </div>
    </nav>
  );
};
export default Navbar;