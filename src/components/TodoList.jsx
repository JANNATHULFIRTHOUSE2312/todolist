import TodoItem from "./TodoItem";
import { useTodos } from "../context/TodoContext";

function TodoList() {
  const { filteredTodos, todos, setFilter, clearCompleted } = useTodos();

  return (
    <>
      <div className="todo-list">
        {filteredTodos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>

      <div className="todo-footer">
        <span>{todos.filter((t) => !t.completed).length} items left</span>
        <div className="filters">
          <button onClick={() => setFilter("all")}>All</button>
          <button onClick={() => setFilter("active")}>Active</button>
          <button onClick={() => setFilter("completed")}>Completed</button>
        </div>
        <button onClick={clearCompleted}>Clear Completed</button>
      </div>
    </>
  );
}

export default TodoList;
