// src/components/Navbar.js
import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">Dhinesh Supply App</h1>
      <div className="nav-links">
        <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
          Dashboard
        </NavLink>
        <NavLink to="/deliveries" className={({ isActive }) => (isActive ? "active" : "")}>
          Deliveries
        </NavLink>
        <NavLink to="/sales" className={({ isActive }) => (isActive ? "active" : "")}>
          Sales
        </NavLink>
        <NavLink to="/reports" className={({ isActive }) => (isActive ? "active" : "")}>
          Reports
        </NavLink>
        <NavLink to="/inventory" className={({ isActive }) => (isActive ? "active" : "")}> {/* ✅ new */}
          Inventory
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
