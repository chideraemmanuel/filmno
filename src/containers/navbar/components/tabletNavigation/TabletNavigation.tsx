import { useContext } from "react";
import Logo from "../../../../components/logo/Logo";
import ThemeToggle from "../../../../components/themeToggle/ThemeToggle";
import "./TabletNavigation.scss";
import { FaTrash, FaSearch, FaUser } from "react-icons/fa";
import { RiMenu4Fill, RiMenu4Line } from "react-icons/ri";
import { FiUserPlus } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import MobileMenu from "../mobileMenu/MobileMenu";
import { mobileMenuContext } from "../../../../contexts/mobileMenuContext";
import User from "../../../../components/user/User";
import { searchContext } from "../../../../contexts/searchContext";

const isLoggedIn = false;

const TabletNavigation = () => {
  const { isMenuOpen, setIsMenuOpen } = useContext(mobileMenuContext);
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
    <div className="tablet-navigation">
      <MobileMenu />

      <div className="tablet-navigation__header">
        <div className="tablet-navigation__header--left">
          <RiMenu4Fill onClick={() => setIsMenuOpen(true)} />
          <Logo />
        </div>

        <form
          className="tablet-navigation__header--search"
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

        <div className="tablet-navigation__header--right">
          <ThemeToggle />
          <User />
        </div>
      </div>
    </div>
  );
};

export default TabletNavigation;
