
interface Todo {
  desc: string;
  completed: boolean;
};

function Todo({ desc, completed }: Todo) {
  return (
    <ul>
      <li>{desc}</li>
      <li>{completed}</li>
    </ul>
  );

}
export default Todo
