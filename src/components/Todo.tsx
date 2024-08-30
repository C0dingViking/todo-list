
interface Todo {
  desc: string;
  completed: boolean;
};

function Todo({ desc, completed }: Todo) {
  return (
    <span>{desc}</span>
  );

}
export default Todo
