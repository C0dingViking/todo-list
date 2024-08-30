import TodoItem, { Todo } from "./Todo";

interface TodoListProps {
  todos: Todo[];
}
export default function TodoList({ todos }: TodoListProps) {
  const completed: Todo[] = todos.filter((item) => item.completed === true);
  const completed_items = displayList(completed);

  const in_progress: Todo[] = todos.filter((item) => item.completed === false);
  const in_process_items = displayList(in_progress);
  return (
    <ul>
      <h2 >in-progress</h2>
      <ul>
        {completed_items}
      </ul>
      <h2>completed</h2>
      <ul>
        {in_process_items}
      </ul>
    </ul>
  );
}

function displayList(list: Todo[]) {
  return list.map((item, index) =>
    <li key={index}>
      <TodoItem todo={item} ></TodoItem>
    </li>
  );
}
