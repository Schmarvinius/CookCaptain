import React, { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";

export const TokenContext = createContext();

export const TokenProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    // Check if a token exists in local storage or session storage
    const storedToken =
      localStorage.getItem("token") || sessionStorage.getItem("token");

    if (storedToken) {
      // Decode the token to extract its information
      const decodedToken = jwt_decode(storedToken);
      setToken(decodedToken);
    }
  }, []);

  const updateToken = (newToken) => {
    setToken(newToken);
  };

  const clearToken = () => {
    setToken(null);

    // Remove the token from local storage and session storage
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
  };

  return (
    <TokenContext.Provider value={{ token, setToken: updateToken, clearToken }}>
      {children}
    </TokenContext.Provider>
  );
};
