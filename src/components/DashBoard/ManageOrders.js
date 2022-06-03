import React, { useEffect, useState } from 'react';
import OrderRow from './OrderRow';


const ManageOrders = () => {
    const [allOrders,setAllOrders]= useState([]);
    
    useEffect(()=>{
        const url = 'https://power-tools-30f6c.web.app/all-orders'
        fetch(url)
        .then(res=>res.json())
        .then(data=>setAllOrders(data))
    },[allOrders])
    return (
        <div>
            <h2>my orders</h2>
            <div class="overflow-x-auto w-full">
  <table class="table w-full">
    {/* <!-- head --> */}
    <thead>
      <tr>
        <th>Product</th>
        <th>Customar</th>
        <th>Quantity</th>
        <th>Total Price</th>
        <th>Payment</th>
        <th>Delivary</th>
        <th>Cancel</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      
      {
          allOrders.map(order=><OrderRow
            key={order._id}
            order={order}
          ></OrderRow>)
      }
      

     
    </tbody>

   
    
  </table>
</div>
        </div>
        
    );
};

export default ManageOrders;