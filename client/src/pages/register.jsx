import React from "react";
import { Heading } from "@chakra-ui/core";
import { RegisterForm } from "../components";

export const Register = () => {
  return (
    <div>
      <Heading textAlign="center" mb="1rem">Registration</Heading>
      <RegisterForm />
    </div>
  );
};
