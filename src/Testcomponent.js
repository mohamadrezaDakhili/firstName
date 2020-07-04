import React, { Component } from "react";

class User extends Component {
  state = {
    firstName: "",
    lastName: "",
  };
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div>
        <input
          value={this.state.firstName}
          onChange={this.changeHandler}
          placeholder="Frist Name"
          name="firstName"
        ></input>
        <input
          value={this.state.lastName}
          onChange={this.changeHandler}
          placeholder="last Name"
          name="lastName"
        ></input>
        <br></br>
        <p>
          {this.state.firstName} {this.state.lastName}
        </p>
      </div>
    );
  }
}

export default User;
