import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./variables.scss";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { MobileMenuProvider } from "./contexts/mobileMenuContext.tsx";
import { SearchContextProvider } from "./contexts/searchContext.tsx";
import { ThemeContextProvider } from "./contexts/themeContext.tsx";
import { AuthContextProvider } from "./contexts/authContext.tsx";
import { WishListContextProviver } from "./contexts/wishListContext.tsx";
import { FilterAndPaginationContextProvider } from "./contexts/filterAndPaginationContext.tsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeContextProvider>
        <AuthContextProvider>
          <MobileMenuProvider>
            <SearchContextProvider>
              <WishListContextProviver>
                <FilterAndPaginationContextProvider>
                  <App />
                </FilterAndPaginationContextProvider>
              </WishListContextProviver>
            </SearchContextProvider>
          </MobileMenuProvider>
        </AuthContextProvider>
      </ThemeContextProvider>

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
);
