import arrow from "../images/icon-arrow.svg";
import { useState } from "react";

const IpInput = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="container max-w-xl mx-auto px-6">
      <div
        className="shadow-sm flex w-full h-14 rounded-xl
                    overflow-hidden"
      >
        <input
          type="text"
          name="IpInput"
          id="IpInput"
          placeholder="Search for any IP address or domain"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          className="
                w-full
                outline-none px-4
                placeholder:font-normal
                text-lg
                font-medium text-very-dark-gray
                "
        />
        <button
          onClick={() => {}}
          className="bg-very-dark-gray w-16 grid place-items-center"
        >
          <img src={arrow} alt="arrow" />
        </button>
      </div>
    </div>
  );
};

export default IpInput;
