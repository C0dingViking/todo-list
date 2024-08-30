
export interface Todo {
  desc: string;
  completed: boolean;
};
interface TodoItemProps {
  todo: Todo;
}

export default function TodoItem({ todo }: TodoItemProps) {
  return (
    <span>{todo.desc}</span>
  );

}
