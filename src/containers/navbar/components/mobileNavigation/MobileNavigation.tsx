import { useContext } from "react";
import "./MobileNavigation.scss";
import { FaSearch } from "react-icons/fa";
import { RiMenu4Fill } from "react-icons/ri";
import MobileMenu from "../mobileMenu/MobileMenu";
import Logo from "../../../../components/logo/Logo";
import ThemeToggle from "../../../../components/themeToggle/ThemeToggle";
import MobileSearch from "../mobileSearch/MobileSearch";
import { mobileMenuContext } from "../../../../contexts/mobileMenuContext";
import { searchContext } from "../../../../contexts/searchContext";
import GithubLink from "../../../../components/githubLink/GithubLink";

const MobileNavigation = () => {
  const { setIsMenuOpen } = useContext(mobileMenuContext);
  const { isSearchActive, setIsSearchActive } = useContext(searchContext);

  return (
    <>
      <div className="mobile-navigation">
        <MobileMenu />

        <div className="mobile-navigation__header">
          {isSearchActive && <MobileSearch />}

          {!isSearchActive && (
            <>
              <div className="mobile-navigation__header--left">
                <RiMenu4Fill onClick={() => setIsMenuOpen(true)} />
                <Logo />
              </div>

              <div className="mobile-navigation__header--right">
                <FaSearch onClick={() => setIsSearchActive(true)} />
                <ThemeToggle />
                <GithubLink />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default MobileNavigation;
