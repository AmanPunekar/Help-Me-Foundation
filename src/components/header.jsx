import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
function Header() {
  return (
    <>
      <header>
        <div className="center-align">
          <nav>
            <div className="logo">
              <NavLink to="/">
                <img src="../public/logo.png" alt="logo" />
              </NavLink>
            </div>
            <div className="navbar">
              <ul>
                <li>
                  <NavLink
                    to="/"
                    exact
                    activeClassName="active"
                    className="nav-link"
                  >
                    Home
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/causes"
                    exact
                    activeClassName="active"
                    className="nav-link"
                  >
                    Causes
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/blog"
                    exact
                    activeClassName="active"
                    className="nav-link"
                  >
                    Blog
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/gallery"
                    exact
                    activeClassName="active"
                    className="nav-link"
                  >
                    Gallery
                  </NavLink>
                </li>
                {/* <li>
                  <NavLink
                    to="/about"
                    exact
                    activeClassName="active"
                    className="nav-link"
                  >
                    About
                  </NavLink>
                </li> */}
                <li>
                  <NavLink
                    to="/contact"
                    exact
                    activeClassName="active"
                    className="nav-link"
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
