import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../shared/actions/login";

import { Container, Row, Col, Form, FormGroup, Input, Button } from "reactstrap";

const Login: React.FC = () => {
  const [username, setUsername] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const dispatch = useDispatch();

  return (
    <Container>
      <Row className="justify-content-center align-items-center vh-100">
        <Form>
          <FormGroup>
            <Input type="text" id="username" placeholder="username" onChange={event => setUsername(event.target.value)} />
          </FormGroup>
          <FormGroup>
            <Input type="text" id="password" placeholder="password" onChange={event => setPassword(event.target.value)} />
          </FormGroup>
          <FormGroup>
            <Button color="primary" type="button" onClick={() => dispatch(login({ username: username, password: password }))}>Log In</Button>
          </FormGroup>
        </Form>
      </Row>
    </Container>
  )
}

export default Login
