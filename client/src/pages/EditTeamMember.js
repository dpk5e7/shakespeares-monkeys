import React from "react";
import { Form, Header, Divider } from "semantic-ui-react";

// build a form to match the model in teammember.js under models
// array of strings or objects for skills or have text area

// const handleFormSubmit = async (event) => {
//   event. preventDefault();
// }

const EditTeamMember = () => {
  return (
    <div className="teamInformation">
      <Form>
        <Header>Contact Info</Header>
        <Form.Group>
          <Form.Field
            label="Name:"
            name="name"
            control="input"
            type="text"
            required
          ></Form.Field>
          <Form.Field
            label="Email:"
            name="email"
            control="input"
            type="text"
          ></Form.Field>
          <Form.Field
            label="Phone Number:"
            name="phoneNumber"
            control="input"
            type="text"
          ></Form.Field>
          <Form.Field
            label="Mailing Address"
            name="mailingAddress"
            control="input"
            type="text"
          ></Form.Field>
        </Form.Group>
        <Form.Group>
          <Divider></Divider>
          <Header>Emergency POC</Header>
          <Form.Field
            label="Name:"
            name="name"
            control="input"
            type="text"
          ></Form.Field>
          <Form.Field
            label="Phone Number:"
            name="phoneNumber"
            control="input"
            type="text"
          ></Form.Field>
          <Form.Field
            label="Relationship:"
            name="relationship"
            control="input"
            type="text"
          ></Form.Field>
        </Form.Group>
        <Form.Group>
          <Divider></Divider>
          <Form.Field
            label="Family Situation:"
            name="familySituation"
            control="textarea"
            type="text"
          ></Form.Field>
        </Form.Group>
        <Form.Group>
          <Divider></Divider>
          <Form.Field
            label="Important Date:"
            name="importantDate"
            control="input"
            type="text"
          ></Form.Field>
          <Form.Field
            label="Description:"
            name="description"
            control="input"
            type="text"
          ></Form.Field>
        </Form.Group>
        <Form.Group>
          <Divider></Divider>
          <Form.Field
            label="Experience:"
            name="experience"
            control="textarea"
            type="text"
          ></Form.Field>
          <Form.Field
            label="Skills:"
            name="skills"
            control="textarea"
            type="text"
          ></Form.Field>
          <Form.Field
            label="Responsabilities:"
            name="responsibilities"
            control="textarea"
            type="text"
          ></Form.Field>
          <Form.Field
            label="Training:"
            name="training"
            control="textarea"
            type="text"
          ></Form.Field>
          <Form.Field
            label="Personal Interests:"
            name="personalInterests"
            control="textarea"
            type="text"
          ></Form.Field>
          <Form.Field
            label="Notes:"
            name="notes"
            control="textarea"
            type="text"
          ></Form.Field>
        </Form.Group>
        <Form.Button center>Submit</Form.Button>
      </Form>
    </div>
  );
};

export default EditTeamMember;
