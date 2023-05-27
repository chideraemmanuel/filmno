import "./Navbar.scss";
import DesktopNavigation from "./components/desktopNavigation/DesktopNavigation";
import MobileNavigation from "./components/mobileNavigation/MobileNavigation";
import TabletNavigation from "./components/tabletNavigation/TabletNavigation";

const Navbar = () => {
  return (
    <nav className="navbar">
      <DesktopNavigation />
      <TabletNavigation />
      <MobileNavigation />
    </nav>
  );
};

export default Navbar;
