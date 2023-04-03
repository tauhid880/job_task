import React from "react";
import Logo from "../../assets/Group 36901.png";
import { HashLink as Link } from "react-router-hash-link";
const Navbar = () => {
  return (
    <div className="mt-3">
      <div className="navbar bg-base-100 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a href="">Our Offerings</a>
              </li>
              <li>
                <a>Our Team</a>
              </li>
              <li>
                <a>Contact Us</a>
              </li>
              <li>
                <a href="">Blogs</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">
            <img src={Logo} alt="" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="#home" smooth>
                Home
              </Link>
            </li>
            <li>
              <Link to="#ourofferings" smooth>
                Our Offerings
              </Link>
            </li>
            <li>
              <Link to="#team" smooth>
                Our Team
              </Link>
            </li>
            <li>
              <Link to="#contact" smooth>
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="#blog" smooth>
                Blogs
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-[#002550]">Register Now</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
