import React from "react";
import { HeaderTitle } from "../components/HeaderTitle";
import { Header } from "../components/Header";
import ProductContainer from "../components/ProductContainer";

const pageHome = () => {
  return (
    <div>
      <Header />
      <HeaderTitle />
      <ProductContainer />
    </div>
  );
};
export default pageHome;
