import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import App from "./App";
import { Exercises } from './stores/exercises';
import { User } from './stores/user';

const exercises = new Exercises();
const user = new User();

window.exercises = exercises;
window.user = user;

ReactDOM.render(
  <Provider exercises={exercises} user={user}>
    <App />
  </Provider>,
  document.getElementById("root")
);
