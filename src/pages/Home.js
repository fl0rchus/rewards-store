import React from "react";
import { HeaderTitle } from "../components/HeaderTitle";
import Header from "../components/Header";
import ProductContainer from "../components/ProductContainer";

const Home = () => {
  return (
    <>
      <Header />
      <HeaderTitle subtitle="Electronics" />
      <ProductContainer />
    </>
  );
};
export default Home;
