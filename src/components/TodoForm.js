import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      todoName: "",
    };
  }

  handleChanges = (event) => {
    this.setState({ todoName: event.target.value });
    console.log(this.state);
  };

  submitTodo = (event) => {
    event.preventDefault();
    this.props.addTodo(event, this.state.todoName);
    this.setState({
      name: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.submitTodo}>
        <input
          onChange={this.handleChanges}
          name="todo"
          type="text"
          placeholder="type item here"
          value={this.state.todo}
        />
        <button>
          Add Item <br />
          (or press ENTER)
        </button>
      </form>
    );
  }
}

export default TodoForm;
