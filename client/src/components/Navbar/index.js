// import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

import Auth from "../../utils/auth";
import { useUserContext } from "../../utils/UserContext";
import { LOGOUT } from "../../utils/actions";

const styles = {
  navStyle: {
    display: "flex",
    justifyContent: "center",
    background: "lightblue",
    color: "orange",
    listStyle: "none",
  },
};

const NavBar = () => {
  // add global state
  const [state, dispatch] = useUserContext();

  const handleLogout = () => {
    Auth.logout();

    // set global state
    dispatch({
      type: LOGOUT,
      user: { _id: "", username: "", is_admin: false, is_locked: false },
    });

    window.location.assign("/login");
  };

  return (
    <>
      <Menu>
        <ul style={styles.navStyle} className="navbar-items">
          {Auth.loggedIn() ? (
            <>
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
              {state.user.is_admin && (
                <li>
                  <Menu.Item>
                    <Link to="/userManagement">User Management</Link>
                  </Menu.Item>
                </li>
              )}
              {state.user && (
                <li>
                  {state.user.username}
                </li>
              )}
              <li>
                <Menu.Item onClick={handleLogout}>Logout</Menu.Item>
              </li>
            </>
          ) : (
            <>
              <li>
                <Menu.Item as="a" href="/login">
                  Login
                </Menu.Item>
              </li>
            </>
          )}
        </ul>
      </Menu>
    </>
  );
};

export default NavBar;
