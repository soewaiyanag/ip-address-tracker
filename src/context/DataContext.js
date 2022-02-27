import { createContext, useState } from "react";
import publicIp from "public-ip";

const DataContext = createContext(null);

function apiURL(ipaddress) {
  const corsPrefix = "https://guarded-gorge-60452.herokuapp.com/";
  return `${corsPrefix}https://api.ip2location.com/v2/?ip=${ipaddress}&key=SW9NI7ZYHS&package=WS12`;
}

async function fetchData(IPAddress) {
  const response = await fetch(apiURL(IPAddress || (await publicIp.v4())));
  const data = await response.json();

  return data;
}

export const DataContextProvider = ({ children }) => {
  const [data, setData] = useState("");

  const setDataByIP = (IPAddress) => {
    setData(fetchData(IPAddress));
  };

  return (
    <DataContext.Provider value={{ data, setDataByIP }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
