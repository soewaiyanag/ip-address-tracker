import { useSelector } from "react-redux";
import Status from "./Status";

const StatusContainer = () => {
  const state = useSelector((state) => state);
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
        <Status header="ip address" info={state.IPAddress} />
        <Status
          header="location"
          info={`${state.data.city_name}, ${state.data.region_name}`}
        />
        <Status header="timezone" info={`UTC${state.data.time_zone}`} />
        <Status header="isp" info={state.data.isp} />
      </div>
    </div>
  );
};

export default StatusContainer;
