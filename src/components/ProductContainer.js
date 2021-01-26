import React, { useContext, useEffect, useState } from "react";
import { urlProducts, headers } from "../helpers/variables";
import { Product } from "./Product";
import PaginationComponent from "./PaginationComponent";
import { userContext } from "../App";
import Filter from "./Filter";

export default function ProductContainer() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(16);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const res = await fetch(urlProducts, { method: "GET", headers });
      const data = await res.json();
      setProducts(data);
      setLoading(false);
    };
    fetchProducts();
  }, []);

  //Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  //Current product
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  return (
    <>
      <div className="container">
        <Product data={currentProducts} loading={loading} />
        <hr />
        <PaginationComponent
          totalHistory={products.length}
          itemsPerPage={itemsPerPage}
          paginate={paginate}
        />
      </div>
    </>
  );
}
