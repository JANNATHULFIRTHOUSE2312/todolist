import { useTodos } from "../context/TodoContext";

function TodoItem({ todo }) {
  const { toggleTodo, deleteTodo } = useTodos();

  return (
    <div className="todo-item">
      <div
        className={`todo-text ${todo.completed ? "completed" : ""}`}
        onClick={() => toggleTodo(todo.id)}
      >
        <span className={`check ${todo.completed ? "checked" : ""}`}></span>
        {todo.text}
      </div>
      <button className="delete" onClick={() => deleteTodo(todo.id)}>✕</button>
    </div>
  );
}

export default TodoItem;
