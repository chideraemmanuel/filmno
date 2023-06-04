import Logo from "../../../../components/logo/Logo";
import "./SideMenu.scss";
import { NavLink } from "react-router-dom";
import { RiCompassDiscoverLine } from "react-icons/ri";
import { AiOutlineFire, AiOutlineCalendar } from "react-icons/ai";

const SideMenu = () => {
  const navLinks = [
    {
      name: "discover",
      to: "/",
      icon: <RiCompassDiscoverLine />,
    },
    {
      name: "genres",
      to: "/genres",
      icon: <AiOutlineFire />,
    },
    {
      name: "watch list",
      to: "/watch-list",
      icon: <AiOutlineCalendar />,
    },
  ];

  return (
    <aside className="side-menu">
      <div className="side-menu__logo">
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
    </aside>
  );
};

export default SideMenu;
