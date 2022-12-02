import { Table } from "semantic-ui-react"
import { Icon } from "semantic-ui-react"
import { Button } from "semantic-ui-react"

import ExportDates from "../ExportDates";

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
    notes
}) {
    return (
        <Table celled key={id}>
            <Table.Header>
            <Button size="large"><Icon name="print"/></Button>
                <Table.Row>
                    <Table.HeaderCell colSpan="8" textAlign="center"><h2>Team Member: {name}</h2></Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                <Table.Row>
                    <Table.Cell colSpan="8" collapsing><h3>Contact Info </h3>
                    </Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell colSpan="1">
                        <h5><Icon name="mail" /> Email: </h5>
                        {email}
                    </Table.Cell>
                    <Table.Cell colSpan="1" collapsing>
                        <h5><Icon name="phone" /> Phone:</h5>
                        {phoneNumber}
                    </Table.Cell>
                    <Table.Cell colSpan="2" collapsing>
                        <h5><Icon name="home" /> Mailing Address: </h5>
                        {mailingAddress}
                    </Table.Cell>
                    <Table.Cell colSpan="1" collapsing>
                        <h5><Icon name="emergency" /> EmergencyPOC: </h5>
                        Name: {emergencyPOCName} <br></br>
                        Relationship: {emergencyPOCRelationship}<br></br>
                        Phone Number: {emergencyPOCPhoneNumber}
                    </Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell colSpan="4" collapsing><h3>Important Upcoming Dates </h3>
                        <ExportDates />
                    </Table.Cell>
                    <Table.Cell colSpan="2" collapsing>
                        <h3>Family Situation <br></br> </h3>
                        {familySituation}
                    </Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell colSpan="2" collapsing textAlign="center" ><h3>Experience </h3>
                    </Table.Cell>
                    <Table.Cell colSpan="2" collapsing textAlign="center">
                        <h3>Skills </h3>
                    </Table.Cell>
                    <Table.Cell colSpan="2" collapsing textAlign="center">
                        <h3>Responsibilities </h3>
                    </Table.Cell>

                </Table.Row>
                <Table.Row>
                    <Table.Cell colSpan="1" collasping>
                        <Icon name="calendar outline" />Number of Years at Company: <br></br>
                        {experience}
                    </Table.Cell>
                    <Table.Cell colSpan="1" collasping>
                        <Icon name="calendar outline" /> Training: <br></br>
                        {training}
                    </Table.Cell>
                    <Table.Cell colSpan="1" collapsing>
                        <Icon name="cog" /> Skill 1: <br></br>
                        {skills}
                    </Table.Cell>
                    <Table.Cell colSpan="1" collapsing>
                        <Icon name="cog" /> Skill 2
                    </Table.Cell>
                    <Table.Cell colSpan="1" collapsing>
                        <Icon name="cog" /> Responsibility 1: <br></br>
                        {responsibilities}
                    </Table.Cell>
                    <Table.Cell colSpan="1" collapsing>
                        <Icon name="cog" /> Responsibility 2
                    </Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell colSpan="1" collapsing>
                        <h3>Personal Interests</h3> <br></br>
                        {personalInterests}
                    </Table.Cell>
                    <Table.Cell colSpan="1" collapsing>
                        <h3>Notes</h3> <br></br>
                        {notes}
                    </Table.Cell>

                </Table.Row>
            </Table.Body>
            <Button>
                <Icon name="male" />
            </Button>
        </Table>

    );
}



