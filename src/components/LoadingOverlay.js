import circle from "../images/Rolling-1s-200px.svg";

const LoadingOverlay = () => {
  return (
    <div className="fixed inset-0 z-20 bg-black bg-opacity-80 grid place-items-center">
      <img src={circle} alt="circle" className="w-12 animate-spin" />
    </div>
  );
};

export default LoadingOverlay;
