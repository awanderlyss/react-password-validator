import React, { Component } from 'react';
import LoginForm from './LoginForm'
import './App.css';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <h1>Password Validator</h1>
        <LoginForm />
      </div>
    );
  }
}

export default Home;
