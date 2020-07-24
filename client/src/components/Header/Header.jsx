import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Heading, Box, Flex, Link } from "@chakra-ui/core";

export class Header extends React.Component {
  get publicRoutes() {
    return (
      <Flex align="center" justify="space-around">
        <Link as={RouterLink} to="/exercises">
          Exercises
        </Link>
        <Link as={RouterLink} to="/register">
          Sign Up
        </Link>
        <Link as={RouterLink} to="/login">
          Log In
        </Link>
      </Flex>
    );
  }

  get privateRoutes() {
    return (
      <Flex align="center" justify="space-around">
        <Link as={RouterLink} to="/exercises">
          Exercises
        </Link>
        <Link as={RouterLink} to="/create">
          Create Workout
        </Link>
        <Link as={RouterLink} to="/profile">
          My Profile
        </Link>
        <Link as={RouterLink} to="/login">
          Log Out
        </Link>
      </Flex>
    );
  }

  render() {
    const boxProps = {
      pos: "fixed",
      as: "header",
      top: "0",
      zIndex: "4",
      left: "0",
      right: "0",
      borderBottomWidth: "1px",
      borderBottomStyle: "solid",
      borderColor: "rgb(226, 232, 240)",
      width: "100%",
      height: "4rem",
      bg: "white",
    };

    const authenticated = true;

    return (
      <Box {...boxProps}>
        <Flex align="center" justify="space-between">
          <Heading>Workout Creator</Heading>
          <Box>{authenticated ? this.privateRoutes : this.publicRoutes}</Box>
        </Flex>
      </Box>
    );
  }
}
