import React from "react";
import { Route, Switch } from "react-router-dom";
import {
  Home,
  Exercises,
  Login,
  Register,
  Profile,
  CreateWorkout,
  Workout,
  NotFound,
} from "../pages";

export const Routes = (props) => {
  return (
    <section className="container">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/exercises" component={Exercises} />
        <Route exact path="/create" component={CreateWorkout} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/workouts/:id" component={Workout} />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};
