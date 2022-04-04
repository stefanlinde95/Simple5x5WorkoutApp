import axios from "axios";
import React, { useState, Component } from "react";
import { WorkoutStyle } from "../components/styles/Workout.styles";
import ExerciseSession from "./exercise-session.component";
import ModalWeightButton from "./ModalWeightButton.component";
import Warmup from "./warmup.component";

const ExerciseConstructor = (props) => {
  const [typeofworkout, setTypeofworkout] = useState(2);
  const [warmupOrWorkout, setWarmupOrWorkout] = useState(false);

  const { exercise } = props;
  const length = exercise.length;
  const lastExercise = exercise[length - typeofworkout];
  const { workout, exercisetype } = lastExercise;
  const objectValues = Object.values(workout);
  const objectKeys = Object.keys(workout);

  const handleClick = () => {
    if (typeofworkout === 1) {
      setTypeofworkout(2);
      window.localStorage.clear();
      return;
    }
    if (typeofworkout === 2) {
      setTypeofworkout(1);
      window.localStorage.clear();
      return;
    }
  };
  return (
    <>
      <div
        id="warmup-btn"
        onClick={() => setWarmupOrWorkout(!warmupOrWorkout)}
        className="inline-block font-thin text-grey"
      >
        {warmupOrWorkout ? "Back to workout" : "Warmup"}
      </div>
      {warmupOrWorkout ? (
        <Warmup values={objectValues} />
      ) : (
        <div>
          <div className="workout-heading d-flex">
            <h1 className="text-3xl font-thin">
              Workout{" "}
              <span className="font-medium">
                {exercisetype ? " A " : " B "}
              </span>
            </h1>
            <input
              type="text"
              name="typeofworkout"
              id="typeofworkout"
              value={exercisetype ? exercisetype : false}
              readOnly
              hidden
            />
            <div
              onClick={handleClick}
              className="switch-btn border border-slate-400 rounded-xl ml-auto my-1 py-1 px-3"
            >
              Switch
            </div>
          </div>
          <ul id="workout">
            {objectValues.map((item, i) => {
              if (item.name)
                return (
                  <li
                    key={item._id}
                    className="border-1 border rounded-xl px-4 mt-4 shadow-lg"
                  >
                    <div className="d-flex pt-2 pb-5 text-white">
                      <input
                        type="text"
                        name="keys"
                        id="keys"
                        value={objectKeys[++i - 1]}
                        readOnly
                        hidden
                      />
                      <input
                        className="sm:text-xl md:text-2xl bg-transparent"
                        type="text"
                        name={item.name}
                        value={item.name}
                        readOnly
                      />
                      <ModalWeightButton weight={item.weight} />
                    </div>
                    <input
                      className="sets"
                      type="number"
                      name="sets"
                      value={item.sets}
                      readOnly
                      hidden
                    />
                    <ExerciseSession
                      warmup={false}
                      name={item.name}
                      sets={item.sets}
                      reps={item.reps}
                      weight={item.weight}
                    />
                  </li>
                );
            })}
          </ul>
          <button
            type="submit"
            value="Submit"
            className="finish-btn bg-transparent border rounded-xl border-slate-500"
          >
            Finish
          </button>
        </div>
      )}
    </>
  );
};

export default class Workout extends Component {
  constructor(props) {
    super(props);

    this.state = { exercises: [], init: false };
  }

  componentDidMount() {
    axios
      .get("3001/exercises/")
      .then((response) => {
        this.setState({ exercises: response.data, init: true });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  exerciseList() {
    const data = this.state.exercises;
    return <ExerciseConstructor exercise={data} key={data._id} />;
  }

  warmupList() {
    const data = this.state.exercises;
    return <Warmup data={data} key={data._id} />;
  }

  onSubmit(e) {
    e.preventDefault();

    const exerciseResults = {
      username: "stefan",
      description: "React exercise",
      exercisetype: e.target[0].value,
      workout: {
        [e.target[1].value]: {
          name: e.target[2].value,
          weight: e.target[3].value,
          sets: e.target[4].value,
          reps: 5,
        },
        [e.target[5].value]: {
          name: e.target[6].value,
          weight: e.target[7].value,
          sets: e.target[8].value,
          reps: 5,
        },
        [e.target[9].value]: {
          name: e.target[10].value,
          weight: e.target[11].value,
          sets: e.target[12].value,
          reps: 5,
        },
      },
      duration: 120,
      date: new Date(),
    };

    if (
      document.querySelector(
        "#squat-success" && "#shoulderpress-success" && "#deadlift-success",
      )
    ) {
      axios
        .post("/exercises/add", exerciseResults)
        .then((res) => console.log(res.data));

      window.localStorage.clear();
      window.location = "/";
      return;
    } else if (
      document.querySelector(
        "#squat-success" && "#benchpress-success" && "#barbellrow-success",
      )
    ) {
      axios
        .post("/exercises/add", exerciseResults)
        .then((res) => console.log(res.data));

      window.localStorage.clear();
      window.location = "/";
      return;
    } else {
      if (
        window.confirm(
          "Workout is not completed, do you still wish to end session?",
        )
      ) {
        const failedResults = {
          username: "stefan",
          description: "React exercise",
          exercisetype: e.target[0].value,
          workout: {
            [e.target[1].value]: {
              name: e.target[2].value,
              weight: e.target[3].value - 2.5,
              sets: e.target[4].value,
              reps: 5,
            },
            [e.target[5].value]: {
              name: e.target[6].value,
              weight: e.target[7].value - 2.5,
              sets: e.target[8].value,
              reps: 5,
            },
            [e.target[9].value]: {
              name: e.target[10].value,
              weight: e.target[11].value - 2.5,
              sets: e.target[12].value,
              reps: 5,
            },
          },
          duration: 120,
          date: new Date(),
        };
        axios
          .post("/exercises/add", failedResults)
          .then((res) => console.log(res.data));

        window.localStorage.clear();
        window.location = "/";
        return;
      } else {
        return;
      }
    }
  }

  render() {
    return (
      <WorkoutStyle>
        <div className="container">
          <form onSubmit={this.onSubmit}>
            {this.state.init ? this.exerciseList() : "Loading ..."}
          </form>
        </div>
      </WorkoutStyle>
    );
  }
}
