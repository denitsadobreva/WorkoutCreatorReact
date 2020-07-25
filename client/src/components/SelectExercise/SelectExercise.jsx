import React from "react";
import { inject, observer } from "mobx-react";
import {
  Select,
  Stack,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Text,
} from "@chakra-ui/core";

@inject("exercises")
@observer
export class SelectExercise extends React.Component {
  render() {
    return (
      <Stack isInline justify="center" align="center" mb="1rem">
        <Select placeholder="Select exercise" onChange={this.props.onSelect}>
          {this.props.exercises.exercises.map((exercise) => {
            return (
              <option
                key={exercise._id}
                value={exercise._id}
              >
                {exercise.name}
              </option>
            );
          })}
        </Select>
        <NumberInput
          defaultValue={3}
          min={1}
          max={10}
          onChange={this.props.onChangeSets}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <Text>sets</Text>
        <NumberInput
          defaultValue={10}
          min={1}
          max={50}
          onChange={this.props.onChangeReps}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <Text>reps</Text>
      </Stack>
    );
  }
}
