import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex mx-auto justify-between">
      <Link to="/" className="font-bold">TASK MANAGER</Link>
      <div>
        <NavLink className='px-2' to='/'>Manage Tasks</NavLink>
        <NavLink className='px-2' to='/create-task'>Create Task</NavLink>
        <NavLink className='px-2'to='/contact'>Contact</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
