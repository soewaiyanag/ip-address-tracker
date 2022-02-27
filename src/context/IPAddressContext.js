import { createContext, useState } from "react";

const IPAddressContext = createContext(null);

export const IPAddressContextProvider = ({ children }) => {
  const [IPAddress, setIPAddress] = useState("");
  return (
    <IPAddressContext.Provider value={{ IPAddress, setIPAddress }}>
      {children}
    </IPAddressContext.Provider>
  );
};

export default IPAddressContext;
