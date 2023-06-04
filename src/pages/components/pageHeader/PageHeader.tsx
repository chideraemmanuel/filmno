import { PageHeaderPropTypes } from "../../../utilities/componentsTypes";
import FilterByGenre from "../filterByGenre/FilterByGenre";
import "./PageHeader.scss";

const PageHeader = ({ pageHeader, filter }: PageHeaderPropTypes) => {
  return (
    <div className="page-header">
      <h2 className="page-header__title">{pageHeader}</h2>
      {filter && <FilterByGenre />}
    </div>
  );
};

export default PageHeader;
