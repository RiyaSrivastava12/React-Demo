import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Doctor extends React.Component {
  state = {
    doctors: [],
  };

  // class component life cycle methods
  componentDidMount() {
    console.log("componentDidMount");
    axios
      .get("http://localhost:8080/doctors")
      .then((res) => {
        console.log(res);
        this.setState({ doctors: res.data });
      })
      .catch((err) => console.log(err));
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  handleDelete = (id) => {
    //axios.delete("http://localhost:8082/students/" + rollNo);
    axios
      .delete(`http://localhost:8080/doctors/${id}`)
      .then((res) => {
        console.log(res);
        // Update front end parallely
        const doctors = this.state.doctors.filter((d) => d.id != id);
        this.setState({ doctors: doctors });
        alert(res.data.dname + " deleted succussfully!");
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="w-75 mx-auto shadow p-3 mb-5 bg-body rounded">
      <Link to="/doctors/add" className="btn btn-info float-end">
      Add
    </Link>

        <table className="table w-75 mx-auto shadow-sm p-3 mb-5 bg-body rounded ">
          <thead>
            <tr className="shadow-sm p-3 mb-5 bg-body rounded">
              <th>Doctor_Id</th>
              <th>Doctor Name</th>
              <th>specialization</th>
              <th>qualification</th>
              <th>availability</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.doctors.map((d) => (
              <tr>
                <td>{d.id}</td>
                <td>{d.dname}</td>
                <td>{d.specialization}</td>
                <td>{d.qualification}</td>
                <td>{d.availability}</td>
                <td>
                  <Link
                    to={`/doctors/update/${d.id}`}
                    className="btn btn-primary"
                  >
                    Update
                  </Link>
                  <button
                    className="btn btn-danger"
                    onClick={() => this.handleDelete(d.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Doctor;