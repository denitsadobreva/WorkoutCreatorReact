import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
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
import { PrivateRoute } from "./PrivateRoute";
import { inject, observer } from "mobx-react";

@inject("user")
@observer
export class Routes extends React.Component {
  render() {
    return (
      <section className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register">
            {this.props.user.authenticated ? (
              <Redirect to="/profile" />
            ) : (
              <Register />
            )}
          </Route>
          <Route exact path="/login">
            {this.props.user.authenticated ? (
              <Redirect to="/profile" />
            ) : (
              <Login />
            )}
          </Route>
          <Route exact path="/exercises" component={Exercises} />
          <PrivateRoute exact path="/create" component={CreateWorkout} />
          <PrivateRoute exact path="/profile" component={Profile} />
          <PrivateRoute exact path="/workouts/:id" component={Workout} />
          <Route component={NotFound} />
        </Switch>
      </section>
    );
  }
}
