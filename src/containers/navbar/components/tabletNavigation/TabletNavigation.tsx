import { useContext } from "react";
import Logo from "../../../../components/logo/Logo";
import ThemeToggle from "../../../../components/themeToggle/ThemeToggle";
import "./TabletNavigation.scss";
import { FaTrash, FaSearch, FaUser } from "react-icons/fa";
import { RiMenu4Fill, RiMenu4Line } from "react-icons/ri";
import { FiUserPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import MobileMenu from "../mobileMenu/MobileMenu";
import { mobileMenuContext } from "../../../../contexts/mobileMenuContext";
import User from "../../../../components/user/User";

const isLoggedIn = false;

const TabletNavigation = () => {
  const { isMenuOpen, setIsMenuOpen } = useContext(mobileMenuContext);

  return (
    <div className="tablet-navigation">
      <MobileMenu />

      <div className="tablet-navigation__header">
        <div className="tablet-navigation__header--left">
          <RiMenu4Fill onClick={() => setIsMenuOpen(true)} />
          <Logo />
        </div>

        <form className="tablet-navigation__header--search">
          <input type="text" placeholder="Search for movies" />
          <FaSearch />
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
