import React from "react";
import { NavLink, Link } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-secondary ubuntu mb-4">
      <div className="container">
        <Link to="/" className="fs-3 navbar-brand">
          <span className="text-light">Rick and Morty</span>{" "}
          <span className="text-info">ReactJS</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav fs-5">
            <NavLink
              to="/"
              className={`${(navData) =>
                navData.isActive ? "active" : "none"} nav-link text-light`}
            >
              Characters
            </NavLink>
            <NavLink
              to="/about"
              className={`${(navData) =>
                navData.isActive ? "active" : "none"} nav-link text-light`}
            >
              About
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
