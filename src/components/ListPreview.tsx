import { Todo } from "./Todo.tsx";
import { useNavigate } from "react-router-dom";
export interface ListPreviewProps {
  listName: string,
  biggestTodos: Todo[];
  allTodos: Todo[];
}

export default function ListPreview({ listName, biggestTodos, allTodos }: ListPreviewProps) {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(`/lists/${listName}`, { state: { allTodos } });
  };

  const todos = biggestTodos.map((item, index) =>
    <li key={index}>
      {item.desc}
      {item.completed == true &&
        <span className="text-green-500"> pass</span>
      }
      {item.completed == false &&
        <span className="text-red-500"> fail</span>
      }
    </li>
  );
  return (
    <div className="bg-highlight rounded-xl p-4 flex" onClick={handleNavigation}>
      <span className="text-2xl font-bold">
        {listName}
      </span>
      <div className="pl-4 ml-4 rounded-3xl bg-secondary px-2.5 font-semibold text-base">
        <ul>
          {todos}
        </ul>
      </div>
    </div>
  );

}
