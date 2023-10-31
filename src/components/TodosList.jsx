import TodosListItems from "./subComp/TodosListITems";

const TodosList = ({ todosList, tglStatus, hdlDel, setTodosList }) => {
  return (
    <main>
      {/* conditionally rendering noTodos and bar */}
      {todosList.length === 0 ? (
        <h4 className="noTodo">No Todos</h4>
      ) : (
        <div className="listTopBar">
          <button
            className="delAllBtn"
            id="deleteAll"
            onClick={() => {
              setTodosList([]);
            }}
          >
            Delete All
          </button>
        </div>
      )}

      <ul>
        {todosList.map((todo) => (
          <TodosListItems
            {...todo}
            key={todo.id}
            tglStatus={tglStatus}
            hdlDel={hdlDel}
          />
        ))}
      </ul>
    </main>
  );
};

export default TodosList;
