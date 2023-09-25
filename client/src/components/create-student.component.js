import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class CreateStudent extends Component {

  constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeStudentName = this.onChangeStudentName.bind(this);
    this.onChangeStudentEmail = this.onChangeStudentEmail.bind(this);
    this.onChangeStudentId = this.onChangeStudentId.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      name: '',
      email: '',
      id: ''
    }
  }

  onChangeStudentName(e) {
    this.setState({ name: e.target.value })
  }

  onChangeStudentEmail(e) {
    this.setState({ email: e.target.value })
  }

  onChangeStudentId(e) {
    this.setState({ id: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const studentObject = {
      name: this.state.name,
      email: this.state.email,
      id: this.state.id
    };
    axios.post('http://localhost:4000/students/create', studentObject)
      .then(res => console.log(res.data));

    this.setState({ name: '', email: '', id: '' })
  }

  render() {
    return (<div className="form-wrapper">
      <h1>Create Student</h1>
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={this.state.name} onChange={this.onChangeStudentName} />
        </Form.Group>

        <Form.Group controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={this.state.email} onChange={this.onChangeStudentEmail} />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>ID</Form.Label>
          <Form.Control type="text" value={this.state.id} onChange={this.onChangeStudentId} />
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit" className="mt-4">
          Create Student
        </Button>
      </Form>
    </div>);
  }
}