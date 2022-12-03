// import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Icon } from "semantic-ui-react";

import Auth from "../../utils/auth";
import { useUserContext } from "../../utils/UserContext";
import { LOGOUT } from "../../utils/actions";

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

  let linkStyle = {
    color: "black",
  };

  return (
    <>
      <Menu fluid>
        <Menu.Item>
          <Icon name="users" />
          {Auth.loggedIn() && state.user && <>{`${state.user.username}'s `}</>}
          Team Handbook
        </Menu.Item>
        {Auth.loggedIn() ? (
          <>
            <Menu.Item link>
              <Link to="/" style={linkStyle}>
                Dashboard
              </Link>
            </Menu.Item>

            <Menu.Item link>
              <Link to="/team" style={linkStyle}>
                Team
              </Link>
            </Menu.Item>

            {state.user.is_admin && (
              <Menu.Item link>
                <Link to="/userManagement" style={linkStyle}>
                  User Management
                </Link>
              </Menu.Item>
            )}
            <Menu.Item onClick={handleLogout} link position="right">
              Logout
            </Menu.Item>
          </>
        ) : (
          <Menu.Item as="a" href="/login" position="right">
            Login
          </Menu.Item>
        )}
      </Menu>
    </>
  );
};

export default NavBar;
