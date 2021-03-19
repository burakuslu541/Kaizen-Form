import React from "react";
import User from "./User";
import Admin from "./Admin";
import Login from "./Login";
import { Container, Row } from "reactstrap";

function App() {
  return (
    <div>
      <Container>
        <Row>
          <Login />
        </Row>
      </Container>
    </div>
  );
}

export default App;
