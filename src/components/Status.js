const Status = ({ header, info }) => {
  return (
    <div className="md:flex-1 space-y-1 md:border-r-2 last:border-none">
      <h4 className="uppercase text-dark-gray font-bold text-xs">{header}</h4>
      <h1 className="text-very-dark-gray text-xl font-bold">{info}</h1>
    </div>
  );
};

export default Status;
