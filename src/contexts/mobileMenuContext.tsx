import { createContext, useState } from "react";

export const mobileMenuContext = createContext<any>(null);

interface MobileMenuProviderPropTypes {
  children: React.ReactNode;
}

// interface MobileMenuContextPropTypes {
//   isMenuOpen: boolean;
//   setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
// }

export const MobileMenuProvider = ({
  children,
}: MobileMenuProviderPropTypes) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <mobileMenuContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
      {children}
    </mobileMenuContext.Provider>
  );
};
