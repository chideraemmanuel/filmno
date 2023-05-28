import { useContext } from "react";
import ThemeToggle from "../../../../components/themeToggle/ThemeToggle";
import User from "../../../../components/user/User";
import SideMenu from "../sideMenu/SideMenu";
import "./DesktopNavigation.scss";
import { FaTrash, FaSearch, FaUser } from "react-icons/fa";
import { FiUserPlus } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { searchContext } from "../../../../contexts/searchContext";

const isLoggedIn = false;

const DesktopNavigation = () => {
  const { isSearchActive, setIsSearchActive, searchTerm, setSearchTerm } =
    useContext(searchContext);

  const navigate = useNavigate();

  const clearSearchInput = () => {
    setSearchTerm("");
  };

  const handleSearchSubmit = (e?: React.FormEvent<HTMLFormElement>) => {
    if (searchTerm.length > 0) {
      e?.preventDefault();
      clearSearchInput();
      setIsSearchActive(false);
      // NAVIGATE TO SEARCH RESULTS PAGE
      navigate(`/search/${searchTerm}`);
    } else {
      return;
    }
  };

  return (
    <div className="desktop-navigation">
      <SideMenu />

      <div className="desktop-navigation__header">
        <ThemeToggle />

        <form
          className="desktop-navigation__header--search"
          onSubmit={(e) => handleSearchSubmit(e)}
        >
          <input
            type="text"
            placeholder="Search for movies"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FaSearch onClick={handleSearchSubmit} />
        </form>
        <User />
      </div>
    </div>
  );
};

export default DesktopNavigation;
