import { useContext } from "react";
import "./MobileNavigation.scss";
import { FaTrash, FaSearch, FaUser } from "react-icons/fa";
import { RiMenu4Fill, RiMenu4Line } from "react-icons/ri";
import { FiUserPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import MobileMenu from "../mobileMenu/MobileMenu";
import Logo from "../../../../components/logo/Logo";
import ThemeToggle from "../../../../components/themeToggle/ThemeToggle";
import MobileSearch from "../mobileSearch/MobileSearch";
import { mobileMenuContext } from "../../../../contexts/mobileMenuContext";
import { searchContext } from "../../../../contexts/searchContext";

const isLoggedIn = false;
const searchActive = false;

const MobileNavigation = () => {
  const { isMenuOpen, setIsMenuOpen } = useContext(mobileMenuContext);
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
                {isLoggedIn ? (
                  <div className="mobile-navigation__header--right_account">
                    <span>CE</span>
                  </div>
                ) : (
                  <Link
                    to="/account"
                    className="mobile-navigation__header--right_account"
                  >
                    <FiUserPlus />
                  </Link>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default MobileNavigation;
