import React, { useState } from "react";
import { Form, Header, Divider, Message } from "semantic-ui-react";

// add apollo graphql
import { useMutation, useQuery } from "@apollo/client";
import { GET_MY_TEAM } from "../utils/queries";
import { ADD_TEAM_MEMBER } from "../utils/mutations";

const AddTeamMember = () => {
  // state logic
  // set state for alert
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    mailingAddress: "",
    pocName: "",
    pocPhoneNumber: "",
    pocRelationship: "",
  });

  // add addUser mutation
  const [addTeamMember] = useMutation(ADD_TEAM_MEMBER);

  // This is just to refresh the team cache
  const { loading, error, data, refetch } = useQuery(GET_MY_TEAM);
  const teamData = data?.team || [];

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
        refetch(); // refresh the my team cache
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
        <Form.Button primary center disabled={!inputs.name}>
          Submit
        </Form.Button>
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

export default AddTeamMember;
