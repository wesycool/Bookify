import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container navbar-brand">
      <Link className="navbar-brand" to="/" className={ window.location.pathname === "/" || window.location.pathname === "/landing"
                  ? "nav-link active"
                  : "nav-link"}>
        Spart
      </Link>
      </div>
      <div className="searchbar nav-item">
          <p> temp Search area here</p>
          {/* <SearchArea></SearchArea> */}
      </div>
        <div calssName="justify-content-end">
            <ul className="navbar-nav nav ml-auto">
            <li className="nav-item">
            <Link
                to="/discover"
                className={window.location.pathname === "/discover" ? "nav-link active" : "nav-link"}
                >
                Discover
                </Link>
            </li>
            <li className="nav-item">
                <Link
                to="/discover"
                className={window.location.pathname === "/discover" ? "nav-link active" : "nav-link"}
                >
                About Us
                </Link>
            </li>
            <li className="nav-item">
                <Link
                to="/search"
                className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
                >
                My Page
                </Link>
            </li>
            <li className="nav-item">
                <Link
                to="/Sign In"
                className={window.location.pathname === "/singup" ? "nav-link active" : "nav-link"}
                >
                <button type="button" className="btn btn-secondary">Sing Up</button>
                </Link>
            </li>
            <li className="nav-item">
                <Link
                to="/Sign In"
                className={window.location.pathname === "/singin" ? "nav-link active" : "nav-link"}
                >
                <button type="button" className="btn btn-secondary">Sing In</button>
                </Link>
            </li>
            </ul>
        </div>
    </nav>
  );
}

export default Navbar;
