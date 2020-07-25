import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import App from "./App";
import { Exercises } from './stores/exercises';
import { User } from './stores/user';
import { Workout } from './stores/workout';

const exercises = new Exercises();
const user = new User();
const workout = new Workout();

window.exercises = exercises;
window.user = user;
window.workout = workout;

ReactDOM.render(
  <Provider exercises={exercises} user={user} workout={workout}>
    <App />
  </Provider>,
  document.getElementById("root")
);
