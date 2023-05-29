import { createContext, useState } from "react";

export const wishListContext = createContext<any>(null);

interface wishListContextProviderPropTypes {
  children: React.ReactNode;
}

export const WishListContextProviver = ({
  children,
}: wishListContextProviderPropTypes) => {
  const [wishList, setWishList] = useState([]);

  return (
    <wishListContext.Provider value={{ wishList, setWishList }}>
      {children}
    </wishListContext.Provider>
  );
};
