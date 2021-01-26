import { Router } from "@reach/router";
import React, { createContext, useState } from "react";
import "./App.css";
import History from "./pages/History";
import Home from "./pages/Home";

export const userContext = createContext();

function App() {
  const [userName, setUserName] = useState("");
  const [userPoints, setUserPoints] = useState("");
  const [categories, setCategories] = useState([]);

  return (
    <userContext.Provider
      value={{
        userName,
        setUserName,
        userPoints,
        setUserPoints,
        categories,
        setCategories,
      }}
    >
      <Router>
        <History path="/redeem-history" />
        <Home path="/" />
      </Router>
    </userContext.Provider>
  );
}

export default App;
