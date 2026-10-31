import { createContext, ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
}

type AuthContextType = {
  userId: string;
  isSignedIn: boolean;
  signIn: () => void;
  signOut: () => void;
};

const AuthContext = createContext<AuthContextType>({
  userId: "",
  isSignedIn: false,
  signIn: () => {},
  signOut: () => {},
});

const AuthContextProvider = ({ children }: Props) => {
  const [userId, setUserId] = useState<string>("1");
  const isSignedIn = userId !== "";

  function signIn() {
    // Actual auth logic here
    setUserId("1");
  }

  function signOut() {
    // Actual auth logic here
    setUserId("");
  }

  const value = {
    isSignedIn,
    userId,
    signIn,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthContextProvider };
