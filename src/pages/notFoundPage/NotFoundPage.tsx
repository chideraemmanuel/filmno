import { Link } from "react-router-dom";
import "./NotFoundPage.scss";
import notFoundIllustration from "../../assets/page-not-found.svg";

const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <div className="not-found-page__illustration">
        <img src={notFoundIllustration} alt="Page not found" />
      </div>
      <div className="not-found-page__text">
        <h2 className="not-found-page__text--header">Page not found!</h2>
        <span className="not-found-page__text--text">
          The requested page was not found or does not exist.
        </span>
        <Link to="/" className="not-found-page__text--button">
          Back to homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
