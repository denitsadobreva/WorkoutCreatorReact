import React from "react";
import { Stack, Image, Box } from "@chakra-ui/core";

export const Home = () => {
  return (
    <Stack isInline>
      <Stack>
        <Box size="350px">
          WorkoutCreator allows you to build your own workout from scratch to
          fit your fitness needs.{" "}
        </Box>
        <Box as="button">Create your workout</Box>
      </Stack>

      <Image
        w="750px"
        objectFit="cover"
        src={process.env.PUBLIC_URL + "/assets/personal_trainer.svg"}
        alt="Personal Trainer"
      />
    </Stack>
  );
};
