import {
  signInWithGoogle,
  signInWithEmailAndPassword,
  registerWithEmailAndPassword
} from "../firebase";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import React, { useState } from "react";
import './login.css';

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  return (
    <div className="login">
      <div className="login__container">
        <div className="row">
          <div className="col-12 col-md-6 mb-4">
            <Card className="login-card shadow-sm">
              <Card.Body className="cardbodymanual">
                <Card.Title className="text-center mb-4">User Login</Card.Title>
                <Form className="form">
                  <Form.Group className="mb-3 formgroup" controlId="loginEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      className="inputplaceholder"
                      type="email"
                      placeholder="Enter your email"
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="loginPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      className="inputplaceholder"
                      type="password"
                      placeholder="Enter your password"
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                    />
                  </Form.Group>

                  <div className="d-grid gap-2 mt-4">
                    <Button
                      variant="primary"
                      onClick={() => {
                        signInWithEmailAndPassword(loginEmail, loginPassword);
                      }}
                    >
                      Login
                    </Button>
                    <Button variant="outline-secondary" onClick={signInWithGoogle}>
                      <i className="fab fa-google"></i> Sign in with Google
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </div>

          <div className="col-12 col-md-6">
            <Card className="login-card shadow-sm">
              <Card.Body>
                <Card.Title className="text-center mb-4">User Registration</Card.Title>
                <Form className="form">
                  <Form.Group className="mb-3" controlId="registerName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      className="inputplaceholder"
                      type="text"
                      placeholder="Enter your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="registerEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      className="inputplaceholder"
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="registerPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      className="inputplaceholder"
                      type="password"
                      placeholder="Create a password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Group>

                  <div className="d-grid gap-2 mt-4">
                    <Button
                      variant="success"
                      onClick={() => {
                        registerWithEmailAndPassword(name, email, password);
                      }}
                    >
                      Register
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </div>
        </div>

        <div className="text-center mt-4">
          <Button variant="outline-dark" href="/">Go Back</Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
