import { useParams } from "react-router-dom";
import CardGrid from "../../containers/cardGrid/CardGrid";
import NoSearchResults from "../../containers/noSearchResults/NoSearchResults";
import PageHeader from "../components/pageHeader/PageHeader";
import "./SearchResultsPage.scss";

// const data = [1, 2, 3, 4, 4, 6, 7, 8, 9, 0];

const searchResults: [] | any[] = [];

const SearchResultsPage = () => {
  const { searchTerm } = useParams();

  return (
    <div className="search-results-page">
      {searchResults.length === 0 && <NoSearchResults />}

      {searchResults.length > 0 && (
        <div className="search-results-page__results">
          <PageHeader pageHeader={`Results for ${searchTerm}:`} />
          <CardGrid data={searchResults} />
        </div>
      )}
    </div>
  );
};

export default SearchResultsPage;
