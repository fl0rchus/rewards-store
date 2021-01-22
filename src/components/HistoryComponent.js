import React from "react";
import { Spinner } from "./Spinner";

const HistoryComponent = ({ history, loading }) => {
  if (loading) {
    return <Spinner />;
  }
  return (
    <div className="container mt-5 mb-5">
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
};
export default HistoryComponent;
