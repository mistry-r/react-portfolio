import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink 
            to="/" 
            end 
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/career" 
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Career
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
