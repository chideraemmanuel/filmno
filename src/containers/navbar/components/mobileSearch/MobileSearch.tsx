import { useContext } from "react";
import "./MobileSearch.scss";
import { FaTrash, FaSearch, FaArrowLeft } from "react-icons/fa";
import { searchContext } from "../../../../contexts/searchContext";

const MobileSearch = () => {
  const { isSearchActive, setIsSearchActive } = useContext(searchContext);

  return (
    <div className="mobile-search">
      <FaArrowLeft onClick={() => setIsSearchActive(false)} />

      <form className="mobile-search__form">
        <input type="text" placeholder="Search for movies" autoFocus />
      </form>

      <FaSearch />
    </div>
  );
};

export default MobileSearch;
