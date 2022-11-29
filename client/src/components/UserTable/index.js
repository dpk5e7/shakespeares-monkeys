import React, { useState } from "react";
import { Table, Form, Icon } from "semantic-ui-react";

// add apollo graphql
import { useQuery } from "@apollo/client";
import { GET_USERS } from "../../utils/queries";

import TablePagination from "../TablePagination";

import { reducer as sortReducer } from "../../utils/sortReducer";

function formatDate(seconds) {
  const returnDate = new Date(seconds);
  return returnDate.toLocaleString();
}

function deleteUser(userId) {
  alert(`Delete ${userId}`);
  // need to create a mutation to delete the user
}

function toggleLock(userId) {
  alert(`Lock ${userId}`);
  // need to create a mutation to toggle the locked out status of the user
}

function toggleAdmin(userId) {
  alert(`Admin ${userId}`);
  // need to create a mutation to toggle the admin status of the user
}

const UserTable = () => {
  const { loading, error, data } = useQuery(GET_USERS);

  const userData = data?.users || [];

  const [state, dispatch] = React.useReducer(sortReducer, {
    column: "last_login",
    tableData: userData,
    direction: "descending",
  });
  const { column, tableData, direction } = state;

  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(10);

  // Get current posts
  const indexOfLast = currentPage * rowsPerPage;
  const indexOfFirst = indexOfLast - rowsPerPage;
  const currentData = tableData?.slice(indexOfFirst, indexOfLast) || [];

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
        compact
        celled
        color="orange"
      >
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell
              sorted={column === "username" ? direction : null}
              onClick={() =>
                dispatch({ type: "CHANGE_SORT", column: "username" })
              }
            >
              User Name
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === "email" ? direction : null}
              onClick={() => dispatch({ type: "CHANGE_SORT", column: "email" })}
            >
              Email
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === "last_login" ? direction : null}
              onClick={() =>
                dispatch({ type: "CHANGE_SORT", column: "last_login" })
              }
            >
              Last Login
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === "is_admin" ? direction : null}
              onClick={() =>
                dispatch({ type: "CHANGE_SORT", column: "is_admin" })
              }
            >
              Admin
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === "is_locked" ? direction : null}
              onClick={() =>
                dispatch({ type: "CHANGE_SORT", column: "is_locked" })
              }
            >
              Locked
            </Table.HeaderCell>
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
                      onClick={() => toggleAdmin(_id)}
                    />
                  </Table.Cell>
                  <Table.Cell textAlign="center">
                    <Form.Checkbox
                      checked={is_locked}
                      onClick={() => toggleLock(_id)}
                    />
                  </Table.Cell>
                  <Table.Cell textAlign="center">
                    <Form.Button
                      compact
                      negative
                      icon
                      onClick={() => deleteUser(_id)}
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
                totalRows={tableData?.length || 0}
                paginate={paginate}
              />
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </>
  );
};

export default UserTable;
