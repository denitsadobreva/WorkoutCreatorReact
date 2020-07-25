import React from "react";
import { Box } from "@chakra-ui/core";

export class WorkoutCard extends React.Component {
  render() {
    return <Box textAlign="center">{this.props.name}</Box>;
  }
}
