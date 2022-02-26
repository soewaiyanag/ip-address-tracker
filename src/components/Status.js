const Status = ({ header, info }) => {
  return (
    <div className="md:flex-1 px-2 lg:px-4 space-y-3 md:border-r-2 last:border-none">
      <h4 className="uppercase text-dark-gray font-bold text-xs">{header}</h4>
      <h1 className="text-very-dark-gray text-2xl font-medium">{info}</h1>
    </div>
  );
};

export default Status;
