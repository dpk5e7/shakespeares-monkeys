// import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

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

  return (
    <>
      <Menu fluid widths={5} className="navBar">
        <Menu.Item className="navLinks">
          Team Handbook
        </Menu.Item>
        {Auth.loggedIn() ? (
          <>
            <Menu.Item className="navLinks">
              {state.user && <>{state.user.username}</>}
            </Menu.Item>
            <Menu.Item className="navLinks">
              <Link to="/">Dashboard</Link>
            </Menu.Item>

            <Menu.Item className="navLinks">
              <Link to="/team">Team</Link>
            </Menu.Item>

            {state.user.is_admin && (
              <Menu.Item>
                <Link to="/userManagement">User Management</Link>
              </Menu.Item>
            )}
            <Menu.Item onClick={handleLogout}>Logout</Menu.Item>
          </>
        ) : (
          <Menu.Item as="a" href="/login">
            Login
          </Menu.Item>
        )}
      </Menu>
    </>
  );
};

export default NavBar;
