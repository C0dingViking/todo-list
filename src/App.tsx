import Header from "./components/Header.tsx";
import { Todo } from "./components/Todo.tsx";
import TodoList from "./components/TodoList.tsx";



function App() {


  const todos: Todo[] = [
    //{ desc: "Implement user authentication wfeewfwe fwef wefew fwef ewfewfe fwe", completed: false }, //works fine
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
    <div className="pl-10 pr-10 pt-2 space-y-5 bg-background ">
      <Header></Header>
      <TodoList todos={todos}></TodoList>
    </div>
  );
}

export default App
