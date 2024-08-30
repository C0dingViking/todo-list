import Header from "./components/Header.tsx";
import TodoItem, { Todo } from "./components/Todo.tsx";
import TodoList from "./components/TodoList.tsx";

function App() {

  const todo: Todo = {
    desc: "A1",
    completed: false,
  }

  const todos: Todo[] = [
    { desc: "Implement user authentication", completed: false },
    { desc: "Set up database schema", completed: true },
    { desc: "Design the home page UI", completed: false },
    { desc: "Write unit tests for API endpoints", completed: true },
    { desc: "Integrate payment gateway", completed: false },
    { desc: "Deploy application to production", completed: false },
    { desc: "Fix bug in login flow", completed: true },
    { desc: "Optimize images for faster loading", completed: false },
    { desc: "Update documentation", completed: true },
    { desc: "Refactor code for better maintainability", completed: false }
  ];
  return (
    <div>
      <Header></Header>
      <TodoItem todo={todo}></TodoItem>
      <TodoList todos={todos}></TodoList>
    </div>
  );
}

export default App
