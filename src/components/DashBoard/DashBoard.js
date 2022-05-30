import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const DashBoard = () => {
    return (
        <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <h2 className="text-3xl font-bold text-secondary">
          Welcome to Dashboard
        </h2>
        <Outlet></Outlet>
        {/* <!-- Page content here --> */}
      </div>
      <div className="drawer-side">
        <label for="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <NavLink to="/dashboard">My Orders</NavLink>
          </li>
          <li><NavLink to="/dashboard/review">Add A Review</NavLink></li>
          <li><NavLink to="/dashboard/profile">My Profile</NavLink></li>
         
        </ul>
      </div>
    </div>
    );
};

export default DashBoard;