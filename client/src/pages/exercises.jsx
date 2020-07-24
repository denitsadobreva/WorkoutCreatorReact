import React from "react";
import { Heading, Spinner, Grid } from "@chakra-ui/core";
import { inject, observer } from "mobx-react";
import { computed } from "mobx";
import { ExerciseCard } from "../components";

@inject("exercises")
@observer
export class Exercises extends React.Component {
  constructor(props) {
    super(props);

    this.exerciseList = this.props.exercises.Exercises.getInstance();
  }

  @computed
  get listExercises() {
    return this.exerciseList.exercises.map((exercise) => (
      <ExerciseCard key={exercise._id} {...exercise} />
    ));
  }

  render() {
    return (
      <div>
        <Heading textAlign="center" mb="1rem">Exercises</Heading>
        <div>
          {this.exerciseList.exercises.length ? (
            <Grid templateColumns="repeat(4, 1fr)" gap={6}>{this.listExercises}</Grid>
          ) : (
            <Spinner size="xl" />
          )}
        </div>
      </div>
    );
  }
}
