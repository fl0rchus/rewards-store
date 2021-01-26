import React, { useEffect, useState } from "react";
import { urlHistory, headers } from "../helpers/variables";
import HistoryComponent from "./HistoryComponent";
import PaginationComponent from "./PaginationComponent";

function HistoryContainer() {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(20);

  useEffect(() => {
    const fetchHistory = async () => {
      setLoading(true);
      const res = await fetch(urlHistory, { method: "GET", headers });
      const data = await res.json();
      setHistory(data);
      setLoading(false);
    };
    fetchHistory();
  }, []);

  //Current history
  const indexOfLastHistory = currentPage * itemsPerPage;
  const indexOfFirstHistory = indexOfLastHistory - itemsPerPage;
  const currentHistory = history.slice(indexOfFirstHistory, indexOfLastHistory);

  //Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container">
      <HistoryComponent history={currentHistory} loading={loading} />
      <PaginationComponent
        totalHistory={history.length}
        itemsPerPage={itemsPerPage}
        paginate={paginate}
      />
    </div>
  );
}
export default HistoryContainer;
