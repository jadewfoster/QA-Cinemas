import React from 'react'
import { Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function ContactUs() {
  return (
    <>
    <Form.Select aria-label="branches">
    <option>Select a branch</option>
    <option value="1">London(North)</option>
    <option value="2">London(South)</option>
    <option value="3">London(East)</option>
  </Form.Select>
    <Form>
      <Row>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="Enter name" placeholder="name" />
        </Form.Group>
      </Row>

      <Form.Group controlId="comments">
        <Form.Label>How can we help?</Form.Label>
        <Form.Control type="Enter your comments" as="textarea" rows={5} />
      </Form.Group>




      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    
    </>
  );
}

export default ContactUs;