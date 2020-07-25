import React from "react";
import api from "../utils/api";
import { observable } from "mobx";
import { inject, observer } from "mobx-react";
import { Heading, Spinner, Grid } from "@chakra-ui/core";
import { ExerciseCard } from "../components";

@inject("exercises")
@observer
export class Workout extends React.Component {
  workoutId = this.props.match.params.id;
  @observable exercises = [];

  componentDidMount = async () => {
    const res = await api.get(`/workouts/${this.workoutId}`, {
      headers: {
        "x-auth-token": localStorage.getItem("jwt"),
      },
    });

    this.workout = res.data;

    if (!this.props.exercises.exercises.length) {
      await this.props.exercises.fetchExercises();
    }

    this.exercises = this.workout.exercises
      .map((exercise) => {
        return {
          exercise: this.props.exercises.exerciseMap.get(exercise.exercise),
          reps: exercise.reps,
          sets: exercise.sets,
        };
      })
      .filter(({ exercise }) => !!exercise);
  };

  render() {
    return (
      <div>
        {this.exercises.length ? (
          <div>
            <Heading>{this.workout.name}</Heading>
            <Grid templateColumns="repeat(4, 1fr)" gap={6}>
              {this.exercises.map((exercise) => (
                <ExerciseCard
                  {...exercise.exercise}
                  reps={exercise.reps}
                  sets={exercise.sets}
                />
              ))}
            </Grid>
          </div>
        ) : (
          <Spinner />
        )}
      </div>
    );
  }
}
