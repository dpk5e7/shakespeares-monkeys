import React from "react";
import { Header, Container } from "semantic-ui-react";
import UserTable from "../components/UserTable";

const UserManagement = () => {
  return (
    <>
      <Container>
        <Header size="large" className="header">
          User Management
        </Header>
        <UserTable />
      </Container>
    </>
  );
};

export default UserManagement;
