import React from "react";
import { Heading, Spinner, Grid } from "@chakra-ui/core";
import { inject, observer } from "mobx-react";
import { computed } from "mobx";
import { ExerciseCard } from "../components";

@inject("exercises")
@observer
export class Exercises extends React.Component {
  @computed
  get listExercises() {
    return this.props.exercises.exercises.map((exercise) => (
      <ExerciseCard key={exercise._id} {...exercise} />
    ));
  }

  render() {
    return (
      <div>
        <Heading textAlign="center" mb="1rem">Exercises</Heading>
        <div>
          {this.props.exercises.exercises.length ? (
            <Grid templateColumns="repeat(4, 1fr)" gap={6}>{this.listExercises}</Grid>
          ) : (
            <Spinner size="xl" color="blue" thickness="4px" mr="auto" ml="auto" />
          )}
        </div>
      </div>
    );
  }
}
