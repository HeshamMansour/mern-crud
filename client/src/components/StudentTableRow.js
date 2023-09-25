import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Button from 'react-bootstrap/Button'

export default class StudentTableRow extends Component {
  constructor(props) {
    super(props)
    this.deleteStudent = this.deleteStudent.bind(this)
  }

  deleteStudent() {
    axios
      .delete(
        'http://localhost:4000/students/delete/' + this.props.obj._id,
      )
      .then((res) => {
        console.log('Student successfully deleted!')
      })
      .catch((error) => {
        console.log(error)
      })
    
      // Redirect to Student List
      window.location.reload();
  }

  render() {
    return (
      <tr>
        <td>{this.props.obj.name}</td>
        <td>{this.props.obj.email}</td>
        <td>{this.props.obj.id}</td>
        <td>
          <Link
            className="edit-link m-2"
            to={'/edit-student/' + this.props.obj._id}
          >
            Edit
          </Link>
          <Button onClick={this.deleteStudent} size="sm" variant="danger" className="m-2">
            Delete
          </Button>
        </td>
      </tr>
    )
  }
}
