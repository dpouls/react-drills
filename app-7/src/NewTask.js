import React, { Component } from "react";
import Todo from './Todo'

class NewTask extends Component{
    constructor(){
        super();

        this.state = {
            input: ''
        }
        this.handleAdd = this.handleAdd.bind(this)
    }

    handleInputChange(val){
        this.setState({input: val})
    }
    handleAdd(){
        this.props.add(this.state.input);
        this.setState({input: ''})
    }
    render(){
        return(
            <div>
                <input
                value={this.state.input}
                placeholder="Enter new task"
                onChange={ e => this.handleInputChange(e.target.value)}/>
                <button
                onClick={this.handleAdd}>Add</button>
            </div>
        )
    }

}

export default NewTask