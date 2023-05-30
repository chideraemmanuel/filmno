import { PageHeaderPropTypes } from "../../../utilities/componentsTypes";
import "./PageHeader.scss";

// interface PageHeaderPropTypes {
//   pageHeader: string;
// }

const PageHeader = ({ pageHeader }: PageHeaderPropTypes) => {
  return <h2 className="page-header">{pageHeader}</h2>;
};

export default PageHeader;
