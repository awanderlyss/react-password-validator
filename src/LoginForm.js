import React, { Component } from 'react';


class LoginForm extends Component {
  // set up the init state of the component
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      passwordConfirm: ''
    };
  }

  handleEmail(event){
    this.setState({
      email: event.target.value
    });
  }

  handlePassword(event){
    this.setState({
      password: event.target.value
    });
  }

  handlePasswordConfirm(event){
    this.setState({
      passwordConfirm: event.target.value
    });
  }

  fieldReset(){
    this.setState({
      password: '',
      passwordConfirm: ''
    });
  }

  handleSubmit(event){
    event.preventDefault();
    if(this.state.password !== this.state.passwordConfirm){
      alert("SHITTT..... your passwords dont match!!");
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
        <div>
          <label htmlFor="email">Email: </label> <br />
          <input onChange={(event) => this.handleEmail(event)} type="email" name="email"  />
        </div>
        <div>
          <label htmlFor="password">Password: </label> <br />
          <input onChange={(event) => this.handlePassword(event)} type="text" name="password" />
        </div>
        <div>
          <label htmlFor="passwordConfirm">Confirm Password: </label> <br />
          <input onChange={(event) => this.handlePasswordConfirm(event)} type="text" name="passwordConfirm" />
        </div>

          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
