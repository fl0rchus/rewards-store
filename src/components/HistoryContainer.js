import React, { useEffect, useState } from "react";
import getHistory from "../helpers/getHistory";
import usePagination from "../hooks/usePagination";

function HistoryContainer() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    getHistory().then((data) => setHistory(data));
  }, []);

  return (
    <div className="container mt-5">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Product name</th>
            <th scope="col">Cost</th>
          </tr>
        </thead>
        <tbody>
          {history.map((item) => {
            return (
              <tr scope="row">
                <td>{item.productId}</td>
                <td>{item.name}</td>
                <td>{item.cost}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default HistoryContainer;
