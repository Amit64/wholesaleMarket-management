import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Order from './Order';

const MyOrders = () => {
    const [orders,setOrders]= useState([]);
    const [user] = useAuthState(auth);
    useEffect(()=>{
        const url = `https://power-tools-30f6c.web.app/order?user=${user.email}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setOrders(data))
    },[orders])
    return (
        <div>
            <h2>my orders</h2>
            <div class="overflow-x-auto w-full">
  <table class="table w-full">
    {/* <!-- head --> */}
    <thead>
      <tr>
        <th>Product</th>
        <th>Address</th>
        <th>Quantity</th>
        <th>Total Price</th>
        <th>Pay</th>
        <th>Cancel</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      
      {
          orders.map(order=><Order
            key={order._id}
            order={order}
          ></Order>)
      }
      

     
    </tbody>

   
    
  </table>
</div>
        </div>
    );
};

export default MyOrders;