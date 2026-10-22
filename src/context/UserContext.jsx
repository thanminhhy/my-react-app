import { createContext, useState } from "react";

// 1. Khởi tạo context
export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState({
    name: "Minh Hy",
    loggedIn: true,
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
