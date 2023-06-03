import { useState, createContext } from "react";
import { ContextProviderPropTypes } from "./utilities/contextTypes";

export const filterAndPaginationContext = createContext<any>(null);

export const FilterAndPaginationContextProvider = ({
  children,
}: ContextProviderPropTypes) => {
  const [genre, setGenre] = useState("");
  const [genreId, setGenreId] = useState<number>();
  const [pageNumber, setPageNumber] = useState(1);

  return (
    <filterAndPaginationContext.Provider
      value={{
        genre,
        setGenre,
        genreId,
        setGenreId,
        pageNumber,
        setPageNumber,
      }}
    >
      {children}
    </filterAndPaginationContext.Provider>
  );
};
