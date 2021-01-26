import React from "react";
import { HeaderTitle } from "../components/HeaderTitle";
import Header from "../components/Header";
import ProductContainer from "../components/ProductContainer";
import Filter from "../components/Filter";

const Home = () => {
  return (
    <>
      <Header />
      <HeaderTitle subtitle="Electronics" />
      <Filter />
      <ProductContainer />
    </>
  );
};
export default Home;
