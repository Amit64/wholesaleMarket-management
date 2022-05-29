import React from 'react';

const Product = ({product}) => {
    const { _id, name, img, description, price,quantity} = product;
    return (
        <div>
            <div class="card w-96 bg-secondary shadow-xl">
  <figure class="px-10 pt-10">
    <img src={img} alt="Shoes" class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">{name}</h2>
    <p className='text-xl text-[#e45858]'> Price : {price}</p>
    <p>{description}</p>
    <div class="card-actions">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Product;