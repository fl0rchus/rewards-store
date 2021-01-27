import React from "react";

const PaginationComponent = ({ itemsPerPage, totalHistory, paginate }) => {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalHistory / itemsPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <nav style={{ marginTop: "2rem" }}>
      <ul className="pagination d-flex flex-wrap justify-content-center">
        {pageNumber.map((number) => {
          return (
            <li key={number} className="page-item mb-1 mr-1">
              <button
                type="button"
                className="page-link bg-light text-dark font-weight-bold"
                onClick={() => paginate(number)}
              >
                {number}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default PaginationComponent;
