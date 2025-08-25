import React from "react";
import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { TodoProvider } from "./context/TodoContext";
import "./index.css";

function App() {
  return (
    <TodoProvider>
      <div className="app">
        <Header />
        <main className="todo-container">
          <TodoInput />
          <TodoList />
        </main>
      </div>
    </TodoProvider>
  );
}

export default App;
