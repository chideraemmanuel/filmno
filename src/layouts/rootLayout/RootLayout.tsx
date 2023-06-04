import "./RootLayout.scss";
import Navbar from "../../containers/navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../../containers/footer/Footer";

const RootLayout = () => {
  return (
    <div className="root-layout">
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
