import React from "react";
import { Heading, Text } from "@chakra-ui/core";
import { inject, observer } from "mobx-react";
import { WorkoutList } from "../components";

@inject("workout")
@observer
export class Profile extends React.Component {
  componentDidMount = async () => {
    await this.props.workout.fetchWorkouts();
  };
  render() {
    return (
      <div>
        <Heading textAlign="center" mb="1rem">
          My Profile
        </Heading>
        <Text fontSize="lg">Workouts</Text>
        <WorkoutList workouts={this.props.workout.workouts} />
      </div>
    );
  }
}
