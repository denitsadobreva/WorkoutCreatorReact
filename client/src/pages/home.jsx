import React from "react";
import { Stack, Image, Box } from "@chakra-ui/core";

export const Home = () => {
  return (
    <Stack isInline>
      <Stack spacing="4">
        <Box w="350px" textAlign="center">
          WorkoutCreator allows you to build your own workout from scratch to
          fit your fitness needs.{" "}
        </Box>
        <Box as="button">Create your workout</Box>
      </Stack>

      <Image
        w="750px"
        objectFit="cover"
        src={process.env.PUBLIC_URL + "/assets/undraw_personal_trainer_ote3.svg"}
        alt="Personal Trainer"
      />
    </Stack>
  );
};
