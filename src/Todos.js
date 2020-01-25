import React from "react";

export const Todos = ({ todos, deleteTodo }) => {
  const todoList =
    todos.length > 0 ? (
      todos.map(todo => {
        return (
          <div className="collection-item" key={todo.id}>
            <span
              onClick={() => {
                deleteTodo(todo.id);
              }}
            >
              {todo.title}
            </span>
          </div>
        );
      })
    ) : (
      <p className="center">There's no more movies to watch!</p>
    );

  return <div className="todos collection">{todoList}</div>;
};
