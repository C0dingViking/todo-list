import { Todo } from "./Todo.tsx";
import TodoList from "./TodoList.tsx";

function Lists(){
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
        <>
          <TodoList todos={todos}></TodoList>
        </>
      );
}

export default Lists