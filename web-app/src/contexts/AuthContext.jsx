// AuthContext.js

import { createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { useCookies } from "react-cookie";
import { GoogleOAuthProvider } from "@react-oauth/google";

const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [cookies, setCookie, removeCookie] = useCookies(["jwt"]);
  const [user, setUser] = useState(null);
  const [isSignedIn, setIsSignedIn] = useState(null);

  useEffect(() => {
    setIsSignedIn(cookies.jwt && true);
    if (cookies.jwt) {
      setUser(jwtDecode(cookies.jwt));
    }
  }, [cookies.jwt]);

  function setAuthToken(token) {
    const userData = jwtDecode(token);
    setCookie("jwt", token, Date(userData.exp * 1000));
    setUser(userData);
    setIsSignedIn(true);
  }

  function logout() {
    removeCookie("jwt");
    setUser(null);
    setIsSignedIn(false);
  }

  const contextValue = {
    user,
    isSignedIn,
    logout,
    setAuthToken,
  };

  return (
    <GoogleOAuthProvider clientId={googleClientId}>
      <AuthContext.Provider value={contextValue}>
        {children}
      </AuthContext.Provider>
    </GoogleOAuthProvider>
  );
};
