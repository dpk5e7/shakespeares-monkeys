// see SignupForm.js for comments
// import React, { useState } from "react";
// // import { Form, Button, Modal } from "semantic-ui-react";
// import { Modal, Button, Header } from "semantic-ui-react";

// // import Auth from "../../utils/auth";

// // add apollo graphql
// // import { useMutation } from "@apollo/client";
// // import { LOGIN_USER } from "../../utils/mutations";


// const LoginForm = () => {
//     const [openModal, setOpenModal] = useState(false)

//     return (
//       <Modal 
//       onClose={() => setOpenModal(false)}
//       onOpen={() => setOpenModal(true)}
//       openModal={openModal}
//       trigger={<Button>Show Modal</Button>}
//     >
//       <Modal.Header>Select a Photo</Modal.Header>
//       <Modal.Content >
//         {/* <Image size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' wrapped /> */}
//         <Modal.Description>
//           <Header>Default Profile Image</Header>
//           <p>
//             We've found the following gravatar image associated with your e-mail
//             address.
//           </p>
//           <p>Is it okay to use this photo?</p>
//         </Modal.Description>
//       </Modal.Content>
//       <Modal.Actions>
//         <Button color='black' onClick={() => setOpenModal(false)}>
//           Nope
//         </Button>
//         <Button
//           content="Yep, that's me"
//           labelPosition='right'
//           icon='checkmark'
//           onClick={() => setOpenModal(false)}
//           positive
//         />
//       </Modal.Actions>
//     </Modal>
//   );
// }


// const LoginForm = () => {
//   const [openModal, setOpenModal] = useState(false)
//   const [userFormData, setUserFormData] = useState({ email: "", password: "" });
//   const [validated] = useState(false);
//   const [showAlert, setShowAlert] = useState(false);

//   // define login mutation
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
//       setShowAlert(true);
//     }

//     setUserFormData({
//       email: "",
//       password: "",
//     });
//   };

//   return (
//     <>
//       <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
//         {/* <Alert
//           dismissible
//           onClose={() => setShowAlert(false)}
//           show={showAlert}
//           variant="danger"
//         >
//           Something went wrong with your login credentials!
//         </Alert> */}
//         <Form.Group>
//           <Form.Label htmlFor="email">Email</Form.Label>
//           <Form.Control
//             type="text"
//             placeholder="Your email"
//             name="email"
//             onChange={handleInputChange}
//             value={userFormData.email}
//             required
//           />
//           <Form.Control.Feedback type="invalid">
//             Email is required!
//           </Form.Control.Feedback>
//         </Form.Group>

//         <Form.Group>
//           <Form.Label htmlFor="password">Password</Form.Label>
//           <Form.Control
//             type="password"
//             placeholder="Your password"
//             name="password"
//             onChange={handleInputChange}
//             value={userFormData.password}
//             required
//           />
//           <Form.Control.Feedback type="invalid">
//             Password is required!
//           </Form.Control.Feedback>
//         </Form.Group>
//         <Button
//           disabled={!(userFormData.email && userFormData.password)}
//           type="submit"
//           variant="success"
//         >
//           Submit
//         </Button>
//       </Form>
//     </>
//   );
// };

// export default LoginForm;
