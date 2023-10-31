import { useEffect, useState } from "react";
import "./App.css";
import NewTodoForm from "./components/NewTodoForm";
import TodosList from "./components/TodosList";

const App = () => {
  const [todosList, setTodosList] = useState(() => {
    const localData = localStorage.getItem("todosListData");
    if (localData === null) return [];
    return JSON.parse(localData);
  });

  useEffect(() => {
    localStorage.setItem("todoListData", JSON.stringify(todosList));
  }, [todosList]);

  function addNewTodo(title) {
    setTodosList((currTodo) => [
      ...currTodo,
      { id: crypto.randomUUID(), title, completed: false },
    ]);
  }

  function hdlDel(id) {
    setTodosList((currTodos) => currTodos.filter((todo) => todo.id !== id));
  }

  function tglStatus(id, completed) {
    setTodosList((currTodos) =>
      currTodos.map((todo) => (todo.id === id ? { ...todo, completed } : todo))
    );
  }

  return (
    <div className="todoAppContainer">
      <NewTodoForm onSubmit={addNewTodo} />
      <TodosList
        todosList={todosList}
        tglStatus={tglStatus}
        hdlDel={hdlDel}
        setTodosList={setTodosList}
      />
    </div>
  );
};

export default App;
