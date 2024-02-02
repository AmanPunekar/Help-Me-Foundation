import React from "react";

function Header() {
  return (
    <>
      <header>
        <div className="center-align">
          <nav>
            <div className="logo">
              <img src="../public/logo.png" alt="logo" />
            </div>
            <div className="navbar">
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Causes</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Gallery</a>
                </li>
                <li>
                  <a href="#">Contact</a>
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
