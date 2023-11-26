import React, { useState } from "react";
import logo from "../assets/Logo.svg";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="px-10 xl:px-40 py-4 text-green font-bold flex items-center ">
      <img src={logo} alt="Nav logo"></img>
      <div className="container mx-auto">
        <div className="justify-end hidden md:flex md:items-center">
          <ul className="flex md:space-x-4 lg:space-x-8 ">
            <li>
              <NavLink to="/" className="">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/menu">Menu</NavLink>
            </li>
            <li>
              <NavLink to="/reservation" className="">
                Reservations
              </NavLink>
            </li>
            <li>
              <NavLink to="/order">Order</NavLink>
            </li>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          </ul>
        </div>
        <div className="md:hidden flex justify-end items-center">
          <button
            onClick={toggleMenu}
            className="outline-none focus:outline-none"
          >
            <svg
              className="h-6 w-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {showMenu ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
        {showMenu && (
          <ul className="md:hidden justify-end flex flex-col items-center mt-4">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/menu">Menu</NavLink>
            </li>
            <li>
              <NavLink to="/reservation">Reservations</NavLink>
            </li>
            <li>
              <NavLink to="/order">Order</NavLink>
            </li>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Nav;
