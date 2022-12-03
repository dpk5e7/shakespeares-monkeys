import React from "react";
import { useQuery } from "@apollo/client";
import { Table, TableRow } from "semantic-ui-react";
import { GET_TEAM_UPCOMING_IMPORTANT_DATES } from "../../utils/queries";

export default function UpcomingDates() {
  const { loading, error, data } = useQuery(GET_TEAM_UPCOMING_IMPORTANT_DATES, {
    fetchPolicy: "network-only",
  });
  const upcomingDatesData = data?.teamUpcomingImportantDates || [];

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <Table basic="very">
          <Table.Header>
            <TableRow>
              <Table.HeaderCell>Date</Table.HeaderCell>
              <Table.HeaderCell>Description</Table.HeaderCell>
            </TableRow>
          </Table.Header>
          <Table.Body>
            {upcomingDatesData.map((date) => (
              <TableRow>
                <Table.Cell key={date.description}>
                  {date.importantDate}
                </Table.Cell>
                <Table.Cell>{date.description}</Table.Cell>
              </TableRow>
            ))}
          </Table.Body>
        </Table>
      )}
    </>
  );
}
