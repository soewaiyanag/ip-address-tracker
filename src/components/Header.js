import IpInput from "./IpInput";
import StatusContainer from "./StatusContainer";

const Header = () => {
  return (
    <div
      className="bg-very pt-6 bg-header-pattern
                space-y-6 bg-repeat-y
                bg-center bg-cover h-[320px] md:h-64"
    >
      <h1 className="text-center font-medium text-2xl text-white">
        IP Address Tracker
      </h1>
      <IpInput />
      <StatusContainer />
    </div>
  );
};

export default Header;
