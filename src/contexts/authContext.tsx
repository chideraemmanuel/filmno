import { createContext, useState } from "react";

export const authContext = createContext<any>(null);

interface AuthContextProviderPropTypes {
  children: React.ReactNode;
}

interface AuthUser {
  firstName: string;
  lastName: string;
  email: string;
}

export const AuthContextProvider = ({
  children,
}: AuthContextProviderPropTypes) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<AuthUser>({
    firstName: "",
    lastName: "",
    email: "",
  });
  //   const [user, setUser] = useState<AuthUser>({} as AuthUser);

  return (
    <authContext.Provider value={{ isLoggedIn, setIsLoggedIn, user, setUser }}>
      {children}
    </authContext.Provider>
  );
};
