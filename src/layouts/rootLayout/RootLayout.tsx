import "./RootLayout.scss";
import Navbar from "../../containers/navbar/Navbar";
import { Outlet } from "react-router-dom";
import MobileMenu from "../../containers/navbar/components/mobileMenu/MobileMenu";

const RootLayout = () => {
  return (
    <div className="root-layout">
      {/* <MobileMenu /> */}
      <Navbar />

      <main className="main">
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
