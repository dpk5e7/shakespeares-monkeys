import React from "react";
import LoginForm from "../components/LoginForm";
import Auth from "../utils/auth";

const Dashboard = () => {
  return (
    <>
      
      {Auth.loggedIn() ? <h1>Dashboard</h1> : <LoginForm />}
    </>
  );
};

export default Dashboard;
