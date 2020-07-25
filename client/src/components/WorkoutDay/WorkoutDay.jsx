import React from "react";
import { inject, observer } from "mobx-react";
import { Select, SelectOption } from "@chakra-ui/core";

@inject("exercises")
@observer
export class WorkoutDay extends React.Component {
  get selectRow() {
    return (
      <Select>
        {this.props.exercises.exercises.map((exercise) => {
          return <option key={exercise._id} value={exercise._id}>{exercise.name}</option>;
        })}
      </Select>
    );
  }

  render() {
    return <div>{this.selectRow}</div>;
  }
}
