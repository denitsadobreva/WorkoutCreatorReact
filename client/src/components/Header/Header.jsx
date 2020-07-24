import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, Flex, Link } from "@chakra-ui/core";
import { FaDumbbell } from "react-icons/fa";

export class Header extends React.Component {
  get publicRoutes() {
    return (
      <Flex align="center" justify="space-around">
        <Link ml="10px" as={RouterLink} to="/">
          Home
        </Link>
        <Link ml="10px" as={RouterLink} to="/exercises">
          Exercises
        </Link>
        <Link ml="10px" as={RouterLink} to="/register">
          Sign Up
        </Link>
        <Link ml="10px" as={RouterLink} to="/login">
          Log In
        </Link>
      </Flex>
    );
  }

  get privateRoutes() {
    return (
      <Flex align="center" justify="space-around">
        <Link ml="10px" as={RouterLink} to="/">
          Home
        </Link>
        <Link ml="10px" as={RouterLink} to="/exercises">
          Exercises
        </Link>
        <Link ml="10px" as={RouterLink} to="/create">
          Create Workout
        </Link>
        <Link ml="10px" as={RouterLink} to="/profile">
          My Profile
        </Link>
        <Link ml="10px" as={RouterLink} to="/login">
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
      p: "1rem",
      pl: "3rem",
      pr: "3rem",
    };

    const authenticated = false;

    return (
      <Box {...boxProps}>
        <Flex align="center" justify="space-between">
          <Box
            fontSize="24px"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            w="208px"
          >
            <FaDumbbell /> Workout Creator
          </Box>
          <Box>{authenticated ? this.privateRoutes : this.publicRoutes}</Box>
        </Flex>
      </Box>
    );
  }
}
