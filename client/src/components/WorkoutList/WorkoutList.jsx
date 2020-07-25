import React from "react";
import { Stack } from "@chakra-ui/core";
import { WorkoutCard } from "../WorkoutCard/WorkoutCard";

export class WorkoutList extends React.Component {
  render() {
    return (
      <Stack spacing={6}>
        {this.props.workouts && this.props.workouts.map((workout) => {
          return <WorkoutCard key={workout._id} {...workout} />;
        })}
      </Stack>
    );
  }
}
