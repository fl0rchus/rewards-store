import React, { useEffect, useState } from "react";
import getProducts from "../helpers/getProducts";
import { Product } from "./Product";

export default function ProductContainer() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
      console.log(products);
    });
  }, []);

  return (
    <div className="cards-container">
      {products.map((product, index) => {
        return <Product {...product} key={index} />;
      })}
    </div>
  );
}
