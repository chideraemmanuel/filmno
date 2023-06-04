import { Link } from "react-router-dom";
import "./GithubLink.scss";
import { FiGithub } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";

const GithubLink = () => {
  return (
    <Link
      to="https://github.com/chideraemmanuel/filmno"
      target="_blank"
      className="github-link"
    >
      <BsGithub />
    </Link>
  );
};

export default GithubLink;
