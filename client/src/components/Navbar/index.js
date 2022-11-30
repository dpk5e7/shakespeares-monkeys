// import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";
// import SignUpForm from "../SignupForm";
// import LoginForm from "../LoginForm";
import Modal from "../Modal"

// import Auth from "../../utils/auth";

const styles = {
  navStyle: {
    display: 'flex',
    justifyContent: 'center',
    background: 'darkblue',
    color: 'orange',
    listStyle: 'none',
  },


}

const AppTabbar = () => {
  // set modal display state
  // const [openModal, setOpenModal] = useState(false);

  return (
    <>
    <Menu>
    <ul style={styles.navStyle} className="navbar-items">
      <li><Menu.Item><Link to="/">Dashboard</Link></Menu.Item></li>
      <li><Menu.Item><Link to="/export">Export</Link></Menu.Item></li>
      <li><Menu.Item><Link to="/team">Team</Link></Menu.Item></li>
      <li><Menu.Item><Link to="/teammember">Team Member</Link></Menu.Item></li>
      <li><Menu.Item><Link to="/userManagement">User Management</Link></Menu.Item></li>
      {/* <li><Menu.Item><Link to={openModal} onClick={() => setOpenModal(true)}>Login/Sign Up</Link></Menu.Item></li> */}
      <Modal />
    </ul>
    </Menu>

    </>
  );
    
};

export default AppTabbar;
