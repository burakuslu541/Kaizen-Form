import React, {useState, useEffect} from "react";
import { Container, Table,Spinner,Button } from "reactstrap";

const Example = (props) => {
  const [form, setForm] = useState();
  const [data, setData] = useState();
  
  useEffect(() => {
    fetch("http://localhost:8080/form/approvedList", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    })
    .then((res) => res.json())
    .then((response) => {
      setForm(response);
    })
  }, []);

  const downloadFile = async (event) => {
    fetch("http://localhost:8080/form/formDetail", {
        method: "POST",
        body: JSON.stringify({assignedPerson: event.target.name}),
        headers: { "Content-Type": "application/json" },
    }).then(res => res.json())
    .then(response => {
      const fileName = "file";
    const json = JSON.stringify(response);
    const blob = new Blob([json],{type:'application/json'});
    const href =  URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = href;
    link.download = fileName + ".json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link)});

    
  }

  return (
    <Container>
      <Table striped>
      <thead>
            <tr>
              <th>Username</th>
              <th>PDF İndir</th>
            </tr>
          </thead>
          <tbody>
            {form && form.length && form.length>0 && form.map(element => {
              return (<tr>
                <td>{element.assignedPerson}</td>
                
                <td>
                <Button name={element.assignedPerson}outline color="warning" onClick={downloadFile}>
                    İndir
                  </Button>
                </td>
              </tr>)
            })}
          </tbody>
      </Table>
    </Container>
  );
};

export default Example;
