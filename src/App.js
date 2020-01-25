import React, { Component } from "react";
// import { Ninjas } from "./Ninjas";
// import AddNinja from "./AddNinja";
import { Todos } from "./Todos";
import AddTodo from "./components/AddTodo";

export default class App extends Component {
  // state = {
  //   ninjas: [
  //     { id: 1, name: "WHATEVER", age: 26, belt: "red" },
  //     { id: 2, name: "WHATEVER2", age: 226, belt: "black" },
  //     { id: 3, name: "WHATEVER3", age: 2226, belt: "white" }
  //   ]
  // };

  // addNinja = ninja => {
  //   ninja.id = Math.random();
  //   let ninjas = [...this.state.ninjas, ninja];
  //   this.setState({ ninjas });
  // };

  // deleteNinja = id => {
  //   let ninjas = this.state.ninjas.filter(ninja => {
  //     return ninja.id !== id;
  //   });
  //   this.setState({ ninjas });
  // };

  state = {
    todos: [
      { id: 1, title: "Parasite" },
      { id: 2, title: "Midsommar" }
    ]
  };

  deleteTodo = id => {
    let todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({ todos });
  };

  addTodo = todo => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({ todos });
  };

  render() {
    return (
      <div className="todo-app container">
        {/* <Ninjas ninjas={this.state.ninjas} deleteNinja={this.deleteNinja} />
        <AddNinja addNinja={this.addNinja} /> */}
        <h1 className="center blue-text">What to watch?</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}
