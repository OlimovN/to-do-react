import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addTodo(input);
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add your new todo"
      />
      <button type="submit">
        <i class="fa-solid fa-address-book"></i>
        <i class="fa-solid fa-calendar-circle-plus"></i>
      </button>
    </form>
  );
};

export default TodoForm;
