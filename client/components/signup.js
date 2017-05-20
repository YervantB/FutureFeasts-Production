import React, { Component } from 'react';
import axios from 'axios';


class Signup extends Component {

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSignUpSubmit}>
          <input placeholder="Create Username" type="text" name="username" value={this.props.username} onChange={this.props.handleChange} />
          <input placeholder="Create Password" type="password" name="password" value={this.props.password} onChange={this.props.handleChange} />
          <input type="submit" value="login" />
        </form>
      </div>
    )
  }
}

module.exports = Signup;