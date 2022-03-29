import React, { Component } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import moment from "moment";
import Calendar from "react-calendar";

import { ExercisesListStyle } from "../components/styles/ExercisesList.styles";

// SESSIONS, PROGRESS, CALENDAR COMPONENTS

const Exercise = (props) => {
  const { exercise, lenght } = props;
  const objValues = Object.values(exercise.workout);
  return (
    <div className="mx-auto">
      <div className="sm:w-90 md:w-4/5 lg:w-4/5 mx-auto my-2 border border-slate-800 rounded-xl p-4 shadow-lg text-white bg-dark">
        <div className="flex">
          <div className="block">
            <h2 className="workout-type text-xl font-medium">
              Workout: {exercise.exercisetype ? "A" : "B"}
            </h2>
            <div className="date">{exercise.date.substring(0, 10)}</div>
          </div>

          {lenght > 2 ? (
            <a
              className="delete-btn ml-auto my-auto"
              href="#"
              onClick={() => {
                props.deleteExercise(exercise._id);
              }}
            >
              Delete
            </a>
          ) : (
            ""
          )}
        </div>

        <ul className="mx-auto pb-4">
          {objValues.map((item) => {
            if (item.name) {
              return (
                <li key={item._id} className="border-b-2 border-slate-500">
                  <div className="flex">
                    <p className="grow">{item.name}</p>
                    <p>{`${item.weight} Kg`}</p>
                  </div>
                </li>
              );
            }
          })}
        </ul>
      </div>
    </div>
  );
};

export default class ExercisesList extends Component {
  constructor(props) {
    super(props);

    this.deleteExercise = this.deleteExercise.bind(this);

    this.state = { exercises: [], tabNumber: 1 };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3001/exercises/")
      .then((response) => {
        this.setState({ exercises: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteExercise(id) {
    axios.delete("http://localhost:3001/exercises/" + id).then((response) => {
      console.log(response.data);
    });

    this.setState({
      exercises: this.state.exercises.filter((el) => el._id !== id),
    });
  }

  exerciseList() {
    return this.state.exercises.map((currentexercise) => {
      return (
        <Exercise
          lenght={this.state.exercises.length}
          exercise={currentexercise}
          deleteExercise={this.deleteExercise}
          key={currentexercise._id}
        />
      );
    });
  }

  render() {
    const benchWeights = [];
    const shoulderPressWeights = [];
    const rowWeights = [];
    const DeadliftWeights = [];

    const exercises = this.state.exercises;
    const dates = exercises.map((item) => {
      return item.date.substring(0, 10);
    });

    const squatWeights = exercises.map((item) => {
      return item.workout.squat.weight;
    });

    const shoulderPressStats = exercises.map((item) => {
      if (item.workout.shoulderpress) {
        return shoulderPressWeights.push(item.workout.shoulderpress.weight);
      }
    });

    const rowStats = exercises.map((item) => {
      if (item.workout.row) {
        return rowWeights.push(item.workout.row.weight);
      }
    });

    const deadliftStats = exercises.map((item) => {
      if (item.workout.deadlift) {
        return DeadliftWeights.push(item.workout.deadlift.weight);
      }
    });

    return (
      <ExercisesListStyle>
        <>
          <h1 className="text-4xl font-medium text-center">History</h1>

          <ul className="tabs flex flex-wrap -mb-px justify-center mb-4">
            <li className="mr-2">
              <button
                onClick={() => this.setState({ tabNumber: 1 })}
                className={
                  this.state.tabNumber == 1
                    ? "transition-all inline-block py-4 px-4 text-sm font-medium text-center text-white rounded-t-lg border-b-2 border-white-600 active dark:text-white-500 dark:border-blue-500"
                    : "transition-all inline-block py-4 px-4 text-sm font-medium text-center text-gray-500 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300"
                }
                aria-current="page"
              >
                Sessions
              </button>
            </li>
            <li className="mr-2">
              <button
                onClick={() => this.setState({ tabNumber: 2 })}
                className={
                  this.state.tabNumber == 2
                    ? "transition-all inline-block py-4 px-4 text-sm font-medium text-center text-white rounded-t-lg border-b-2 border-white-600 active dark:text-white-500 dark:border-blue-500"
                    : "transition-all inline-block py-4 px-4 text-sm font-medium text-center text-gray-500 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300"
                }
              >
                Progress
              </button>
            </li>
            <li className="mr-2">
              <button
                onClick={() => this.setState({ tabNumber: 3 })}
                className={
                  this.state.tabNumber == 3
                    ? "transition-all inline-block py-4 px-4 text-sm font-medium text-center text-white rounded-t-lg border-b-2 border-white-600 active dark:text-white-500 dark:border-blue-500"
                    : "transition-all inline-block py-4 px-4 text-sm font-medium text-center text-gray-500 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300"
                }
              >
                Calendar
              </button>
            </li>
          </ul>
          {this.state.tabNumber == 1 && this.exerciseList()}
          {this.state.tabNumber == 2 && (
            <div className="sm:w-90 md:w-4/5 lg:w-4/5 mx-auto my-2">
              <Line
                datasetIdKey="id"
                data={{
                  labels: dates,
                  datasets: [
                    {
                      id: 1,
                      label: "Squat",
                      backgroundColor: "#fff",
                      borderColor: "#fbfbfb",
                      data: squatWeights,
                    },
                    {
                      id: 2,
                      label: "Bench",
                      backgroundColor: "red",
                      borderColor: "red",
                      data: benchWeights,
                    },
                    {
                      id: 3,
                      label: "Shoulder press",
                      backgroundColor: "green",
                      borderColor: "green",
                      data: shoulderPressWeights,
                    },
                    {
                      id: 4,
                      label: "Row",
                      backgroundColor: "blue",
                      borderColor: "blue",
                      data: rowWeights,
                    },
                    {
                      id: 5,
                      label: "Deadlift",
                      backgroundColor: "black",
                      borderColor: "black",
                      data: DeadliftWeights,
                    },
                  ],
                }}
              />
            </div>
          )}
          {this.state.tabNumber == 3 && (
            <Calendar
              className="mx-auto sm:w-4/5 lg:w-1/2 my-2 rounded-xl p-4 text-white bg-dark shadow-lg text-center"
              tileClassName={({ date, view }) => {
                if (
                  dates.find((x) => x === moment(date).format("YYYY-MM-DD"))
                ) {
                  return "highlight";
                }
              }}
            />
          )}
        </>
      </ExercisesListStyle>
    );
  }
}
