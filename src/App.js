import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SingleTodo from './SingleTodo.js';

class App extends Component {
  constructor(){
    super();
    this.state = {
      todos: [],
      currentTodo: ""
    };
  }
  onInputChange = e => {
      this.setState({currentTodo: e.target.value});
  }
  
  onbtnClick = () => {
    let todosCopy = this.state.todos;
    todosCopy.push(this.state.currentTodo);
    this.setState({todos: todosCopy, currentTodo: ""});
  }
  deleteTodo = i => {
    let todosCopy = this.state.todos;
    todosCopy.splice(i,1);
    this.setState({todos: todosCopy});
  }

  render() {
    let bulletedTodos = this.state.todos.map((e, i) => {
      return(<SingleTodo k={i} todo={e} delete={() => this.deleteTodo(i)}/>);
    });
    
    
    return (
      <div>
      <div className = "container">
          <input placeholder="Enter todo" value={this.state.currentTodo} 
            onChange = {this.onInputChange}/>
          <button onClick = {this.onbtnClick}>Add!</button> 
      </div>
        { this.state.todos.length === 0 ? "No todos yet!" : <ul>{bulletedTodos}</ul>}  
       
      </div>
    );
  }

}
export default App;
