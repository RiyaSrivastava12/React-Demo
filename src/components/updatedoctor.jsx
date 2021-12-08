import React, { Component } from "react";
import axios from "axios";

class UpdateDoctor extends React.Component {
  state = {
    doctor: {
      dname: "",
      specialization: "",
      qualification: "",
      availability: "",
      
    },
  };
  componentDidMount() {
    axios
      .get(
        `http://localhost:8080/doctors/id/${this.props.match.params.id}`
      )
      .then((res) => {
        console.log(res.data);
        this.setState({ doctor: res.data });
      })
      .catch((err) => console.log(err));
  }
  handleChange = (event) => {
    //logic to update state object
    // console.log(student);
    // console.log(event.target.name); // name of field - fullName
    // console.log(event.target.value); // value entered in the field -a
    // student[fullName] = a;
    // student.fullName = a;

    // copy state student object to local variable student
    const doctor = { ...this.state.doctor };

    // update local student object with values entered by user
    doctor[event.target.name] = event.target.value;

    // update state object using setState method
    this.setState({ doctor: doctor });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    // Send post request to rest api
    axios
      .put(
        `http://localhost:8080/doctors/${this.props.match.params.id}`,
        this.state.doctor
      )
      .then((res) => {
        console.log(res.data);
        alert(
          "Updated doctor " + this.state.doctor.dname + " successfully!"
        );
        this.props.history.push("/doctors");
      })
      .catch((err) => console.log(err));
  };
  render() {
    // Object Destructuring
    const { dname, specialization, qualification, availability} = this.state.doctor;

    return (
      <div>
        <form
          onSubmit={this.handleSubmit}
          className="w-50 mx-auto shadow p-3 mb-5 bg-body rounded mt-3"
        >
          <div className="mb-3">
            <label htmlFor="dname" className="form-label">
              Doctor Name
            </label>
            <input
              type="text"
              className="form-control"
              id="dname"
              aria-describedby="emailHelp"
              value={dname}
              name="dname"
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="specialization" className="form-label">
              Specialization
            </label>
            <input
              type="text"
              className="form-control"
              id="specialization"
              aria-describedby="emailHelp"
              value={specialization}
              name="specialization"
              onChange={this.handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="qualification" className="form-label">
             Qualification
            </label>
            <input
              type="text"
              className="form-control"
              id="qualification"
              aria-describedby="emailHelp"
              value={qualification}
              name="qualification"
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="availability" className="form-label">
             Availability
            </label>
            <input
              type="text"
              className="form-control"
              id="availability"
              aria-describedby="emailHelp"
              value={availability}
              name="availability"
              onChange={this.handleChange}
            />
          </div>
          
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default UpdateDoctor;