import Status from "./Status";

const StatusContainer = () => {
  return (
    <div className="container max-w-6xl mx-auto px-6">
      <div
        className="w-full bg-white rounded-lg
                    px-4 py-8 shadow-sm text-center
                    flex flex-col gap-4 
                    md:flex-row md:text-left
                    md:translate-y-[12%]" // translate to move half to the Header bottom
      >
        <Status header="ip address" info="192.212.174.101" />
        <Status header="location" info="Brooklyn, NY 10001" />
        <Status header="timezone" info="UTC-05:00" />
        <Status header="isp" info="SpaceX Starlink" />
      </div>
    </div>
  );
};

export default StatusContainer;
