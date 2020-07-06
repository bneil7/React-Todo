import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./Todo.css";

const todoList = [
  {
    name: "Organize Garage",
    id: 1528817077286,
    completed: false,
  },
  {
    name: "Bake Cookies",
    id: 1528817084358,
    completed: false,
  },
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todoList,
    };
  }

  toggleTodo = (todoId) => {
    this.setState({
      todoList: this.state.todoList.map((todo) => {
        if (todoId === todo.id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    });
  };

  addTodo = (event, todo) => {
    event.preventDefault();
    const newTodo = {
      name: todo,
      id: new Date(),
      completed: false,
    };
    this.setState({
      todoList: [...this.state.todoList, newTodo],
    });
  };

  clearCompleted = (event) => {
    event.preventDefault();
    this.setState({
      todoList: [...this.state.todoList.filter((todo) => !todo.completed)],
    });
  };

  render() {
    console.log("rendering...");
    return (
      <div className="App">
        <div className="header">
          <h2>STUFF I GOTTA DO</h2>
          <TodoForm addTodo={this.addTodo} />
        </div>
        <TodoList
          toggleTodo={this.toggleTodo}
          todoList={this.state.todoList}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
