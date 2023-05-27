import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./variables.scss";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { MobileMenuProvider } from "./contexts/mobileMenuContext.tsx";
import { SearchContextProvider } from "./contexts/searchContext.tsx";
import { ThemeContextProvider } from "./contexts/themeContext.tsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeContextProvider>
        <MobileMenuProvider>
          <SearchContextProvider>
            <App />
          </SearchContextProvider>
        </MobileMenuProvider>
      </ThemeContextProvider>

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
);
