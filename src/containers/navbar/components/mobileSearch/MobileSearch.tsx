import "./MobileSearch.scss";
import { FaTrash, FaSearch, FaArrowLeft } from "react-icons/fa";

const MobileSearch = () => {
  return (
    <div className="mobile-search">
      <FaArrowLeft />

      <form className="mobile-search__form">
        <input type="text" placeholder="Search for movies" />
      </form>

      <FaSearch />
    </div>
  );
};

export default MobileSearch;
