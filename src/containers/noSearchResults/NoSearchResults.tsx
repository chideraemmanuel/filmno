import "./NoSearchResults.scss";
import noSearchResultIllustration from "../../assets/no-search-result.svg";
import noSearchResultIllustration2 from "../../assets/no-search-result2.svg";
import { Link } from "react-router-dom";

const NoSearchResults = () => {
  return (
    <div className="no-search-results">
      <div className="no-search-results__illustration">
        <img src={noSearchResultIllustration} alt="No search results" />
      </div>
      <div className="no-search-results__text">
        <h2 className="no-search-results__text--header">
          No results for your search.
        </h2>
        <span className="no-search-results__text--text">
          Try searching for something else, or...
        </span>
        <Link to="/" className="no-search-results__text--button">
          Back to homepage
        </Link>
      </div>
    </div>
  );
};

export default NoSearchResults;
