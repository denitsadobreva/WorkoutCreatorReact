import React from "react";
import { Link } from "react-router-dom";
import { Stack, Image, Box, Button } from "@chakra-ui/core";

export const Home = () => {
  return (
    <Stack isInline>
      <Stack spacing="4" align="center" justify="center">
        <Box w="350px" textAlign="center">
          WorkoutCreator allows you to build your own workout from scratch to
          fit your fitness needs.{" "}
        </Box>
        <Stack isInline align="center" justify="center">
          <Button variantColor="blue" variant="solid">
            <Link to="/create">Create a workout</Link>
          </Button>
          <Button variantColor="blue" variant="outline">
            <Link to="/register">Sign Up</Link>
          </Button>
        </Stack>
      </Stack>

      <Image
        w="750px"
        objectFit="cover"
        src={
          process.env.PUBLIC_URL + "/assets/undraw_personal_trainer_ote3.svg"
        }
        alt="Personal Trainer"
      />
    </Stack>
  );
};
