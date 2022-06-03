import axios from "axios";
import { useEffect, useState } from "react";


const useProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
      axios.get("https://power-tool.herokuapp.com/products").then((res) => {
        const data = res.data;
        setProducts(data);
      });
    }, [products]);
    return [products];
}

export default useProducts;