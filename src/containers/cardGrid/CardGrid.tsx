import MovieCard from "../../components/movieCard/MovieCard";
import "./CardGrid.scss";

interface CardGridPropTypes {
  data: any[];
}

const CardGrid = ({ data }: CardGridPropTypes) => {
  return (
    <section className="card-grid">
      {data.map((item) => (
        <MovieCard {...item} />
      ))}
    </section>
  );
};

export default CardGrid;
