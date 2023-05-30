import { createContext, useState } from "react";
import { ContextProviderPropTypes } from "./utilities/contextTypes";

export const mobileMenuContext = createContext<any>(null);

// interface MobileMenuProviderPropTypes {
//   children: React.ReactNode;
// }

// interface MobileMenuContextPropTypes {
//   isMenuOpen: boolean;
//   setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
// }

export const MobileMenuProvider = ({ children }: ContextProviderPropTypes) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <mobileMenuContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
      {children}
    </mobileMenuContext.Provider>
  );
};
