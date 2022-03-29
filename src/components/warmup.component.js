import React from "react";
import { WarmupStyle } from "../components/styles/Warmup.styles";
import ExerciseSession from "./exercise-session.component";

export const Warmup = ({ values }) => {
  return (
    <WarmupStyle>
      <div className="block mx-auto text-center text-white">
        <h1 className="text-3xl font-thin text-left">Warmup</h1>
        <ul id="warmup">
          {values.map((item) => {
            const { name, weight, _id, sets, reps } = item;
            if (name)
              return (
                <li
                  key={_id}
                  className="border-1 border rounded-xl px-4 mt-4 shadow-lg"
                >
                  <div className="pt-2 pb-5 text-white">
                    <h2 className="text-2xl text-left">{item.name}</h2>
                    <ExerciseSession
                      warmup={true}
                      name={name}
                      sets={sets}
                      reps={reps}
                      weight={weight}
                    />
                  </div>
                </li>
              );
          })}
        </ul>
      </div>
    </WarmupStyle>
  );
};

export default Warmup;
