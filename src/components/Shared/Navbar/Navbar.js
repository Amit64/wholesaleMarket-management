import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import auth from "../../../firebase.init";

const Navbar = () => {
    const [user] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
      };
  const menu = (
    <>
      <li> <NavLink to="/">Home</NavLink></li>
      <li> <NavLink to="/products">Product</NavLink></li>
      <li> <NavLink to="/blog">Blog</NavLink></li>
      <li> <NavLink to="/portfolio">My portfolio</NavLink></li>
      {
          user &&  <li><NavLink to="/dashboard ">DashBoard</NavLink></li>
        }
      <li>
        {user ? (
          <button className="btn btn-ghost" onClick={logout}>
            Sign Out
          </button>
        ) : (
          <NavLink to="/login">Login</NavLink> 
        )}
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
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
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menu}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            Power Tools
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-2">
            {menu}
            <li>
              <label
                for="my-drawer-2"
                class="btn btn-primary drawer-button lg:hidden"
              >
                Open drawer
              </label>
            </li>
          </ul>
        </div>
        <div className='"navbar-end'>
          <label
            tabIndex="1"
            for="my-drawer-2"
            class="btn btn-primary drawer-button lg:hidden"
          >
            {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg> */}
            <p className="scale-125 text-2xl">D</p>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
