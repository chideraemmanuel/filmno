import { useContext } from "react";
import "./MobileSearch.scss";
import { FaSearch, FaArrowLeft } from "react-icons/fa";
import { searchContext } from "../../../../contexts/searchContext";
import { useNavigate } from "react-router-dom";

const MobileSearch = () => {
  const { setIsSearchActive, searchTerm, setSearchTerm } =
    useContext(searchContext);

  const navigate = useNavigate();

  const clearSearchInput = () => {
    setSearchTerm("");
  };

  const handleSearchSubmit = (e?: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();

    if (searchTerm.length > 0) {
      clearSearchInput();
      setIsSearchActive(false);
      // NAVIGATE TO SEARCH RESULTS PAGE
      navigate(`/search/${searchTerm}`);
    } else {
      return;
    }
  };

  return (
    <div className="mobile-search">
      <FaArrowLeft onClick={() => setIsSearchActive(false)} />

      <form
        className="mobile-search__form"
        onSubmit={(e) => handleSearchSubmit(e)}
      >
        <input
          type="text"
          placeholder="Search for movies"
          autoFocus
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>

      <FaSearch onClick={handleSearchSubmit} />
    </div>
  );
};

export default MobileSearch;
