import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Product from "./Product";

const FeatureProducts = () => {
  const navigate = useNavigate();
  const [fetProduct, setFetProduct] = useState([]);
  useEffect(() => {
    axios.get("https://power-tool.herokuapp.com/limit-product").then((res) => {
      const data = res.data;
      setFetProduct(data);
      console.log(data);
    });
  }, []);
  return (
    <section className="body-font">
      <h1 className="text-4xl text-center font-bold p-4 text-[#2b2c34]">Our Products</h1>
      <div className=" container py-24 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {fetProduct.map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureProducts;
