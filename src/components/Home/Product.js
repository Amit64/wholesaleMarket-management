import React from "react";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
 
  const { _id, name, img, description, price, quantity } = product;
  const navigate = useNavigate();
  const navigatePurchase = id =>{
   
      navigate(`/purchase/${id}`);
    
  }
  return (
    <div class="card card-compact bg-secondary shadow-xl">
      <figure class="px-10 pt-10">
        <img src={img} alt="Shoes" class="rounded-xl" />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">{name}</h2>
        <p className=" text-left">{description}</p>
        <p className="text-xl font-bold uppercase text-[#2e2727]"> Price : {price}</p>
        
        <div class="card-actions">
        <button class="btn  ">Available: {quantity}</button>
          <button onClick={()=>navigatePurchase(_id)} class="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
