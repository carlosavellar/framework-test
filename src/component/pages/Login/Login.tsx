import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import "./Login.css";
import { Col, Row } from "react-bootstrap";

function Login() {
  return (
    <div className="login-box">
      {/* <Container>
        <Row>
          <Col> */}
      <Form className="p-5 col-example mh-100 form-login">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          className="align-items-end"
          disabled
        >
          Entrar
        </Button>
      </Form>
      {/* </Col>
        </Row>
      </Container> */}
    </div>
  );
}

export default Login;