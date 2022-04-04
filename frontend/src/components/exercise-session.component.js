import React, { useState, lazy, Suspense } from "react";
const RepCounter = lazy(() => import("./repcounter.component"));

export const ExerciseSession = ({ reps, sets, weight, name, warmup }) => {
  const [doneSets, setDoneSets] = useState(0);
  const exerciseName = name.replace(/ /g, "").toLowerCase();

  const ShortWarmupWeights = [20, 20, 22.5, 25, 27.5];
  const LongWarmupWeights = [20, 20, 30, 40, 50];

  return (
    <div className="block">
      <div className="d-flex sets">
        {[...Array(sets)].map((e, i) => (
          <Suspense
            fallback={<div className="border border-2 rounded-full">0</div>}
          >
            <RepCounter
              key={++i}
              id={i}
              name={name}
              reps={reps}
              doneSets={doneSets}
              warmup={warmup}
              weight={
                weight > 50 ? LongWarmupWeights[i] : ShortWarmupWeights[i]
              }
              setDoneSets={setDoneSets}
            />
          </Suspense>
        ))}
      </div>
      {warmup ? (
        <p className="text-white">
          {doneSets == sets ? `Warmup done. ${name} now!` : ""}
        </p>
      ) : (
        <p className="text-white">
          {doneSets == sets ? (
            <span id={`${exerciseName}-success`}>{`Well done, lift ${
              weight ? weight + 5 : 22.5
            } kg next time`}</span>
          ) : (
            ""
          )}
        </p>
      )}
    </div>
  );
};

export default ExerciseSession;
