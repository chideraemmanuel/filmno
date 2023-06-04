import { createContext, useState } from "react";
import { ContextProviderPropTypes } from "./utilities/contextTypes";

export const themeContext = createContext<any>(null);

// interface ThemeContextProviderPropTypes {
//   children: React.ReactNode;
// }

export const ThemeContextProvider = ({
  children,
}: ContextProviderPropTypes) => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  return (
    <themeContext.Provider value={{ theme, setTheme }}>
      {children}
    </themeContext.Provider>
  );
};
