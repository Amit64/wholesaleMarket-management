import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../hookes/useAdmin';

const DashBoard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
    return (
        <div className="drawer drawer-mobile ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content px-4">
        <h2 className="text-2xl font-bold text-primary text-center">
          Welcome to Dashboard
        </h2>
        <Outlet></Outlet>
        {/* <!-- Page content here --> */}
      </div>
      
      <div className="drawer-side">
        <label for="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-64 bg-secondary rounded-md text-base-content">
       
          {/* <!-- Sidebar content here --> */}
          <li>
            <NavLink to="/dashboard">My Profile</NavLink>
          </li>
          
          {
            !admin &&
            <>
            <li><NavLink to="/dashboard/review">Add A Review</NavLink></li>
            <li><NavLink to="/dashboard/myorder">My Orders</NavLink></li>
            </>
          }

          {
            admin &&
            <>
            <li><NavLink to="/dashboard/addproduct">Add Product</NavLink></li>
          <li><NavLink to="/dashboard/manageorders">Manage Order</NavLink></li>
          <li><NavLink to="/dashboard/manageproduct">Manage Product</NavLink></li>
          <li><NavLink to="/dashboard/makeadmin">Create Admin</NavLink></li>
            </>
          }
         
        </ul>
      </div>
    </div>
    );
};

export default DashBoard;