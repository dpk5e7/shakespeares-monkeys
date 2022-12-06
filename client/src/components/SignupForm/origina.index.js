import React, { useState } from "react";
import { Form, Button, Checkbox, Message } from "semantic-ui-react";

import Auth from "../../utils/auth";

// add apollo graphql
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../utils/mutations";

const SignupForm = () => {
  // set state for alert
  const [errorMessage, setErrorMessage] = useState("");

  const [inputs, setInputs] = useState({});

  const [checked, setChecked] = useState(false);
  const handleCheck = () => setChecked(!checked);

  // add addUser mutation
  const [addUser] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (inputs.username && inputs.email && inputs.password && checked) {
      try {
        // call addUser mutation
        const { data } = await addUser({
          variables: { ...inputs },
        });

        const { token, user } = data.addUser;

        Auth.login(token);
      } catch (err) {
        setErrorMessage(err.Message);
      }

      setInputs({
        username: "",
        email: "",
        password: "",
        conditions: false,
      });
    }
  };

  return (
    <>
      <Form onSubmit={handleFormSubmit}>
        <Form.Field required>
          <label>User Name</label>
          <input
            name="username"
            placeholder="User Name"
            value={inputs.username || ""}
            onChange={handleChange}
          />
        </Form.Field>
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
        <Form.Field>
          <Checkbox
            onClick={handleCheck}
            checked={checked}
            label="I agree to the Terms and Conditions"
          />
        </Form.Field>
        <Button
          primary
          type="submit"
          disabled={
            !(inputs.username && inputs.email && inputs.password && checked)
          }
        >
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

export default SignupForm;
