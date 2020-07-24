import React from "react";
import { Provider } from "mobx";
import { Heading } from "@chakra-ui/core";
import { inject } from "mobx-react";

@inject("exercises")
class Exercises extends React.Component {
  render() {
    return (
      <Provider>
        <Heading>Exercises</Heading>
      </Provider>
    );
  }
}

export { Exercises };
