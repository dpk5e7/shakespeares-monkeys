import React from "react";
import { useQuery } from "@apollo/client";
import { Table, TableRow } from "semantic-ui-react";
import { GET_ONE_TEAM_MEMBER } from "../../utils/queries";

export default function ExportDates() {
    const { data } = useQuery(GET_ONE_TEAM_MEMBER);
    const upcomingDatesData = data?.oneTeamMember || [];

    return (
        <Table>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell colSpan="1">Date</Table.HeaderCell>
                    <Table.HeaderCell colSpan="1">Description</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {upcomingDatesData.find((date) => (
                    <TableRow colSpan="2">
                        <Table.Cell colSpan="1"key={date.description}>
                            {date.importantDate}
                        </Table.Cell>
                        <Table.Cell colSpan="">{date.description}</Table.Cell>
                    </TableRow>
                ))}
            </Table.Body>
        </Table>
    );
}
