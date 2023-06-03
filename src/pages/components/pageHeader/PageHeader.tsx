import { PageHeaderPropTypes } from "../../../utilities/componentsTypes";
import FilterByGenre from "../filterByGenre/FilterByGenre";
import "./PageHeader.scss";

// interface PageHeaderPropTypes {
//   pageHeader: string;
// }

const PageHeader = ({ pageHeader }: PageHeaderPropTypes) => {
  return (
    <div className="page-header">
      <h2 className="page-header__title">{pageHeader}</h2>
      <FilterByGenre />
    </div>
  );
};

export default PageHeader;
