import axios from 'axios';
import React, { useEffect } from 'react';
import { toast } from 'react-toastify';

const Order = ({order}) => {
    const {OrderId,product,quantity,user,userName,address,price,img}=order;
   
    const handleDelete = id =>{
        const url = `https://power-tools-30f6c.web.app/delete-order?OrderId=${id}`;
        axios.delete(url)
        .then(response => toast.error('Delete successful'))
    }
    return (
        <tr>
        
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={img} alt="product" />
              </div>
            </div>
            <div>
              <div className="font-bold">{product}</div>
              <div className="text-sm opacity-50">PID:{OrderId}</div>
            </div>
          </div>
        </td>
        <td>
          {userName}
          <br/>
          {user}
          <br />
          <span className="badge badge-ghost badge-sm">{address}</span>
        </td>
        <td>{quantity}</td>
        <td>{price}</td>
        <td><button className="btn btn-ghost btn-xs">Pay</button></td>
        <td>
          <button onClick={()=>handleDelete(OrderId)} className="btn btn-ghost btn-xs">Cancel</button>
        </td>
      </tr>
    );
};

export default Order;