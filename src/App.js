import React from "react";
import "./App.css";
import Header from "./components/Header";
import { HeaderTitle } from "./components/HeaderTitle";
import ProductCointainer from "./components/ProductContainer";

function App() {
  return (
    <div>
      <Header />
      <HeaderTitle />
      <ProductCointainer />
    </div>
  );
}

export default App;
