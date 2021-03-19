import React, {useState} from "react";
import { Col, Container, Row, Button } from "reactstrap";
import AdminOnaylanacak from "./AdminOnaylanacak";
import AdminOnaylanan from "./AdminOnaylanan";

const Example = (props) => {
  const [formType, setFormType] = useState(0);

  const buttonToApprove = () => {
    setFormType(0);
  }

  const buttonApproved = () => {
    setFormType(1);
  }

  return formType == 0 ? (
    <Container className="mt-5">
      <Row className="mb-4">
        <Container>
          <Button className="float-left ml-5" outline color="success" onClick={buttonToApprove}>
            Onaylanacak Form
          </Button>
          <Button className="float-left ml-5" outline color="info" onClick={buttonApproved}>
            Onaylanan Form
          </Button>
        </Container>
      </Row>
      <Container>
          <AdminOnaylanacak/>
      </Container>
    </Container>
  ) : (
    <Container className="mt-5">
      <Row className="mb-4">
        <Container>
          <Button className="float-left ml-5" outline color="success" onClick={buttonToApprove}>
            Onaylanacak Form
          </Button>
          <Button className="float-left ml-5" outline color="info" onClick={buttonApproved}>
            Onaylanan Form
          </Button>
        </Container>
      </Row>
      <Container>
          <AdminOnaylanan/>
      </Container>
    </Container>
  );
};

export default Example;
