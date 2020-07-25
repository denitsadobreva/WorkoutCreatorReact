import React from "react";
import { inject } from "mobx-react";
import { Heading, Box, Input, Textarea, Button } from "@chakra-ui/core";
import { WorkoutDay } from "../components";

@inject("workout")
export class CreateWorkout extends React.Component {
  render() {
    return (
      <div>
        <Heading textAlign="center" mb="1rem">
          Create Workout
        </Heading>
        <Box>
          <Input placeholder="Name" mb="0.5rem" />
          <Textarea placeholder="Description" mb="0.5rem" />
        </Box>
        <WorkoutDay />
        <Button onClick={this.props.workout.createWorkout}>Create</Button>
      </div>
    );
  }
}
