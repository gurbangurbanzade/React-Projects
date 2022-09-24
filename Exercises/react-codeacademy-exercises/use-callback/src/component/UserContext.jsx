import { createContext, useState } from "react";

const UserContext = createContext();
export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "qurban",
    age: 28,
  });

  const values = {
    user,
    setUser,
  };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};
export default UserContext;
