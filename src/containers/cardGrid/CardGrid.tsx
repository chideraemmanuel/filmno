import MovieCard from "../../components/movieCard/MovieCard";
import { CardGridPropTypes } from "../../utilities/componentsTypes";
import "./CardGrid.scss";

const CardGrid = ({ data }: CardGridPropTypes) => {
  return (
    <section className="card-grid">
      {data?.map((item) => (
        <MovieCard key={item.id} data={item} />
      ))}
    </section>
  );
};

export default CardGrid;
