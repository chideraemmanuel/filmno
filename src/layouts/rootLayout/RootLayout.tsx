import "./RootLayout.scss";
import Navbar from "../../containers/navbar/Navbar";
import { Outlet } from "react-router-dom";
import MobileMenu from "../../containers/navbar/components/mobileMenu/MobileMenu";
import Footer from "../../containers/footer/Footer";

const RootLayout = () => {
  return (
    <div className="root-layout">
      {/* <MobileMenu /> */}
      <Navbar />

      <main className="main">
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default RootLayout;
