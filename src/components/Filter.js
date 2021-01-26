import React, { useContext } from "react";
import { userContext } from "../App";

const Filter = () => {
  const { productsList, setCategory } = useContext(userContext);

  return (
    <>
      <div className="container mt-5">
        <div className="form-group" style={{ width: "20%" }}>
          <label className="font-weight-bold">Filter by category:</label>
          <select
            className="custom-select custom-select-sm form-control"
            name="category"
            value={productsList.category}
            onChange={(e) => {
              const value = e.target.value;
              setCategory({ ...productsList, [e.target.name]: value });
            }}
          >
            <option value="">Select category</option>
            {[...new Set(productsList.map((e) => e.category))]
              .sort()
              .map((item, index) => (
                <option key={`${item}-${index}`} value={item}>
                  {item}
                </option>
              ))}
          </select>
        </div>
        <hr />
      </div>
    </>
  );
};

export default Filter;
