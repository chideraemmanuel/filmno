import { useContext } from "react";
import ThemeToggle from "../../../../components/themeToggle/ThemeToggle";
import GithubLink from "../../../../components/githubLink/GithubLink";
import SideMenu from "../sideMenu/SideMenu";
import "./DesktopNavigation.scss";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { searchContext } from "../../../../contexts/searchContext";

const DesktopNavigation = () => {
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
        <GithubLink />
      </div>
    </div>
  );
};

export default DesktopNavigation;
