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
    <div className="bg-highlight rounded-xl p-4 inline-block ">
      <ul className="inline-block pr-28 font-mono space-y-4 ">
        <div>
          <h2 className="text-lg font-semibold" >in-progress</h2>
          <div className="pl-4 ml-4 rounded-3xl bg-secondary pt-2 pb-2 mt-1">
            <ul >
              {completed_items}
            </ul>
          </div>
        </div>
        <div>
          <h2 className="text-lg font-semibold" >completed</h2>
          <div className="pl-4 ml-4 rounded-3xl bg-foreground pt-2 pb-2 mt-1">
            <ul className="inline-block pr-28 font-mono space-y-3 ">
              {in_process_items}
            </ul>
          </div>
        </div>
      </ul>
    </div>
  );
}

function displayList(list: Todo[]) {
  return list.map((item, index) =>
    <li key={index}>
      <TodoItem todo={item} ></TodoItem>
    </li>
  );
}
