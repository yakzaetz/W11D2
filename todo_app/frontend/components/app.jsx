import React from 'react';
import { allTodos } from '../reducers/selectors';
import TodoList from './todos/todo_list';
import TodoListContainer from './todos/todo_list_container'

const App = () => {
  return (
    <div>
      <h1>Todo App</h1>
      <TodoListContainer/>
    </div>
  );
};

export default App;