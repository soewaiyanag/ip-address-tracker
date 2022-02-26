import { createContext, useState } from "react";

const IPContext = createContext(null);

export const IPContextProvider = ({ children }) => {
  const [IP, setIP] = useState("");
  return (
    <IPContext.Provider value={{ IP, setIP }}>{children}</IPContext.Provider>
  );
};

export default IPContext;
