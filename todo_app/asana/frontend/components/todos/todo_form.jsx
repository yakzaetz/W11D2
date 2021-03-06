import React, { Component } from 'react';

class TodoForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      id: Math.floor(Math.random() * 1000000),
      title: ''
    }

    this.updateTitle = this.updateTitle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

    updateTitle(e) {
      this.setState({title: e.target.value})
    }

    handleSubmit(e) {
      e.preventDefault();
      this.props.receiveTodo(this.state)
      this.setState({
        id: Math.floor(Math.random() * 1000000),
        title: ''
      })
    }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <h1>Add Todo</h1>
          <label>Title:
            <input type="text" value={this.state.title} onChange={this.updateTitle}></input>
          </label>
          <input type="submit" value="addTodo"></input>
        </form>
      )
    }
}

export default TodoForm;