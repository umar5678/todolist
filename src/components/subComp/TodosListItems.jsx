const TodosListItems = ({ completed, id, title, tglStatus, hdlDel }) => {
  return (
    <li>
      <label htmlFor="" className="listItems">
        <input
          type="checkbox"
          className="checkbox"
          checked={completed}
          onChange={(e) => tglStatus(id, e.target.checked)}
        />
        <p className="todoDesc">{title}</p>
        <button className="delBtn" onClick={() => hdlDel(id)}>
          Delete
        </button>
      </label>
    </li>
  );
};

export default TodosListItems;
