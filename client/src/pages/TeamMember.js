import React, { useState } from "react";
import { Form, Header, Divider, Message } from "semantic-ui-react";

// build a form to match the model in teammember.js under models
// array of strings or objects for skills or have text area

// const handleFormSubmit = async (event) => {
//   event. preventDefault();
// }


const TeamMember = () => {
  // state logic
  // set state for alert
  const [errorMessage, setErrorMessage] = useState("");

  const [inputs, setInputs] = useState({});

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

      } catch (err) {
        setErrorMessage(err.Message);
      }

      setInputs({
        name: "",
        email: "",
        phoneNumber: "",
        mailingAddress: "",
        pocName: "",
        pocphoneNumber: "",
        relationship: ""
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
            name="pocphoneNumber"
            control="input"
            type="text"
            value={inputs.pocphoneNumber || ""}
            onChange={handleChange}
          ></Form.Field>
          <Form.Field
            label="Relationship:"
            name="relationship"
            control="input"
            type="text"
            value={inputs.relationship || ""}
            onChange={handleChange}
          ></Form.Field>
        </Form.Group>
        <Divider></Divider>
        <Form.Button center>Submit</Form.Button>
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
