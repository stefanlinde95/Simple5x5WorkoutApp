import React, { useState } from "react";
import { RepCounterStyle } from "./styles/RepCounter.styles";

export const RepCounter = ({
  reps,
  doneSets,
  setDoneSets,
  id,
  name,
  warmup,
  weight,
}) => {
  const [counter, setCounter] = useState(0);
  id = id + 1; // For simplicty whoever will be reading localStorage, localStorage will be replaced
  const handleCounter = () => {
    if (counter == 0) {
      setDoneSets(doneSets + 1);
      if (!warmup) {
        localStorage.setItem(`${name}-${id}-set`, JSON.stringify(5));
      }
      return setCounter(reps);
    }
    if (counter >= 1) {
      if (counter >= 5 && doneSets >= 1) {
        setDoneSets(doneSets - 1);
      }
      if (!warmup) {
        localStorage.setItem(`${name}-${id}-set`, JSON.stringify(counter - 1));
      }
      return setCounter(counter - 1);
    }
  };

  React.useEffect(() => {
    const data = localStorage.getItem(`${name}-${id}-set`);
    if (data && !warmup) {
      setCounter(JSON.parse(data));
    }
  }, []);

  return (
    <RepCounterStyle>
      {/* When all the repetions are done, the button will chnage color */}
      {warmup ? <p className="text-grey font-thin">{weight} kg</p> : ""}

      <div
        onClick={handleCounter}
        className={
          counter
            ? "bg-blue button rounded-full"
            : "button counter-btn rounded-full"
        }
      >
        {counter}
      </div>
    </RepCounterStyle>
  );
};

export default RepCounter;
