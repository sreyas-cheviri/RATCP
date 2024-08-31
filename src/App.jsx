import { useState , useEffect } from "react";
import Todoinput from "./components/Todoinput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState(["example"]);
  const [todoValue, settodovalue] = useState("");


  function persistData(newList) {
    localStorage.setItem('todos', JSON.stringify({ todos: newList }))
  }

  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo];
    persistData(newTodoList)
    setTodos(newTodoList);
  }

  function handleDeleteTodo(index) {
    const newtodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index;
    });
    persistData(newtodoList)
    setTodos(newtodoList);
  }

  function handleeditTodo(index) {
    const valuetobeedited = todos[index];
    settodovalue(valuetobeedited);
    handleDeleteTodo(index);
  }

  useEffect(() => {
    if (!localStorage) {
      return
    }

    let localTodos = localStorage.getItem('todos')
    if (!localTodos) {
      return
    }

    console.log(localTodos)
    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)

  }, [])
  return (
    <>
      <Todoinput
        todoValue={todoValue}
        settodovalue={settodovalue}
        handleAddTodos={handleAddTodos}
      />
      <TodoList
        handleeditTodo={handleeditTodo}
        handleDeleteTodo={handleDeleteTodo}
        todos={todos}
      />
    </>
  );
}

export default App;
