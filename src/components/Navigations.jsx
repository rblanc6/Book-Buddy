/* TODO - add your code to create a functional React component that renders a navigation bar for the different views in your single page application. You may consider conditionally rendering some options - for example 'Login' should be available if someone has not logged in yet. */
import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import Register from "./Register/Register";
import { Navigate } from "react-router-dom";
export default function NavBar() {
  const auth = (state) => {
    localStorage.getItem("token");
  };
  //   const logout = () => {
  //     localStorage.removeItem("token");
  //     // Navigate("/");
  //   };
  return (
    <div>
      <nav className="navbar">
        {!auth && (
          <ul>
            <li>
              <NavLink to="/" activeClassName="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/register" activeClassName="active">
                Register
              </NavLink>
            </li>
            <li>
              <NavLink to="/login" activeClassName="active">
                Login
              </NavLink>
            </li>
          </ul>
        )}
        {auth && (
          <ul>
            <li>
              <NavLink to="/" activeClassName="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/register" activeClassName="active">
                Register
              </NavLink>
            </li>
            <li>
              <NavLink to="/login" activeClassName="active">
                Login
              </NavLink>
            </li>
            <li>
              <NavLink to="/account" activeClassName="active">
                Account
              </NavLink>
            </li>
            {/* <NavLink to="/">
              <button onClick={logout}>Logout</button>
            </NavLink> */}
          </ul>
        )}
      </nav>
    </div>
  );
}
