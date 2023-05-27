import "./Logo.scss";
import { Link } from "react-router-dom";
import { MdMovieFilter } from "react-icons/md";

const Logo = () => {
  return (
    <Link to="/" className="logo">
      <MdMovieFilter />
      <span>Filmno</span>
    </Link>
  );
};

export default Logo;
