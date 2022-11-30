// import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

import Auth from "../../utils/auth";

const styles = {
  navStyle: {
    display: 'flex',
    justifyContent: 'center',
    background: 'lightblue',
    color: 'orange',
    listStyle: 'none',
  },
}

const AppTabbar = () => {

  return (
    <>
      <Menu>
        <ul style={styles.navStyle} className="navbar-items">
          <li>
            <Menu.Item>
              <Link to="/">Dashboard</Link>
            </Menu.Item>
          </li>
          <li>
            <Menu.Item>
              <Link to="/export">Export</Link>
            </Menu.Item>
          </li>
          <li>
            <Menu.Item>
              <Link to="/team">Team</Link>
            </Menu.Item>
          </li>
          <li>
            <Menu.Item>
              <Link to="/teammember">Team Member</Link>
            </Menu.Item>
          </li>
          <li>
            <Menu.Item>
              <Link to="/userManagement">User Management</Link>
            </Menu.Item>
          </li>

          {Auth.loggedIn() ? (
            <>
              <Menu.Item color="white" onClick={Auth.logout}>
                Logout
              </Menu.Item>
            </>
          ) : (
            <Menu.Item as="a" href="/">
              Login
            </Menu.Item>
          )}
        </ul>
      </Menu>
    </>
  );
    
};

export default AppTabbar;
