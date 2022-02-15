import React from "react";
import ReactDOM from "react-dom";
import store from "./store/store";



document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(
    <div>
      <h1>Todos App</h1>
    </div>,
    root
  );
});


export default Todo;