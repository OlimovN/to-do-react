import React from "react";

const TodoList = ({ todos, deleteTodo }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo, index) => (
        <li key={index} className="todo-item">
          {todo}{" "}
          <button onClick={() => deleteTodo(index)}>
            <i class="fa-solid fa-trash"></i>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
