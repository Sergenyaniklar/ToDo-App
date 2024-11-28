import React from 'react';

function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} className={todo.completed ? "completed" : ""}>
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <label>{todo.text}</label>
            <button className="destroy" onClick={() => deleteTodo(todo.id)}></button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
