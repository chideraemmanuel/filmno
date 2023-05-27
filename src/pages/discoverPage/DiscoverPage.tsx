import CardGrid from "../../containers/cardGrid/CardGrid";
import PageHeader from "../components/pageHeader/PageHeader";
import "./DiscoverPage.scss";

const data = [1, 2, , 3, 4, 5, 6, 7, 8, 9, 0];

const DiscoverPage = () => {
  return (
    <div className="discover-page">
      <PageHeader pageHeader="Discover trending movies" />

      <CardGrid data={data} />
    </div>
  );
};

export default DiscoverPage;
