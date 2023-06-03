import { Link } from "react-router-dom";
import "./GithubLink.scss";
import { FiGithub } from "react-icons/fi";

const GithubLink = () => {
  return (
    <Link
      to="https://github.com/chideraemmanuel/filmno"
      target="_blank"
      className="github-link"
    >
      <FiGithub />
    </Link>
  );
};

export default GithubLink;
