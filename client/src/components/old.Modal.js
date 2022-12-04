import { Button, Header, Modal, Form, Checkbox } from 'semantic-ui-react'
import { useState } from 'react'

function LoginModal() {
  const [open, setOpen] = useState(false)

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Login</Button>}
    >
      <Modal.Header>Login</Modal.Header>
      <Modal.Content>
        {/* <Image size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' wrapped /> */}
        {/* <Modal.Description> */}
          {/* <Header>Default Profile Image</Header> */}
          <Form>
            <Form.Field>
              <label>Username</label>
              <input placeholder="Enter username" />
            </Form.Field>
            <Form.Field>
            <label>Password</label>
              <input placeholder="Enter password" />
            </Form.Field>
            <Form.Field>
              <Checkbox label="I understand that I am entering a confidential database" />
            </Form.Field>
          </Form>
        {/* </Modal.Description> */}
      </Modal.Content>
      <Modal.Actions>
        <Button 
        content="Create New Account"
        position="left"
        display="left"
        background="red"
        negative >

        </Button>
        <Button
          content="Login"
          labelPosition='right'
          icon='checkmark'
          onClick={() => setOpen(false)}
          positive
        />
       </Modal.Actions>
    </Modal>
  )
}

export default LoginModal
