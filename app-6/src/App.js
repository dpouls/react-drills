import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Todo from "./Todo";

class App extends Component {
  constructor(){
    super();
    
    this.state = {
      list: [],
      input: ''
    }
    this.handleTaskChange = this.handleTaskChange.bind(this)
  }
  handleChange(val){
    this.setState({input: val})
  }
  handleTaskChange(){
    this.setState(
      {
        list: [...this.state.list, this.state.input],
        input: '',
      }
    )
  }
  render() {
    let list = this.state.list.map((e,i) => {return <Todo key={i} task={e}/>;
    });
    return (
      <div className="App">
        <div>
          <h1>My to-do list:</h1>
          <input 
          value={this.state.input}
          placeholder="Enter New Task" onChange={e => this.handleChange(e.target.value)}type="text" />
          <button onClick={this.handleTaskChange}>Add</button>
          
        </div>
        <br/>
        {list}
      </div>
      
    );
  }
}

export default App;
