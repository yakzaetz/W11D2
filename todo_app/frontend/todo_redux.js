import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import { receiveTodos, receiveTodo } from "./actions/todo_actions"
import Root from "./components/root";


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore();
  ReactDOM.render(<Root store={store}/>, root);

  
  window.store = store;
  window.receiveTodos = receiveTodos;
  });


// export default Todo;