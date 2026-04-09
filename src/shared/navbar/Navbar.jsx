import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <li className="space-x-3">
        <NavLink
          className={({ isActive }) =>
            isActive ? "btn btn-outline btn-success" : "btn btn-ghost"
          }
          to={"/"}
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "btn btn-outline btn-success" : "btn btn-ghost"
          }
          to={"/books"}
        >
          Listed Books
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "btn btn-outline btn-success" : "btn btn-ghost"
          }
          to={"/page-to-read"}
        >
          Page to Read
        </NavLink>
      </li>
    </>
  );

  return (
    <nav className="bg-base-100 shadow-sm my-10 ">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link to={'/'} className="font-bold text-2xl">Book Vibe</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="">{links}</ul>
        </div>
        <div className="navbar-end gap-2">
          <a className="btn btn-info text-white">Sign in</a>
          <a className="btn btn-success text-white">Sign Up</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
