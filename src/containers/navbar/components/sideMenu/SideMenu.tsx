import Logo from "../../../../components/logo/Logo";
import "./SideMenu.scss";
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

const SideMenu = () => {
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
    <aside className="side-menu">
      <div className="side-menu__logo">
        <Logo />
      </div>

      <div className="side-menu__hr"></div>

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
    </aside>
  );
};

export default SideMenu;
