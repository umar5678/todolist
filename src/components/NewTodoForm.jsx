import { useState } from "react";

const NewTodoForm = ({ onSubmit }) => {
  const [newTodo, setNewTodo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    onSubmit(newTodo);

    setNewTodo("");
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        id="item"
        type="text"
        className="input"
        value={newTodo}
        onChange={(e) => {
          setNewTodo(e.target.value);
        }}
      />
      <button className={newTodo === "" ? "disabled" : "addBtn"}>Add</button>
    </form>
  );
};

export default NewTodoForm;
