import { useEffect } from "react";
import { useParams } from "react-router-dom";
import CardGrid from "../../containers/cardGrid/CardGrid";
import NoSearchResults from "../../containers/noSearchResults/NoSearchResults";
import PageHeader from "../components/pageHeader/PageHeader";
import "./SearchResultsPage.scss";
import { useQuery } from "react-query";
import axios from "axios";
import SubpageSkeleton from "../components/skeletons/subpageSkeleton/SubpageSkeleton";

// const data = [1, 2, 3, 4, 4, 6, 7, 8, 9, 0];

// const searchResults: [] | any[] = [];

const accessToken = import.meta.env.VITE_TMBD_API_READ_ACCESS_TOKEN;

const fetchSearchResults = ({ queryKey }: { queryKey: any[] }) => {
  const searchTerm = queryKey[1];
  return axios.get("https://api.themoviedb.org/3/search/movie", {
    params: {
      query: searchTerm,
      include_adult: "false",
      language: "en-US",
      page: "1",
    },
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

const SearchResultsPage = () => {
  const { searchTerm } = useParams();

  const {
    data: searchResults,
    isLoading,
    error,
  } = useQuery(["movie search", searchTerm], fetchSearchResults);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollUp();
  }, [searchTerm]);

  return (
    <div className="search-results-page">
      {isLoading && <SubpageSkeleton />}

      {searchResults?.data.results.length === 0 && <NoSearchResults />}

      {searchResults?.data.results.length > 0 && (
        <div className="search-results-page__results">
          <PageHeader
            pageHeader={`Results for ${searchTerm}:`}
            filter={false}
          />
          <CardGrid data={searchResults?.data.results} />
        </div>
      )}
    </div>
  );
};

export default SearchResultsPage;
