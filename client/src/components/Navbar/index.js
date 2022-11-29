import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "semantic-ui-react";
import SignUpForm from "../SignupForm";
import LoginForm from "../LoginForm";

import Auth from "../../utils/auth";

const AppNavbar = () => {
  // set modal display state
  const [showModal, setShowModal] = useState(false);

  return <>
  <ul>
    <li> <Link to="/">Dashboard</Link></li>
      <li><Link to="/export">Export</Link></li>
      <li><Link to="/team">Team</Link></li>
      <li><Link to="/teammember">Team Member</Link></li>
      <li><Link to="/userManagement">User Management</Link></li>
  </ul></>;
};

export default AppNavbar;
