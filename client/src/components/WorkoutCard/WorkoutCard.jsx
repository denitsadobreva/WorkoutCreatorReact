import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, Link } from "@chakra-ui/core";

export class WorkoutCard extends React.Component {
  render() {
    return (
      <Box
        rounded="lg"
        textAlign="left"
        w="500px"
        color="#2A69AC"
        bg="#EBF8FF"
        p="1rem"
        m="0.5rem"
      >
        <Link as={RouterLink} to={`/workouts/${this.props._id}`}>
          {this.props.name}
        </Link>
        <Box
          color="#4299E1"
          fontWeight="semibold"
          letterSpacing="wide"
          fontSize="xs"
          textTransform="uppercase"
          ml="2"
        >
          Created on {this.props.date}
        </Box>
        <Box>{this.props.description}</Box>
      </Box>
    );
  }
}
