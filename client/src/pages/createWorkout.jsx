import React from "react";
import { inject } from "mobx-react";
import { Heading, Box, Input, Textarea, Button, Text } from "@chakra-ui/core";
import { SelectExercise } from "../components";

@inject("workout")
export class CreateWorkout extends React.Component {
  handleChangeName = (e) => {
    this.props.workout.setName(e.target.value);
  };

  handleChangeDescription = (e) => {
    this.props.workout.setDescription(e.target.value);
  };

  render() {
    return (
      <div>
        <Heading textAlign="center" mb="1rem">
          Create Workout
        </Heading>
        <Box>
          <Input
            placeholder="Name"
            mb="0.5rem"
            onChange={this.handleChangeName}
          />
          <Textarea
            placeholder="Description"
            mb="0.5rem"
            onChange={this.handleChangeDescription}
          />
        </Box>
        <Box mb="1rem">
          <Text fontSize="lg">Exercises</Text>
          {this.props.workout.exercises.map((exercise, i) => {
            const handleSelect = (e) => {
              exercise.setExercise(e.target.value);
            };

            return (
              <SelectExercise
                key={i}
                onChangeSets={exercise.setSets}
                onChangeReps={exercise.setReps}
                onSelect={handleSelect}
              />
            );
          })}
        </Box>
        <Button variantColor="blue" onClick={this.props.workout.createWorkout}>
          Create
        </Button>
      </div>
    );
  }
}
