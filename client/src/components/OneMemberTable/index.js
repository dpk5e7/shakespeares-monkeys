import { Table } from "semantic-ui-react";
import { Icon } from "semantic-ui-react";
import { Button } from "semantic-ui-react";

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
    <div style={{}}>
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
            <Table.Cell colSpan="1">
              <h5>
                <Icon name="mail" /> Email:{" "}
              </h5>
              {email}
            </Table.Cell>
            <Table.Cell colSpan="1" collapsing>
              <h5>
                <Icon name="phone" /> Phone:
              </h5>
              {phoneNumber}
            </Table.Cell>
            <Table.Cell colSpan="1" collapsing>
              <h5>
                <Icon name="home" /> Mailing Address:{" "}
              </h5>
              {mailingAddress}
            </Table.Cell>
            <Table.Cell colSpan="1" collapsing>
              <br></br>
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
            <Table.Cell colSpan="" collasping>
              {experience}
            </Table.Cell>
            <Table.Cell colSpan="1" collapsing>
              <ul style={{ paddingLeft: 20 }}>
                {skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </Table.Cell>
            <Table.Cell colSpan="1" collasping>
              <ul style={{ paddingLeft: 20 }}>
                {training.map((train) => (
                  <li key={train}>{train}</li>
                ))}
              </ul>
            </Table.Cell>

            <Table.Cell colSpan="2" collapsing>
              <ul style={{ paddingLeft: 20 }}>
                {responsibilities.map((responsibility) => (
                  <li key={responsibility}>{responsibility}</li>
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
                <Icon name="calendar"></Icon>Important Upcoming Dates{" "}
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

          {importantDates.map((impDate) => {
            return (
              <Table.Row>
                <Table.Cell colSpan="2">{impDate.importantDate}</Table.Cell>
                <Table.Cell colSpan="2">{impDate.description}</Table.Cell>
              </Table.Row>
            );
          })}

          <Table.Row>
            <Table.Cell colSpan="2" collapsing>
              <h3>Personal Interests</h3>
              {personalInterests}
            </Table.Cell>
            <Table.Cell colSpan="1" collapsing>
              <h3>Family Situation </h3>
              {familySituation}
            </Table.Cell>
            <Table.Cell colSpan="1" collapsing>
              <h3>Notes</h3>
              {notes}
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}
