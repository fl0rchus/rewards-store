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

  //Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  //Current product
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  let filteredProducts = [];

  productsList.forEach((item) => {
    if (category.category == "" ? true : category.category == item.category) {
      filteredProducts.push(item);
    }
  });

  const cards = filteredProducts.map((item, index) => {
    return <Product data={currentProducts} loading={loading} key={index} />;
  });

  return (
    <>
      <div className="container">
        {<Product data={currentProducts} loading={loading} />}
        {/* {filteredProducts.length !== 0 ? cards : null} */}
        <hr />
      </div>
      <PaginationComponent
        totalHistory={productsList.length}
        itemsPerPage={itemsPerPage}
        paginate={paginate}
      />
    </>
  );
}
