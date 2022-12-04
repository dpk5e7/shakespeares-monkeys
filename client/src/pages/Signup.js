import React from "react";

import { useState } from 'react'
import { Button, Icon, Modal } from 'semantic-ui-react'

import SignupForm from "../components/SignupForm";

const Signup = () => {
  const [open, setOpen] = useState(true)

  return (
    <>
 <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
    >
      <Modal.Header style={{ display: "flex", justifyContent: "space-between", fontSize: "1.8rem" }}>Sign up
        <Button style={{ background: "transparent", color: "black", color: "black", fontSize: "1.5rem" }} onClick={() => setOpen(false)}>
          <Icon name="remove"></Icon></Button></Modal.Header>
      <Modal.Content>
      <SignupForm />
      </Modal.Content>
    </Modal>
    </>
  );
};

export default Signup;
