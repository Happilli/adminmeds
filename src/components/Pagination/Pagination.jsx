import "./Pagination.css";

import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react";

function Pagination({ currentPage, totalPages, pageSize, totalItems, onPageChange }) {
  if (totalPages <= 1) return null;

  const startItem = (currentPage - 1) * pageSize + 1;
  const endItem = Math.min(currentPage * pageSize, totalItems);

  let startPage = Math.max(currentPage - 2, 1);
  let endPage = startPage + 4;

  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(endPage - 4, 1);
  }

  const pages = [];
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return (
    <div className="pagination-container">
      <div className="pagination-info">
        Showing <strong>{startItem}-{endItem}</strong> of{" "}
        <strong>{totalItems}</strong> appointments
      </div>

      <div className="pagination-controls">
        <button
          className="pagination-nav"
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
        >
          <CaretLeftIcon size={20} />
          Previous
        </button>

        <div className="pagination-pages">
          {pages.map((page) => (
            <button
              key={page}
              className={`page-btn ${currentPage === page ? "active" : ""}`}
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          ))}
        </div>

        <button
          className="pagination-nav"
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
        >
          Next
          <CaretRightIcon size={20} />
        </button>
      </div>
    </div>
  );
}

export default Pagination;
