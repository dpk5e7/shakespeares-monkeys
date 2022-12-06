import React, { useState } from "react";
import { Table, Form, Icon, Message } from "semantic-ui-react";

// add apollo graphql
import { useQuery, useMutation } from "@apollo/client";
import { GET_USERS } from "../../utils/queries";
import {
  DELETE_USER,
  TOGGLE_ADMIN,
  TOGGLE_LOCKED,
} from "../../utils/mutations";

import TablePagination from "../TablePagination";

function formatDate(seconds) {
  const returnDate = new Date(seconds);
  return returnDate.toLocaleString();
}

const UserTable = () => {
  const [deleteUser] = useMutation(DELETE_USER);
  const [toggleAdmin] = useMutation(TOGGLE_ADMIN);
  const [toggleLocked] = useMutation(TOGGLE_LOCKED);

  const { loading, error, data, refetch } = useQuery(GET_USERS);
  const userData = data?.users || [];

  const [messageToUser, setMessageToUser] = useState(""); // State variable to take care of the text area
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(10);

  // Get current posts
  const indexOfLast = currentPage * rowsPerPage;
  const indexOfFirst = indexOfLast - rowsPerPage;
  const currentData = userData?.slice(indexOfFirst, indexOfLast) || [];

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleDeleteUser = async (userId, userName) => {
    if (window.confirm(`Are you sure you want to delete ${userName}?`)) {
      const data = await deleteUser({
        variables: { userId },
      });
      refetch();
      setMessageToUser(data.data.deleteUser.message);
    }
  };

  const handleToggleAdmin = async (userId) => {
    const data = await toggleAdmin({
      variables: { userId },
    });
    refetch();
    setMessageToUser(data.data.toggleAdmin.message);
  };

  const handleToggleLocked = async (userId) => {
    const data = await toggleLocked({
      variables: { userId },
    });
    refetch();
    setMessageToUser(data.data.toggleLocked.message);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error! {error.message}</div>;
  }

  return (
    <>
      <Table
        striped
        selectable
        sortable
        collapsing
        // compact
        celled
        size="small"
        // fixed
        // className="attached fluid segment"
        // mobile={16} tablet={8} computer={4}
        color="orange"
      >
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>User Name</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>Last Login</Table.HeaderCell>
            <Table.HeaderCell>Admin</Table.HeaderCell>
            <Table.HeaderCell>Locked</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {currentData.map(
            ({ _id, username, email, is_admin, is_locked, last_login }) => {
              return (
                <Table.Row key={_id}>
                  <Table.Cell>{username}</Table.Cell>
                  <Table.Cell>{email}</Table.Cell>
                  <Table.Cell>{formatDate(last_login)}</Table.Cell>
                  <Table.Cell textAlign="center">
                    <Form.Checkbox
                      checked={is_admin}
                      onClick={() => handleToggleAdmin(_id)}
                    />
                  </Table.Cell>
                  <Table.Cell textAlign="center">
                    <Form.Checkbox
                      checked={is_locked}
                      onClick={() => handleToggleLocked(_id)}
                    />
                  </Table.Cell>
                  <Table.Cell textAlign="center">
                    <Form.Button
                      compact
                      negative
                      icon
                      onClick={() => handleDeleteUser(_id, username)}
                    >
                      <Icon name="trash alternate outline" />
                    </Form.Button>
                  </Table.Cell>
                </Table.Row>
              );
            }
          )}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="6">
              <TablePagination
                currentPage={currentPage}
                rowsPerPage={rowsPerPage}
                totalRows={userData?.length || 0}
                paginate={paginate}
              />
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
      {messageToUser && (
        <Message info>
          <Message.Header>{messageToUser}</Message.Header>
        </Message>
      )}
    </>
  );
};

export default UserTable;
