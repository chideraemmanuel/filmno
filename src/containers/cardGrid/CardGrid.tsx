import MovieCard from "../../components/movieCard/MovieCard";
import "./CardGrid.scss";

interface CardGridPropTypes {
  data: any[] | null | [];
}

const CardGrid = ({ data }: CardGridPropTypes) => {
  return (
    <section className="card-grid">
      {data?.map((item) => (
        <MovieCard item={item} />
      ))}
    </section>
  );
};

export default CardGrid;
