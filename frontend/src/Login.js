import { Button } from 'reactstrap'
import React, { Component } from 'react'
import { FormGroup, FormControl} from 'react-bootstrap'
import User from "./User"
import Admin from "./Admin"
//import LoaderButton from '../../components/LoaderButton'
//import './index.css'

export default class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: false,
      username: '',
      password: '',
      comp: null,
      jwt: null,
      role: null
    }
  }

  validateForm() {
    return this.state.username.length > 0 && this.state.password.length > 0
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value,
    })
  }

  handleSubmit = async event => {
    event.preventDefault()
    const data = {
        username: this.state.username,
        password: this.state.password
    };

    fetch("http://localhost:8080/user/login", {
        method: "POST",
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers: { "Content-Type": "application/json" },
    })
    .then((res) => res.json())
    .then((response) => {
        if(response.role === "Admin") {
            this.setState({comp:<Admin/>})
        } else {
            this.setState({comp:<User assignedPerson={this.state.username} />})
        }
    })
  }

  render() {
    return this.state.comp == null ? (
      <div className="Login">
        <form onSubmit={this.handleSubmit} style={{ textAlign: 'center' }}>
          <FormGroup controlId="username" bsSize="large">
            Username
            <FormControl
              autoFocus
              type="text"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            Password
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button>Login</Button>
        </form>
      </div>
    ) : (this.state.comp)
  }
}