import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex mx-auto justify-between">
      <Link to="/" className="font-bold">TASK MANAGER</Link>
      <div>
        <NavLink className='px-2' to='/'>Tasks</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
