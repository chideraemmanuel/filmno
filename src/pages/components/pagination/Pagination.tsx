import { useContext } from "react";
import "./Pagination.scss";
import { filterAndPaginationContext } from "../../../contexts/filterAndPaginationContext";

const Pagination = () => {
  const { pageNumber, setPageNumber } = useContext(filterAndPaginationContext);

  return (
    <div className="pagination">
      <button
        disabled={pageNumber === 1}
        className="pagination__previous"
        onClick={() => setPageNumber(pageNumber - 1)}
      >
        Previous page
      </button>
      <span className="pagination__page">{pageNumber}</span>
      <button
        className="pagination__next"
        onClick={() => setPageNumber(pageNumber + 1)}
      >
        Next page
      </button>
    </div>
  );
};

export default Pagination;
