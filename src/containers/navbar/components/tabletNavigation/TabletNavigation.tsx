import { useContext } from "react";
import Logo from "../../../../components/logo/Logo";
import ThemeToggle from "../../../../components/themeToggle/ThemeToggle";
import "./TabletNavigation.scss";
import { FaSearch } from "react-icons/fa";
import { RiMenu4Fill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import MobileMenu from "../mobileMenu/MobileMenu";
import { mobileMenuContext } from "../../../../contexts/mobileMenuContext";
import GithubLink from "../../../../components/githubLink/GithubLink";
import { searchContext } from "../../../../contexts/searchContext";

const TabletNavigation = () => {
  const { setIsMenuOpen } = useContext(mobileMenuContext);
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
          <GithubLink />
        </div>
      </div>
    </div>
  );
};

export default TabletNavigation;
