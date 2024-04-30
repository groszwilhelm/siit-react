import React, { useState, useEffect } from "react";

export const UserContext = React.createContext();

export default function UserContextProvider({ children }) {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const [isAdmin, setAdmin] = useState(false);

  useEffect(() => {
    setAdmin(user?.roles?.includes("Admin"));
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser, isAdmin }}>
      {children}
    </UserContext.Provider>
  );
}
