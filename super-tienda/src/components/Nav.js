import React from "react";
import "./styles/NavStyle.css";

function Nav() {
  return (
    <header>
      <div className="header-section">
        {/* Here u put your icon site like a company icon i mean rdy to use IwI */}
        <div className="header-search">
          <form action className="search-section">
            <div className="container-1">
              <a href="/">
                <span className="icon">
                  <i className="fa fa-search" />
                </span>
              </a>
              <input type="search" className="search" placeholder="Search..." />
            </div>
          </form>
          {/* Rdy */}
          <div className="acount">
            <ul className="ul-acount">
              <li>
                <a href="/">
                  <span className="material-symbols-outlined">menu</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <span className="material-symbols-outlined">
                    account_circle
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <hr className="header-breaker" /> */}
    </header>
  );
}
export default Nav;
