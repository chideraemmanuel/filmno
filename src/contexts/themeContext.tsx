import { createContext, useState } from "react";

export const themeContext = createContext<any>(null);

interface ThemeContextProviderPropTypes {
  children: React.ReactNode;
}

export const ThemeContextProvider = ({
  children,
}: ThemeContextProviderPropTypes) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  return (
    <themeContext.Provider value={{ theme, setTheme }}>
      {children}
    </themeContext.Provider>
  );
};
