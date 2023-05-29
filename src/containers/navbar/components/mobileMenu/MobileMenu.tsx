import Logo from "../../../../components/logo/Logo";
import "./MobileMenu.scss";
import { RiCloseFill, RiMenu4Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { RiCompassDiscoverFill, RiCompassDiscoverLine } from "react-icons/ri";
import {
  AiOutlineHome,
  AiFillFire,
  AiOutlineFire,
  AiOutlineAreaChart,
  AiOutlineLineChart,
  AiFillCalendar,
  AiOutlineCalendar,
} from "react-icons/ai";
import { useContext } from "react";
import { mobileMenuContext } from "../../../../contexts/mobileMenuContext";

const MobileMenu = () => {
  const { isMenuOpen, setIsMenuOpen } = useContext(mobileMenuContext);

  const navLinks = [
    {
      name: "home",
      to: "/",
      icon: <AiOutlineHome />,
    },
    {
      name: "discover",
      to: "/discover",
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
          isMenuOpen ? "mobile-menu-overlay active" : "mobile-menu-overlay"
        }
        onClick={() => setIsMenuOpen(false)}
      ></div>
      <div className={isMenuOpen ? "mobile-menu active" : "mobile-menu"}>
        <div className="mobile-menu__header">
          <RiCloseFill onClick={() => setIsMenuOpen(false)} />
          <Logo />
        </div>

        <ul className="side-menu__nav-links">
          {navLinks.map((item) => {
            return (
              <li key={item.to}>
                <NavLink to={item.to} onClick={() => setIsMenuOpen(false)}>
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
