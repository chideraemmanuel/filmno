import Logo from "../../components/logo/Logo";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__hr"></div>

      <div className="footer__content">
        <Logo />
        <span className="footer__content--copyright">
          &copy; Copyright 2023. All rights reserved.
        </span>
      </div>
    </div>
  );
};

export default Footer;
