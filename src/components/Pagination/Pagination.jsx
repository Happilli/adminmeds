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
    <div className="flex justify-between items-center pt-5 mt-6 border-t border-outline-variant">
      <div className="text-sm text-on-surface-variant">
        Showing <strong className="text-on-surface">{startItem}-{endItem}</strong> of{" "}
        <strong className="text-on-surface">{totalItems}</strong> results
      </div>

      <div className="flex items-center gap-4">
        <button
          className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-outline-variant text-sm font-medium text-on-surface-variant hover:border-primary hover:text-primary transition-colors disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:border-outline-variant disabled:hover:text-on-surface-variant min-w-30 justify-center"
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
        >
          <CaretLeftIcon size={20} />
          Previous
        </button>

        <div className="flex gap-2">
          {pages.map((page) => (
            <button
              key={page}
              className={`w-10 h-10 rounded-xl text-sm font-semibold border transition-colors ${currentPage === page
                  ? "bg-primary border-primary text-on-primary"
                  : "border-outline-variant text-on-surface-variant hover:bg-surface-container-high"
                }`}
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          ))}
        </div>

        <button
          className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-outline-variant text-sm font-medium text-on-surface-variant hover:border-primary hover:text-primary transition-colors disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:border-outline-variant disabled:hover:text-on-surface-variant min-w-30 justify-center"
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