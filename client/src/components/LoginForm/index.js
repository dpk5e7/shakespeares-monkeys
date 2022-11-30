import React, { useState } from "react";
import { Form, Button, Checkbox, Message } from "semantic-ui-react";

import Auth from "../../utils/auth";

// add apollo graphql
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../utils/mutations";

const LoginForm = () => {
  // set state for alert
  const [errorMessage, setErrorMessage] = useState("");

  const [inputs, setInputs] = useState({});

  // add loginUser mutation
  const [loginUser] = useMutation(LOGIN_USER);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (inputs.email && inputs.password) {
      try {
        // call loginUser mutation
        const { data } = await loginUser({
          variables: { ...inputs },
        });

        const { token, user } = data.login;

        Auth.login(token);
      } catch (err) {
        setErrorMessage(err.message);
      }

      setInputs({
        email: "",
        password: "",
      });
    }
  };

  return (
    <>
      <Form onSubmit={handleFormSubmit}>
        <Form.Field required>
          <label>Email Address</label>
          <input
            name="email"
            placeholder="Email Address"
            value={inputs.email || ""}
            onChange={handleChange}
          />
        </Form.Field>
        <Form.Field required>
          <label>Password</label>
          <input
            name="password"
            placeholder="Password"
            type="password"
            value={inputs.password || ""}
            onChange={handleChange}
          />
        </Form.Field>

        <Button type="submit" disabled={!(inputs.email && inputs.password)}>
          Submit
        </Button>
        {errorMessage && (
          <Message negative>
            <Message.Header>{errorMessage}</Message.Header>
          </Message>
        )}
      </Form>
    </>
  );
};

export default LoginForm;

