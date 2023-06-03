import { Link } from "react-router-dom";
import "./GithubLink.scss";
import { FiGithub } from "react-icons/fi";

const GithubLink = () => {
  return (
    <Link to="https://github.com" target="_blank" className="github-link">
      <FiGithub />
    </Link>
  );
};

export default GithubLink;
