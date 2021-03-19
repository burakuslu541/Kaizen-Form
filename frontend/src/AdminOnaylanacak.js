import React, {useState, useEffect} from "react";
import { Col, Container, Table, Spinner, Button } from "reactstrap";

const Example = (props) => {
  const [form, setForm] = useState();
  const [users, setUsers] = useState();
  
  useEffect(() => {
    fetch("http://localhost:8080/form/toBeApprovedList", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    })
    .then((res) => res.json())
    .then((response) => {
      setForm(response);
    })
  }, []);

  useEffect(() => {
    fetch("http://localhost:8080/user/getUsers", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    })
    .then((res) => res.json())
    .then((response) => {
      setUsers(response);
    })
  }, []);
    
  const createForm = (event) => {
    console.log(event)
    fetch("http://localhost:8080/form/createForm", {
        method: "POST",
        body: JSON.stringify({assignedPerson: event.target.name}),
        headers: { "Content-Type": "application/json" },
    })
  
  }

  const approveForm = (event) => {
    console.log(event)
    fetch("http://localhost:8080/form/formApproval", {
        method: "POST",
        body: JSON.stringify({assignedPerson: event.target.name}),
        headers: { "Content-Type": "application/json" },
    })
  
  }

  return (
    <Container>
      <Col>
        <Table dark>
          <thead>
            <tr>
              <th>Username</th>
              <th>Form Onay Sürecinde</th>
              <th>Kullanıcı Formu Ata</th>
            </tr>
          </thead>
          <tbody>
            {form && form.length && form.length>0 && form.map(element => {
              return (<tr>
                <td>{element.assignedPerson}</td>
                <td>
                  <Spinner color="primary" />
                </td>
                <td>
                <Button name={element.assignedPerson}outline color="warning" onClick={approveForm}>
                    Onay
                  </Button>
                </td>
              </tr>)
            })}
          </tbody>
        </Table>
        <Table dark>
          <thead>
            <tr>
              <th>Username</th>
              <th>Kullanıcı Formu Ata</th>
            </tr>
          </thead>
          <tbody>
            {users && users.length && users.length>0 && users.map(element => {
              return (<tr>
                <td>{element.username}</td>
                <td>
                  <Spinner color="primary" />
                </td>
                <td>
                  <Button name={element.username}outline color="warning" onClick={createForm}>
                    Atama
                  </Button>
                </td>
              </tr>)
            })}
          </tbody>
        </Table>
      </Col>
    </Container>
  );
};

export default Example;
