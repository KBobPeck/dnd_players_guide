import React, { useEffect } from "react";
import logo from "../util/images/DnDlogo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <img src={logo} alt="logo" />
      </Link>

      <div className="path">
        <h2></h2>
      </div>
    </nav>
  );
};

export default Navbar;
