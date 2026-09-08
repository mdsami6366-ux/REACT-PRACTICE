import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import TodoItems from "./components/TodoItems";
import "./App.css";


function App() {
 
  const todoItems = [
    {
      name: "buy milk",
      dueDate: "05/06/2026",
    },
    {
      name: "go to college",
      dueDate: "08/08/2026",
    },
     {
      name: "like this ",
      dueDate: "06/05/2026",
    },
  ]

  return (
    <center className="todo-container">
      <AppName />
      <AddToDo />
      <TodoItems todoItems={todoItems}></TodoItems>
     
    </center>
  );

}

export default App;