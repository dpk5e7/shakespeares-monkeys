import { Button, Modal, Form, Checkbox, Menu } from 'semantic-ui-react'
import { useState } from 'react'
import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react"
// import LoginForm  from "../components/LoginForm"
// import { useMutation } from 'react'
// import { LOGIN_USER } from "../utils/mutations";

// const TabExampleBasic = () => <Tab panes={panes} />

// import auth
// import Auth from "../utils/auth";

const styles = {
    modalHeader: {
        display: "flex",
        justifyContent: "space-between"
    },
    deleteButton: {
        background: "transparent",
        color: "black",
        fontSize: "1.5rem",
        padding: 0
    }
}

function LoginModal() {
    const [open, setOpen] = useState(false)
    //   const [userFormData, setUserFormData] = useState({ email: "", password: "" });
    //   const [validated] = useState(false);
    //   const [showMessage, setShowMessage] = useState(false);

    //   const [loginUser] = useMutation(LOGIN_USER);

    //   const handleInputChange = (event) => {
    //     const { name, value } = event.target;
    //     setUserFormData({ ...userFormData, [name]: value });
    //   };

    //   const handleFormSubmit = async (event) => {
    //     event.preventDefault();

    //     // check if form has everything (as per react-bootstrap docs)
    //     const form = event.currentTarget;
    //     if (form.checkValidity() === false) {
    //       event.preventDefault();
    //       event.stopPropagation();
    //     }

    //     try {
    //       // call login mutation
    //       const { data } = await loginUser({
    //         variables: { ...userFormData },
    //       });

    //       const { token, user } = data.login;

    //       console.log(user);
    //       Auth.login(token);
    //     } catch (err) {
    //       console.error(err);
    //       setShowMessage(true);
    //     }

    //     setUserFormData({
    //       email: "",
    //       password: "",
    //     });
    //   };

    return (
        <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<Button>Login</Button>}
        >
            <Modal.Header style={styles.modalHeader}>
                <Button style={styles.deleteButton} onClick={() => setOpen(false)}><Icon delete name="delete" />
                </Button>
                <Menu>
                    <Menu.Item><Link to="/login">Login</Link></Menu.Item>
                    <Menu.Item><Link to="/signup">Signup</Link></Menu.Item>
                    </Menu>
            </Modal.Header>

            <Modal.Content>
                {/* <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
            <Message
              dismissible
              onClose={() => setShowMessage(false)}
              show={showMessage}
              variant="danger"
            >
              Something went wrong with your login credentials!
            </Message>
            <Form.Group widths="equal">
            <Form.Field 
              label="Email" 
              name="email"
              control="input" 
              type="text" 
              placeholder="Enter email" 
              onChange={handleInputChange}
                value={userFormData.email}
                required >
          {/* <Form type="invalid"> */}
                Email is required!
                {/* {/* </Form.Field> */}

                {/* <Form.Field 
              label="Password"
              name="password"
              control="input"
              type="text"
              placeholder="Enter email"
              onChange={handleInputChange}
                value={userFormData.password}
                required >
            </Form.Field>
         </Form.Group> */}

                {/* <Form.Control.Feedback type="invalid">
                Password is required!
              </Form.Control.Feedback>
            <Button
              disabled={!(userFormData.email && userFormData.password)}
              type="submit"
              variant="success"
            >
              Submit
            </Button>
          </Form> */}

                <Form>
                    <Form.Field
                        label="Email"
                        name="email"
                        control="input"
                        type="text"
                        placeholder="Enter email"
                        //   onChange={handleInputChange}
                        //   value={userFormData.email}
                        required >
                    </Form.Field>
                    <Form.Field
                        label="Password"
                        name="password"
                        control="input"
                        type="text"
                        placeholder="Enter email"
                        //   onChange={handleInputChange}
                        //   value={userFormData.email}
                        required >
                    </Form.Field>
                    <Form.Field>
                        <Checkbox label="I understand that I am entering a confidential database" />
                    </Form.Field>
                </Form>
            </Modal.Content>
            <Modal.Actions>
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
