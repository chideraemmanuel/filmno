import { useContext } from "react";
import "./FilterByGenre.scss";
import useFetchGenres from "../../../hooks/useFetchGenres";
import { filterAndPaginationContext } from "../../../contexts/filterAndPaginationContext";

const FilterByGenre = () => {
  const { data } = useFetchGenres();

  const { genreId, setGenreId } = useContext(filterAndPaginationContext);

  return (
    <div className="filter-by-genre">
      <span>Filter by genre: </span>
      <select
        name="genres"
        id="genres"
        value={genreId}
        onChange={(e) => setGenreId(e.target.value)}
      >
        <option value="">All</option>

        {data?.data.genres.map((genre: { name: string; id: number }) => (
          <option key={genre.id} value={genre.id}>
            {genre.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterByGenre;
