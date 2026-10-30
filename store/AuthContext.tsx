import { createContext, ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
}

type AuthContextType = {
  isSignedIn: boolean;
  signIn: () => void;
  signOut: () => void;
};

const AuthContext = createContext<AuthContextType>({
  isSignedIn: false,
  signIn: () => {},
  signOut: () => {},
});

const AuthContextProvider = ({ children }: Props) => {
  const [token, setToken] = useState<string | null>(null);
  const isSignedIn = token !== null;

  function signIn() {
    // Actual auth logic here
    setToken("signed in");
  }

  function signOut() {
    // Actual auth logic here
    setToken(null);
  }

  const value = {
    isSignedIn,
    signIn,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthContextProvider };
