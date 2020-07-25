import React from "react";
import { Stack } from "@chakra-ui/core";
import { WorkoutCard } from "../WorkoutCard/WorkoutCard";

export class WorkoutList extends React.Component {
  render() {
    return (
      <Stack>
        {this.props.workouts && this.props.workouts.map((workout) => {
          return <WorkoutCard {...workout} />;
        })}
      </Stack>
    );
  }
}
