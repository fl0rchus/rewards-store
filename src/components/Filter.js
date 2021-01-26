import React, { useContext } from "react";
import { userContext } from "../App";

const Filter = ({ products }) => {
  return (
    <div>
      <button>Lower Price</button>
      <button>Highest Price</button>
    </div>
  );
};

export default Filter;
