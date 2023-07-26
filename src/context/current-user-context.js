import React, { useState } from "react";

export const CurrentUserContext = React.createContext({
  username: "",
});

export default function CurrentUserProvider({ children }) {
  const [user, setUser] = useState("juliusomo");

  return (
    <CurrentUserContext.Provider value={{ username: user }}>
      {children}
    </CurrentUserContext.Provider>
  );
}
