import Logo from "../../../../components/logo/Logo";
import "./MobileMenu.scss";
import { RiCloseFill, RiMenu4Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { RiCompassDiscoverFill, RiCompassDiscoverLine } from "react-icons/ri";
import {
  AiFillFire,
  AiOutlineFire,
  AiOutlineAreaChart,
  AiOutlineLineChart,
  AiFillCalendar,
  AiOutlineCalendar,
} from "react-icons/ai";

const mobileMenuActive = false;

const MobileMenu = () => {
  const navLinks = [
    {
      name: "discover",
      to: "/",
      icon: <RiCompassDiscoverLine />,
    },
    {
      name: "popular",
      to: "/popular",
      icon: <AiOutlineFire />,
    },
    {
      name: "top chart",
      to: "/top-chart",
      icon: <AiOutlineLineChart />,
    },
    {
      name: "recent releases",
      to: "/recent-releases",
      icon: <AiOutlineCalendar />,
    },
  ];

  return (
    <>
      <div
        className={
          mobileMenuActive
            ? "mobile-menu-overlay active"
            : "mobile-menu-overlay"
        }
      ></div>
      <div className={mobileMenuActive ? "mobile-menu active" : "mobile-menu"}>
        <div className="mobile-menu__header">
          <RiCloseFill />
          <Logo />
        </div>

        <ul className="side-menu__nav-links">
          {navLinks.map((item) => {
            return (
              <li key={item.to}>
                <NavLink to={item.to}>
                  {item.icon}
                  <span>{item.name}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default MobileMenu;
