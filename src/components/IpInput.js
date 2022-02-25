import { useState } from "react";
import arrow from "../images/icon-arrow.svg";

const IpInput = () => {
  const [isFocus, setIsFocus] = useState(false);

  const onFocusHandler = () => setIsFocus(true);
  const onBlurHandler = () => setIsFocus(false);
  return (
    <div className="container max-w-2xl mx-auto px-6">
      <div
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
        className={`flex w-full h-14 rounded-lg
                    overflow-hidden ${isFocus ? "outline outline-2" : ""}`}
      >
        <input
          type="text"
          name="IpInput"
          id="IpInput"
          className="
                w-full
                outline-none px-4
                font-semibold text-very-dark-gray
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
