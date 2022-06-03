import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import useProducts from "../hookes/useProduct";
import DeleteConfirmModal from "../Modal/DeleteConfirmModal";
import ProductRow from "./ProductRow";

const ManageProduct = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
      axios.get("https://power-tool.herokuapp.com/products").then((res) => {
        const data = res.data;
        setProducts(data);
      });
    }, [products]);

  return (
    <div>
      <h2>Manage Products</h2>
      <div class="overflow-x-auto w-full">
        <table class="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th className=" bg-[#E6E6E6]">Product</th>
              <th className=" bg-[#E6E6E6]">Quantity</th>
              <th className=" bg-[#E6E6E6]">
                Price <br />
                (per piece)
              </th>
              <th className=" bg-[#E6E6E6]">Delete</th>
              <th className=" bg-[#E6E6E6]"></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <ProductRow key={product._id} product={product}
              ></ProductRow>
            ))}
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProduct;
