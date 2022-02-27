import { useContext } from "react";
import DataContext from "../context/DataContext";
import Status from "./Status";

const StatusContainer = () => {
  const { data } = useContext(DataContext);

  console.log(data);

  return (
    <div
      className="container max-w-5xl mx-auto px-6
                absolute left-1/2 -translate-x-1/2
                md:top-[60%]" // translate to move half to the Header bottom
    >
      <div
        className="w-full bg-white rounded-xl
                    px-4 py-8 shadow-sm text-center
                    flex flex-col gap-4 
                    md:flex-row md:text-left"
      >
        <Status header="ip address" info="192.212.174.101" />
        <Status header="location" info="Brooklyn, NY 10001" />
        <Status header="timezone" info="UTC-05:00" />
        {/* <Status header="isp" info="SpaceX Starlink" /> */}
        <Status header="isp" info={data.isp} />
      </div>
    </div>
  );
};

export default StatusContainer;
