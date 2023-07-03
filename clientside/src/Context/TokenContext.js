import React, { createContext, useState, useEffect } from "react";

export const TokenContext = createContext();

export const TokenProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    // Check if a token exists in local storage or session storage
    const storedToken =
      localStorage.getItem("token") || sessionStorage.getItem("token");

    if (storedToken) {
      // Decode the token to extract its information
      setToken(storedToken);
    }
  }, []);

  const updateToken = (newToken) => {
    setToken(newToken);

    // Save the new token to local storage or session storage
    if (newToken) {
      localStorage.setItem("token", newToken);
      sessionStorage.setItem("token", newToken);
    } else {
      localStorage.removeItem("token");
      sessionStorage.removeItem("token");
    }
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
