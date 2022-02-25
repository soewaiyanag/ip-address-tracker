import { useState } from "react";
import arrow from "../images/icon-arrow.svg";

const IpInput = () => {
  return (
    <div className="container max-w-2xl mx-auto px-6">
      <div
        className="shadow-sm flex w-full h-14 rounded-lg
                    overflow-hidden"
      >
        <input
          type="text"
          name="IpInput"
          id="IpInput"
          className="
                w-full
                outline-none px-4
                text-lg
                font-medium text-very-dark-gray
                "
        />
        <button className="bg-very-dark-gray w-16 grid place-items-center">
          <img src={arrow} alt="arrow" />
        </button>
      </div>
    </div>
  );
};

export default IpInput;
