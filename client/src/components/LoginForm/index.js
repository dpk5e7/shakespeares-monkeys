import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button, Message } from "semantic-ui-react";

import Auth from "../../utils/auth";

// add apollo graphql
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../utils/mutations";

import { useUserContext } from "../../utils/UserContext";
import { LOGIN } from "../../utils/actions";

const LoginForm = () => {
  // set state for alert
  const [errorMessage, setErrorMessage] = useState("");

  const [inputs, setInputs] = useState({});

  // add loginUser mutation
  const [loginUser] = useMutation(LOGIN_USER);

  // add global state
  const [state, dispatch] = useUserContext();

  const navigate = useNavigate();

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

        if (user.is_locked) {
          throw new Error("This user account is locked.  Please contact the administrator.")
        }

        Auth.login(token);

        // set global state
        dispatch({
          type: LOGIN,
          user: { _id: user._id, username: user.username, is_admin: user.is_admin, is_locked: user.is_locked },
        });
      } catch (err) {
        setErrorMessage(err.message);
      }

      setInputs({
        email: "",
        password: "",
      });

      navigate("/");
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

