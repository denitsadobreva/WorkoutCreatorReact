import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { inject } from "mobx-react";
import {
  Input,
  InputGroup,
  Button,
  InputRightElement,
  Stack,
  Text,
  Link,
} from "@chakra-ui/core";

@inject("user")
export class LoginForm extends React.Component {
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
          onChange={this.handlePasswordChange}
          mb="0.5rem"
        />
        <InputRightElement width="4.5rem" size="sm">
          <Button h="1.75rem" size="sm" onClick={this.handleTogglePassword}>
            {this.state.show ? "Hide" : "Show"}
          </Button>
        </InputRightElement>
      </InputGroup>
    );
  }

  handleEmailChange = (e) => {
    this.props.user.setEmail(e.target.value);
  };

  handlePasswordChange = (e) => {
    this.props.user.setPassword(e.target.value);
  };

  handleLogIn = async () => {
    await this.props.user.login();
  };

  render() {
    return (
      <div>
        <Input
          size="md"
          placeholder="Enter email"
          onChange={this.handleEmailChange}
          mb="0.5rem"
        />
        {this.passwordField}
        <Stack>
          <Button onClick={this.handleLogIn}>Log In</Button>
          <Text>
            No profile yet?{" "}
            <Link as={RouterLink} to="/register">
              Sign up now.
            </Link>
          </Text>
        </Stack>
      </div>
    );
  }
}
