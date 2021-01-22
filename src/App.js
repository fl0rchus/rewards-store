import { Router } from "@reach/router";
import React, { createContext, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { HeaderTitle } from "./components/HeaderTitle";
import ProductCointainer from "./components/ProductContainer";
import History from "./pages/History";
import Home from "./pages/Home";

export const userContext = createContext();

function App() {
  const [userName, setUserName] = useState("");
  const [userPoints, setUserPoints] = useState("");
  const [idProduct, setIdProduct] = useState("");

  return (
    <userContext.Provider
      value={{
        userName,
        setUserName,
        userPoints,
        setUserPoints,
        idProduct,
        setIdProduct,
      }}
    >
      {/* <Header />
      <HeaderTitle />
      <ProductCointainer /> */}
      <Router>
        <History path="/redeem-history" />
        <Home path="/" />
      </Router>
    </userContext.Provider>
  );
}

export default App;
