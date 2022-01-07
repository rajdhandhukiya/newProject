import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Form } from "react-bootstrap";
// import { useState } from "react";

function InputValue(props) {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [number, setNumber] = useState("");
  // const [password, setPassword] = useState("");

  function handleChange(event) {
    console.log("input value", event.target.value);
  }

  return (
    <div>
      <label>
        First name
        <input type="text" onChange={handleChange} />
      </label>
      {/* <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name={"Email"}
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group> */}
      {/* 
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder=" Password"
            name={"Password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicNumber">
          <Form.Label>Number</Form.Label>
          <Form.Control
            type="Number"
            placeholder="Number"
            name={"Number"}
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </Form.Group>  */}
    </div>
  );
}

export default InputValue;
