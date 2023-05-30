import { createContext, useState } from "react";
import { ContextProviderPropTypes } from "./utilities/contextTypes";

export const wishListContext = createContext<any>(null);

// interface wishListContextProviderPropTypes {
//   children: React.ReactNode;
// }

export const WishListContextProviver = ({
  children,
}: ContextProviderPropTypes) => {
  const [wishList, setWishList] = useState([]);

  return (
    <wishListContext.Provider value={{ wishList, setWishList }}>
      {children}
    </wishListContext.Provider>
  );
};
