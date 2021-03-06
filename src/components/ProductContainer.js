import React, { useContext, useEffect, useState } from "react";
import { urlProducts, headers } from "../helpers/variables";
import { Product } from "./Product";
import PaginationComponent from "./PaginationComponent";
import { userContext } from "../App";

export default function ProductContainer() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(16);
  const { setProductsList, productsList, category } = useContext(userContext);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const res = await fetch(urlProducts, { method: "GET", headers });
      const data = await res.json();
      setProducts(data);
      setLoading(false);
      setProductsList(data);
    };
    fetchProducts();
  }, []);

  //Current product
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;

  let filteredProducts = [];

  productsList.forEach((item) => {
    if (category.category == "" ? true : category.category == item.category) {
      filteredProducts.push(item);
    }
  });

  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  //Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const MAX_PAGE = Math.ceil(filteredProducts.length / itemsPerPage);
  if (filteredProducts.length && currentPage > MAX_PAGE) paginate(MAX_PAGE);

  return (
    <div className="container animate__animated animate__backInUp">
      <div
        className="container "
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          justifyContent: "center",
        }}
      >
        {currentProducts.map((item, index) => {
          return (
            <Product data={item} key={`${item}-${index}`} loading={loading} />
          );
        })}
      </div>
      <hr />
      <PaginationComponent
        totalHistory={filteredProducts.length}
        itemsPerPage={itemsPerPage}
        paginate={paginate}
      />
    </div>
  );
}
