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
import { PrivateRoute } from './PrivateRoute';


export const Routes = (props) => {
  return (
    <section className="container">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/exercises" component={Exercises} />
        <PrivateRoute exact path="/create" component={CreateWorkout} />
        <PrivateRoute exact path="/profile" component={Profile} />
        <PrivateRoute exact path="/workouts/:id" component={Workout} />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};
