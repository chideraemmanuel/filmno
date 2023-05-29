import "./Logo.scss";
import { Link } from "react-router-dom";
import { MdMovieFilter } from "react-icons/md";
import { useContext } from "react";
import { mobileMenuContext } from "../../contexts/mobileMenuContext";

const Logo = () => {
  const { isMenuOpen, setIsMenuOpen } = useContext(mobileMenuContext);

  return (
    <Link to="/" className="logo" onClick={() => setIsMenuOpen(false)}>
      <MdMovieFilter />
      <span>Filmno</span>
    </Link>
  );
};

export default Logo;
