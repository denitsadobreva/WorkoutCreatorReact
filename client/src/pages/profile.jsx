import React from "react";
import { Heading, Text, Spinner } from "@chakra-ui/core";
import { inject, observer } from "mobx-react";
import { observable } from "mobx";
import { WorkoutList } from "../components";

@inject("workout")
@observer
export class Profile extends React.Component {
  @observable loading = true;

  componentDidMount = async () => {
    this.loading = true;
    await this.props.workout.fetchWorkouts();
    this.loading = false;
  };

  render() {
    return (
      <div>
        <Heading textAlign="center" mb="1rem">
          My Profile
        </Heading>
        <Text fontSize="xl">Workouts</Text>
        {this.loading ? (
          <Spinner />
        ) : this.props.workout.workouts.length ? (
          <WorkoutList workouts={this.props.workout.workouts} />
        ) : (
          "No workouts yet."
        )}
      </div>
    );
  }
}
