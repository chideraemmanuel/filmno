import ThemeToggle from "../../../../components/themeToggle/ThemeToggle";
import User from "../../../../components/user/User";
import SideMenu from "../sideMenu/SideMenu";
import "./DesktopNavigation.scss";
import { FaTrash, FaSearch, FaUser } from "react-icons/fa";
import { FiUserPlus } from "react-icons/fi";
import { Link } from "react-router-dom";

const isLoggedIn = false;

const DesktopNavigation = () => {
  return (
    <div className="desktop-navigation">
      <SideMenu />

      <div className="desktop-navigation__header">
        <ThemeToggle />

        <form className="desktop-navigation__header--search">
          <input type="text" placeholder="Search for movies" />
          <FaSearch />
        </form>
        {/* 
        {isLoggedIn ? (
          <div className="desktop-navigation__header--account">
            <span>CE</span>
          </div>
        ) : (
          <Link to="/account" className="desktop-navigation__header--account">
            <FiUserPlus />
          </Link>
        )} */}
        <User />
      </div>
    </div>
  );
};

export default DesktopNavigation;
