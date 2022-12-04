import { Button, Header, Modal, Form, Checkbox } from 'semantic-ui-react'
import { useState } from 'react'
import SignupForm from "../components/SignupForm"
import LoginForm from '../components/LoginForm'

function LoginModal() {


  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Login</Button>}
    >
      {/* <SignupForm /> */}
    </Modal>
  )
}

export default LoginModal
