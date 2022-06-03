import React from 'react';
import DeleteConfirmModal from '../Modal/DeleteConfirmModal';

const ProductRow = ({product,handleDelete}) => {
    // console.log('from productrow',product);
    const {_id,name,img,price,quantity,description} = product;
    return (
<tr >
        
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className=" w-24 rounded">
                <img src={img} alt="product" />
              </div>
            </div>
          </div>
        </td>
        <td>
        <div className="font-bold">{name}</div>
          <br/>
          <div className="text-sm opacity-50">PID:{_id}</div>
          
        </td>
        <td>{quantity}</td>
        <td>{price}</td>
        
        <td>
        <label htmlFor="my-modal-6" className="btn modal-button">Delete</label>
        {
          product &&  <DeleteConfirmModal id={product._id}></DeleteConfirmModal>
            }
        </td>
      </tr>
      
    );
};

export default ProductRow;