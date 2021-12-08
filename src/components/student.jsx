/*
import React, { Component } from "react";
import axios from "axios";

class Student extends React.Component {
  state = {
    students: [],
  };

  // class component life cycle methods
  componentDidMount() {
    console.log("componentDidMount");
    axios
      .get("http://localhost:8082/students")
      .then((res) => {
        console.log(res);
        this.setState({ students: res.data });
      })
      .catch((err) => console.log(err));
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    return (
      <div>
        <table className="table w-75 mx-auto">
          <thead>
            <tr>
              <th>RollNo</th>
              <th>Fullname</th>
              <th>Email</th>
              <th>Contact No</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {this.state.students.map((s) => (
              <tr>
                <td>{s.rollNo}</td>
                <td>{s.fullName}</td>
                <td>{s.login.email}</td>
                <td>{s.contactNo}</td>
                <td>{s.login.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Student;
*/