// import React from "react";
// import Contact from './../Pages/Contact';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="Nav">
      <Link to="/"> Kalvium</Link>
      <Link to="/about"> About</Link>
      <Link to="/contact"> Contact</Link>
    </div>
  );
}

export default Navbar;
