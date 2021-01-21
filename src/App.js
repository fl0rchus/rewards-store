import React, { createContext, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { HeaderTitle } from "./components/HeaderTitle";
import ProductCointainer from "./components/ProductContainer";

export const userContext = createContext();

function App() {
  const [userName, setUserName] = useState("");
  const [userPoints, setUserPoints] = useState("");

  return (
    <userContext.Provider
      value={{ userName, setUserName, userPoints, setUserPoints }}
    >
      <Header />
      <HeaderTitle />
      <ProductCointainer />
    </userContext.Provider>
  );
}

export default App;
