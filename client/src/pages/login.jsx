import React from "react";
import { Heading } from "@chakra-ui/core";
import { LoginForm } from '../components';

export const Login = () => {
  return (
    <div>
      <Heading>Log In</Heading>
      <LoginForm />
    </div>
  );
};
