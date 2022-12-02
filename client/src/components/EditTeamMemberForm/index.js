import React, { useState } from "react";
import { Form, Header, Divider, Message } from "semantic-ui-react";
import { TagsInput } from "react-tag-input-component";

// add apollo graphql
import { useQuery, useMutation } from "@apollo/client";
import { GET_MY_TEAM } from "../../utils/queries";
import { EDIT_TEAM_MEMBER } from "../../utils/mutations";

const EditTeamMemberForm = (props) => {
  // state logic
  // set state for alert
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [inputs, setInputs] = useState({
    id: props.id,
    name: props.name,
    email: props.email,
    phoneNumber: props.phoneNumber,
    mailingAddress: props.mailingAddress,
    pocName: props.pocName,
    pocPhoneNumber: props.pocPhoneNumber,
    pocRelationship: props.pocRelationship,
  });

  // Text Area State
  const [familySituation, setFamilySituation] = useState(props.familySituation);
  const [notes, setNotes] = useState(props.notes);

  // Tag State
  const [skills, setSkills] = useState(props.skills);
  const [responsibilities, setResponsibilities] = useState(
    props.responsibilities
  );
  const [personalInterests, setPersonalInterests] = useState(
    props.personalInterests
  );

  // add addUser mutation
  const [editTeamMember] = useMutation(EDIT_TEAM_MEMBER);

  // This is just to refresh the team cache
  const { loading, error, data, refetch } = useQuery(GET_MY_TEAM);
  const teamData = data?.team || [];

  // logic goes here
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleFamilySituationChange = (event) => {
    setFamilySituation(event.target.value);
  };

  const handleNotesChange = (event) => {
    setNotes(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (inputs.name) {
      try {
        // save to the database
        // call editTeamMember mutation
        const { data } = await editTeamMember({
          variables: {
            ...inputs,
            familySituation,
            notes,
            skills,
            responsibilities,
            personalInterests,
          },
        });

        setErrorMessage("");
        setSuccessMessage(data?.editTeamMember.message);
        refetch(); // refresh the my team cache

        // also need to refetch the charts... somehow
      } catch (err) {
        setErrorMessage(err.message);
        setSuccessMessage("");
      }
    }
  };

  return (
    <div className="teamInformation">
      <Form onSubmit={handleFormSubmit}>
        <Header size="medium">Contact Info</Header>
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

        <Header size="medium">Emergency POC</Header>
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

        <Header size="medium">Skills</Header>

        <TagsInput
          value={skills}
          onChange={setSkills}
          name="skills"
          placeHolder="enter skills"
        />
        <em>press enter or comma to add new tag</em>

        <Divider></Divider>

        <Header size="medium">Responsibilities</Header>
        <TagsInput
          value={responsibilities}
          onChange={setResponsibilities}
          name="responsibilities"
          placeHolder="enter responsibilities"
        />
        <em>press enter or comma to add new tag</em>

        <Divider></Divider>
        <Header size="medium">Personal Details</Header>

        <Form.TextArea
          label="Family Situation"
          name="familySituation"
          value={familySituation}
          onChange={handleFamilySituationChange}
        />

        <Form.TextArea
          label="Notes"
          name="notes"
          value={notes}
          onChange={handleNotesChange}
        />

        <Header size="tiny">Interests</Header>
        <TagsInput
          value={personalInterests}
          onChange={setPersonalInterests}
          name="personalInterests"
          placeHolder="enter personal interests"
        />
        <em>press enter or comma to add new tag</em>

        <Divider></Divider>

        <Form.Button primary center>
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

export default EditTeamMemberForm;
