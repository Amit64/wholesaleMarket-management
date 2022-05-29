import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Product from './Product';

const FeatureProducts = () => {
    const navigate = useNavigate();
    const [fetProduct,setFetProduct] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:3005/limit-product')
        .then(res=>{
            const data = res.data;
            setFetProduct(data);
            console.log(data);
        })
    },[])
    return (
        <section class="text-gray-600 body-font mt-4">
            <h1 className='text-3xl text-center'>Our Products</h1>
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">
    {
        fetProduct.map(product=><Product
            key={product._id}
            product={product}
            
        ></Product>)
    }
    </div>
  </div>
</section>
    );
};

export default FeatureProducts;