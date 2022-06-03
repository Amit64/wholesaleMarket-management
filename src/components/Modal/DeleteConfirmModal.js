import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const DeleteConfirmModal = ({id}) => {
    
   // console.log(id);
    const handleDelete = id =>{
        const url = `https://power-tools-30f6c.web.app/delete-product/${id}`;
        axios.delete(url)
        .then(response => toast.error('Delete successful'))
    }
  return (
    <div className=" z-10">
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-center text-error">
            WARNING !!!
          </h3>
          <p className="py-4 text-center">
            Please Confirm to Delete this product !
          </p>
          <div className="modal-action flex justify-center gap-x-4">
          <label onClick={()=>handleDelete(id)} for="my-modal-6" className="btn btn-error">Yes</label>
          <label for="my-modal-6" className="btn btn-error">No</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
