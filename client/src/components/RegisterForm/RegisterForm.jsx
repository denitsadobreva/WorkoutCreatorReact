import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Input,
  InputGroup,
  Button,
  InputRightElement,
  Stack,
  Text,
  Link,
} from "@chakra-ui/core";

export class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
  }

  handleTogglePassword = () => {
    this.setState({ show: !this.state.show });
  };

  get passwordField() {
    return (
      <InputGroup size="md">
        <Input
          pr="4.5rem"
          type={this.state.show ? "text" : "password"}
          placeholder="Enter password"
        />
        <InputRightElement width="4.5rem" size="sm">
          <Button h="1.75rem" size="sm" onClick={this.handleTogglePassword}>
            {this.state.show ? "Hide" : "Show"}
          </Button>
        </InputRightElement>
      </InputGroup>
    );
  }

  render() {
    return (
      <div>
        <Input size="md" placeholder="Enter email" />
        {this.passwordField}
        <Stack>
          <Button>Sign Up</Button>
          <Text>
            Have an account already?{" "}
            <Link as={RouterLink} to="/login">
              Log in now.
            </Link>
          </Text>
        </Stack>
      </div>
    );
  }
}
