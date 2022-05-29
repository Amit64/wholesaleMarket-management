import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Product from "./Product";

const FeatureProducts = () => {
  const navigate = useNavigate();
  const [fetProduct, setFetProduct] = useState([]);
  useEffect(() => {
    axios.get("https://power-tools-30f6c.web.app/limit-product").then((res) => {
      const data = res.data;
      setFetProduct(data);
      console.log(data);
    });
  }, []);
  return (
    <section class="body-font mt-4">
      <h1 className="text-3xl text-center">Our Products</h1>
      <div class="container py-24 mx-auto">
        <div class="grid grid-cols-3 gap-4">
          {fetProduct.map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureProducts;
