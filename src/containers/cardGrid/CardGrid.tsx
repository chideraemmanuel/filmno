import MovieCard from "../../components/movieCard/MovieCard";
import { CardGridPropTypes } from "../../utilities/componentsTypes";
import "./CardGrid.scss";

// interface CardGridPropTypes {
//   data: any[] | null | [];
// }

const CardGrid = ({ data }: CardGridPropTypes) => {
  return (
    <section className="card-grid">
      {data?.map((item) => (
        <MovieCard data={item} />
      ))}
    </section>
  );
};

export default CardGrid;
