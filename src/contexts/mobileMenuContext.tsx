import { createContext, useState } from "react";
import { ContextProviderPropTypes } from "./utilities/contextTypes";

export const mobileMenuContext = createContext<any>(null);

export const MobileMenuProvider = ({ children }: ContextProviderPropTypes) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <mobileMenuContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
      {children}
    </mobileMenuContext.Provider>
  );
};
