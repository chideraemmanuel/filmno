import { createContext, useState } from "react";
import { ContextProviderPropTypes } from "./utilities/contextTypes";

export const searchContext = createContext<any>(null);

// interface SearchContextProviderPropTypes {
//   children: React.ReactNode;
// }

export const SearchContextProvider = ({
  children,
}: ContextProviderPropTypes) => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <searchContext.Provider
      value={{ isSearchActive, setIsSearchActive, searchTerm, setSearchTerm }}
    >
      {children}
    </searchContext.Provider>
  );
};
