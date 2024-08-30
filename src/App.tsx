import Header from "./components/Header.tsx";
import Todo from "./components/Todo.tsx";

function App() {
  return (
    <div>
      <Header></Header>
      <Todo desc={"A1"} completed={false}></Todo>
      <body>
        <h1 className="text-red-300 font-bold underline ">
          Hello world!
        </h1>
      </body>
    </div >
  );
}

export default App
