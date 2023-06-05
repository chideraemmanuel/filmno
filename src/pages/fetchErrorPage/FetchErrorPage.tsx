import "./FetchErrorPage.scss";
import fetchErrorIllustration from "../../assets/fetch-error.svg";

const FetchErrorPage = () => {
  return (
    <div className="fetch-error">
      <div className="fetch-error__illustration">
        <img src={fetchErrorIllustration} alt="Fetch Error" />
      </div>
      <div className="fetch-error__text">
        <h2 className="fetch-error__text--header">Error :(</h2>
        <span className="fetch-error__text--text">
          Could not fetch the required data.
        </span>
        <button
          className="fetch-error__text--button"
          onClick={() => location.reload()}
        >
          Retry
        </button>
      </div>
    </div>
  );
};

export default FetchErrorPage;
