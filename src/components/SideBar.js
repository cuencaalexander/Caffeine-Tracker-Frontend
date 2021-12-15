import React from "react";

import { Link } from "react-router-dom";

const isActive = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#ff9900" };
  } else {
    return { color: "#ffffff" };
  }
};

function SideBar() {
  return (
    <>
      <nav>
        <ul className="nav nav-tabs bg-primary">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="users">Users</Link>
          </li>
          <li className="nav-item-danger">
            <Link className="nav-link" to="post_drink">
              Post-Drink
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default SideBar;
