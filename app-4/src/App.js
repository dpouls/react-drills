import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
    constructor(){
      super();
      this.state = {
        username: '',
        password: ''
      }
      this.alertLogin = this.alertLogin.bind(this)
    }
  handleUsername(val){
    this.setState({username: val})
  }
  handlePassword(val){
    this.setState({password: val})
  }
  alertLogin(){
    alert(`Username: ${this.state.username} Password: ${this.state.password}`)
  }
  render() {
    return (
      <div className="App">
        <input onChange={ (e) => this.handleUsername(e.target.value)} type='text'/>
        <input onChange={ (e) => this.handlePassword(e.target.value)} type='text'/>
        <button onClick={this.alertLogin}>Login</button>
      </div>
    );
  }
}

export default App;
