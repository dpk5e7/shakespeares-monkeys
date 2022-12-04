import { Table, Icon, Button, Container } from "semantic-ui-react";

export default function OneMemberTable({
  id,
  name,
  email,
  phoneNumber,
  mailingAddress,
  emergencyPOCName,
  emergencyPOCPhoneNumber,
  emergencyPOCRelationship,
  experience,
  skills,
  responsibilities,
  training,
  familySituation,
  personalInterests,
  notes,
  importantDates,
}) {
  return (
    <Container>
      <Table
        style={{
          border: "none",
          width: "75%",
          display: "block",
          margin: "auto",
        }}
        celled
        key={id}
      >
        <Table.Header>
          <Button size="large">
            <Icon name="print" />
            Print!
          </Button>
          <Table.Row>
            <Table.HeaderCell colSpan="4">
              <h2>
                <Icon name="user"></Icon>Team Member: {name}
              </h2>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell
              style={{ background: "lightgrey" }}
              colSpan="4"
              collapsing
            >
              <h3>Contact Info </h3>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell colSpan="1" verticalAlign="top">
              <h5>
                <Icon name="mail" /> Email:{" "}
              </h5>
              {email}
            </Table.Cell>
            <Table.Cell colSpan="1" collapsing verticalAlign="top">
              <h5>
                <Icon name="phone" /> Phone:
              </h5>
              {phoneNumber}
            </Table.Cell>
            <Table.Cell colSpan="1" collapsing verticalAlign="top">
              <h5>
                <Icon name="home" /> Mailing Address:{" "}
              </h5>
              {mailingAddress}
            </Table.Cell>
            <Table.Cell colSpan="1" collapsing verticalAlign="top">
              <h5>
                <Icon name="emergency" /> EmergencyPOC:{" "}
              </h5>
              Name: {emergencyPOCName} <br></br>
              Relationship: {emergencyPOCRelationship}
              <br></br>
              Phone Number: {emergencyPOCPhoneNumber} <br></br>
              {""} <br></br>
            </Table.Cell>
          </Table.Row>

          <Table.Row style={{ background: "lightgrey" }}>
            <Table.Cell colSpan="1" collapsing textAlign="center">
              <h3>Experience </h3>
            </Table.Cell>
            <Table.Cell colSpan="1" collapsing textAlign="center">
              <h3>Skills </h3>
            </Table.Cell>
            <Table.Cell colSpan="1" collapsing textAlign="center">
              <h3>Training </h3>
            </Table.Cell>
            <Table.Cell colSpan="2" collapsing textAlign="center">
              <h3>Responsibilities </h3>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell colSpan="" collasping verticalAlign="top">
              {experience}
            </Table.Cell>
            <Table.Cell colSpan="1" collapsing verticalAlign="top">
              <ul style={{ paddingLeft: 20 }}>
                {skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </Table.Cell>
            <Table.Cell colSpan="1" collasping verticalAlign="top">
              <ul style={{ paddingLeft: 20 }}>
                {training.map((train, index) => (
                  <li key={index}>{train}</li>
                ))}
              </ul>
            </Table.Cell>

            <Table.Cell colSpan="2" collapsing verticalAlign="top">
              <ul style={{ paddingLeft: 20 }}>
                {responsibilities.map((responsibility, index) => (
                  <li key={index}>{responsibility}</li>
                ))}
              </ul>
            </Table.Cell>
            <Table.Row />
          </Table.Row>

          <Table.Row>
            <Table.Cell
              style={{ marginTop: "100px" }}
              textAlign="center"
              colSpan="4"
              collapsing
            >
              <h3>
                <Icon name="calendar"></Icon>Important Dates
              </h3>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell
              style={{ background: "lightgrey" }}
              colSpan="2"
              collapsing
            >
              <h4>Date</h4>
            </Table.Cell>
            <Table.Cell style={{ background: "lightgrey" }} colSpan="2">
              <h4>Description</h4>
            </Table.Cell>
          </Table.Row>

          {importantDates.map((impDate, index) => {
            return (
              <Table.Row key={index}>
                <Table.Cell colSpan="2">{impDate.importantDate}</Table.Cell>
                <Table.Cell colSpan="2">{impDate.description}</Table.Cell>
              </Table.Row>
            );
          })}

          <Table.Row>
            <Table.Cell colSpan="2" collapsing verticalAlign="top">
              <h3>Personal Interests</h3>
              <ul style={{ paddingLeft: 20 }}>
                {personalInterests.map((pi, index) => (
                  <li key={index}>{pi}</li>
                ))}
              </ul>
            </Table.Cell>
            <Table.Cell colSpan="1" collapsing verticalAlign="top">
              <h3>Family Situation </h3>
              {familySituation}
            </Table.Cell>
            <Table.Cell colSpan="1" collapsing verticalAlign="top">
              <h3>Notes</h3>
              {notes}
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </Container>
  );
}
