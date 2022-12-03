import { Table, Icon } from "semantic-ui-react";
import ExportDates from "../ExportDates"
// import { GET_ONE_TEAM_MEMBER } from "../../utils/queries";
// import UpcomingDates from "../components/UpcomingDates";

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
    mailingAddress,
    importantDates,
    importantDatesDescription,
}) {

    return (
        <Table celled key={id}>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell textAlign="center" colSpan="8"><h2>Team Member: {name}</h2></Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                <Table.Row rowSpan="8">
                    <Table.Cell colSpan collapsing><h3>Contact Info </h3>
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
                        Name: {emergencyPOCName} / {''}
                        Relationship: {emergencyPOCRelationship}<br></br>
                        Phone Number: {emergencyPOCPhoneNumber}
                    </Table.Cell>
                    <Table.Cell collapsing>
                        <h5><Icon name="home" /> Mailing Address: </h5>
                        {mailingAddress}
                    </Table.Cell>
                </Table.Row>
                <Table.Row>
                </Table.Row>
                <Table.Row rowSpan="1">
                    <Table.Cell collapsing><h3>Experience</h3>
                    </Table.Cell>
                    <Table.Cell collapsing>
                        <h3>Skills </h3>
                    </Table.Cell>
                    <Table.Cell rowSpan="" collasping>
                        <h3>Training</h3>
                    </Table.Cell>
                    <Table.Cell colSpan="" collasping>
                        <h3>Responsibilities</h3>
                    </Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell colSpan="1" collasping>
                        {experience}
                    </Table.Cell>
                    <Table.Cell colSpan="1" collapsing>
                        <ul style={{ paddingLeft: 20 }}>
                            {skills.map((skill) => (
                                <li key={skill} >
                                    {skill}</li>
                            ))}
                        </ul>
                    </Table.Cell>
                    <Table.Cell colSpan="1" collapsing>
                        <ul style={{ paddingLeft: 20 }}>
                            {training.map((train) => (
                                <li key={train} >
                                    {train}</li>
                            ))}
                        </ul>
                    </Table.Cell>
                    <Table.Cell colSpan="1" collapsing>
                        <ul style={{ paddingLeft: 20 }}>
                            {responsibilities.map((responsibility) => (
                                <li key={responsibility} >
                                    {responsibility}</li>
                            ))}
                        </ul>
                    </Table.Cell>
                </Table.Row>
                <Table.Row>
                </Table.Row>
                <Table.Row>

                </Table.Row>
            </Table.Body>
        </Table>
    );
}





