import React from "react";
import { Jumbotron, Container, Col, Form, Button, } from 'react-bootstrap';

// build a form to match the model in teammember.js under models
// array of strings or objects for skills or have text area

// const handleFormSubmit = async (event) => {
//   event. preventDefault();
// }

const TeamMember = () => {
  return (
  <>
    <Jumbotron fluid className='text-light bg-dark'>Team Member Input Form</Jumbotron>
    <Container className = 'name'></Container>

  </>);
};

export default TeamMember;
