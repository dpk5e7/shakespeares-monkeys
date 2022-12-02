import { Table, Icon, Button } from "semantic-ui-react";
// import ExportSingleMember from "../../pages/ExportSingleMember";
import ExportDates from "../ExportDates"

export default function TeamMemberTable({
    id,
    name,
    email,
    phoneNumber,
    emergencyPOCName,
    emergencyPOCPhoneNumber,
    emergencyPOCRelationship,
    experience,
    skills,
    responsibilities,
    training,
    importantDates,
    importantDatesDescription,
}) {
    // const oneMemberLink = `/oneTeamMember/${id}`;
    const oneMemberLink = `/oneTeamMember/${id}`;

    return (
        <Table celled key={id}>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell textAlign="center" colSpan="3"><h2>Team Member: {name}</h2></Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                <Table.Row>
                    <Table.Cell colSpan="3" collapsing><h3>Contact Info </h3>
                    </Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>
                        <h5><Icon name="mail" /> Email: </h5>
                        {email}
                    </Table.Cell>
                    <Table.Cell collapsing>
                        <h5><Icon name="phone" /> Phone:</h5>
                        {phoneNumber}
                    </Table.Cell>
                    <Table.Cell collapsing>
                        <h5><Icon name="emergency" /> EmergencyPOC: </h5>
                        Name: {emergencyPOCName} <br></br>
                        Relationship: {emergencyPOCRelationship}<br></br>
                        Phone Number: {emergencyPOCPhoneNumber}
                    </Table.Cell>
                </Table.Row>
                <Table.Row>
                <Table.Cell colSpan="3" collapsing><h3>Important Upcoming Dates </h3>
                <ExportDates />
                </Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell colSpan="3" collapsing><h3>Experience </h3>
                    </Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell colSpan="1" collasping>
                        <Icon name="calendar outline" />Number of Years at Company: { }
                    </Table.Cell>
                    <Table.Cell colSpan="1" collasping>
                        <Icon name="calendar outline" /> Training: <br></br>
                        {training}
                    </Table.Cell>
                    <Table.Cell colSpan="1" collasping>
                        <Icon name="calendar outline" /> Past Employment: <br></br>
                        {experience}
                    </Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell colSpan="3" collapsing>
                        <h3>Skills </h3>
                    </Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell colSpan="1" collapsing>
                        <Icon name="cog" /> Skill 1: <br></br>
                        {skills}
                    </Table.Cell>
                    <Table.Cell colSpan="1" collapsing>
                        <Icon name="cog" /> Skill 2

                    </Table.Cell>
                    <Table.Cell colSpan="1" collapsing>
                        <Icon name="cog" /> Skill 3
                    </Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell colSpan="3" collapsing backgroundColor="lightblue">
                        <h3>Responsbilities </h3>
                    </Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell colSpan="1" collapsing>
                        <Icon name="cog" /> Responsibility 1: <br></br>
                        {responsibilities}
                    </Table.Cell>
                    <Table.Cell colSpan="1" collapsing>
                        <Icon name="cog" /> Responsibility 2
                    </Table.Cell>
                    <Table.Cell colSpan="1" collapsing>
                        <Icon name="cog" /> Responsibility 3
                    </Table.Cell>
                </Table.Row>
            </Table.Body>
            <Button compact primary icon as="a" href={oneMemberLink}>
        <Icon name="male" />
      </Button>
        </Table>
    );
}





