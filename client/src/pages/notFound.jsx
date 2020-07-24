import React from "react";
import { Image, Stack, Text } from "@chakra-ui/core";

export const NotFound = () => {
  return (
    <Stack>
      <Image
        width="700px"
        src={process.env.PUBLIC_URL + "/assets/undraw_working_out_6psf.svg"}
      />
      <Text fontSize="lg" textAlign="center">
        Oh, no! It seems you got lost. The requested page does not exist.
      </Text>
    </Stack>
  );
};
