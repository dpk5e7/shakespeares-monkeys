import React, { useState } from "react";
import { Form, Header, Divider, Message } from "semantic-ui-react";

// add apollo graphql
import { useMutation } from "@apollo/client";
import { ADD_TEAM_MEMBER } from "../utils/mutations";

const TeamMember = () => {
  // state logic
  // set state for alert
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const [inputs, setInputs] = useState({});

  // add addUser mutation
  const [addTeamMember] = useMutation(ADD_TEAM_MEMBER);

  // logic goes here
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (inputs.name) {
      try {
        // save to the database
        // call addTeamMember mutation
        const { data } = await addTeamMember({
          variables: { ...inputs },
        });

        setErrorMessage("");
        setSuccessMessage(data?.addTeamMember.message);
      } catch (err) {
        setErrorMessage(err.message);
        setSuccessMessage("");
      }

      setInputs({
        name: "",
        email: "",
        phoneNumber: "",
        mailingAddress: "",
        pocName: "",
        pocPhoneNumber: "",
        pocRelationship: "",
      });
    }
  };

  return (
    <div className="teamInformation">
      <Form onSubmit={handleFormSubmit}>
        <Header>Contact Info</Header>
        <Form.Group>
          <Form.Field
            label="Name:"
            name="name"
            control="input"
            type="text"
            value={inputs.name}
            onChange={handleChange}
            required
          ></Form.Field>
          <Form.Field
            label="Email:"
            name="email"
            control="input"
            type="text"
            value={inputs.email || ""}
            onChange={handleChange}
          ></Form.Field>
          <Form.Field
            label="Phone Number:"
            name="phoneNumber"
            control="input"
            type="text"
            value={inputs.phoneNumber || ""}
            onChange={handleChange}
          ></Form.Field>
          <Form.Field
            label="Mailing Address"
            name="mailingAddress"
            control="input"
            type="text"
            value={inputs.mailingAddress || ""}
            onChange={handleChange}
          ></Form.Field>
        </Form.Group>
        <Divider></Divider>

        <Header>Emergency POC</Header>
        <Form.Group>
          <Form.Field
            label="Name:"
            name="pocName"
            control="input"
            type="text"
            value={inputs.pocName || ""}
            onChange={handleChange}
          ></Form.Field>
          <Form.Field
            label="Phone Number:"
            name="pocPhoneNumber"
            control="input"
            type="text"
            value={inputs.pocPhoneNumber || ""}
            onChange={handleChange}
          ></Form.Field>
          <Form.Field
            label="Relationship:"
            name="pocRelationship"
            control="input"
            type="text"
            value={inputs.pocRelationship || ""}
            onChange={handleChange}
          ></Form.Field>
        </Form.Group>
        <Divider></Divider>
        <Form.Button center>Submit</Form.Button>
        {successMessage && (
          <Message positive>
            <Message.Header>{successMessage}</Message.Header>
          </Message>
        )}
        {errorMessage && (
          <Message negative>
            <Message.Header>{errorMessage}</Message.Header>
          </Message>
        )}
      </Form>
    </div>
  );
};

export default TeamMember;
