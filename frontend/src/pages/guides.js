import React from "react";
import { GuidesStyle } from "../components/styles/Guides.styles";
import first from "../images/guide/1.png";
import second from "../images/guide/2.png";
import third from "../images/guide/3.png";

const HowToUseApp = () => {
  <></>;
};

export const Guides = () => {
  return (
    <GuidesStyle>
      <div className="sm:w-full md:w-3/5 lg:w-3/5 block mx-auto text-center text-white">
        <h1 className="text-4xl">Guide</h1>
        <p className=" font-normal">
          The StrongLifts 5×5 strength training program consists of two
          workouts:
        </p>
        <ul className="my-1 pl-4">
          <li>
            Workout <span className="font-semibold">A</span>: Squat, Bench
            Press, Barbell Row
          </li>
          <li>
            Workout <span className="font-semibold">B</span>: Squat, Overhead
            Press, Deadlift
          </li>
        </ul>
        <p>
          Do three workouts per week. Never train two days in a row or do two
          workouts in a day. Wait one day before doing your next workout. This
          gives your body time to recover, get stronger and build muscle so you
          can lift heavier next workout.
        </p>
        <p>
          Alternate workout A and B each time you train. Most people train
          Monday, Wednesday and Friday. This gives you one recovery day between
          each workout, and two recovery days before your next workout on
          Monday.
        </p>
        <p>
          What also works is to train Tuesday, Thursday, and Saturday… or
          Sunday, Tuesday, and Thursday. Start StrongLifts 5×5 by doing workout
          A. Go home, eat and sleep. Two days later do workout B. Another two
          days later do workout A. Your first week will look like this if you
          train Mo/We/Fr
        </p>
        <h2 className="text-3xl mt-8">How to use app</h2>
        <div id="how-to-use" className="-mt-8">
          <img src={first} alt="how to use app" width="100%" />
          <p className="-mt-8">
            In the workout view, you can record and change your workout
            settings. It is recommended to warm up before each workout. The 5x5
            training program uses two types of training (A and B). Current
            version does not allow you to change the number of sets.
          </p>
          <img src={second} alt="how to use app" width="100%" />
          <p className="-mt-4">
            After doing the warm-up exercise, you can start with the main
            exercise. Each repetion can be saved by pressing the round button.
          </p>
          <img src={third} alt="how to use app" width="100%" />
          <p className="-mt-4">
            If all sets are done with required five (5) repetion you can end you
            can go to the next exercise warm-up part and then to the main
            exercise.
          </p>
        </div>
      </div>
    </GuidesStyle>
  );
};

export default Guides;
