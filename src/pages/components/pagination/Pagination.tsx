import { PaginationPropTypes } from "../../../utilities/componentsTypes";
import "./Pagination.scss";

const Pagination = ({ pageNumber, setPageNumber }: PaginationPropTypes) => {
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
