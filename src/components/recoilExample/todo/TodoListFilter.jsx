import React from "react";
import { useRecoilState } from "recoil";
import { todoListFilterState } from "./TodoStore";

export default function TodoListFilter() {
  const [filter, setFilter] = useRecoilState(todoListFilterState);
  const updateFilter = (e) => setFilter(e.target.value);

  return (
    <select value={filter} onChange={updateFilter}>
      <option value="Show All">All</option>
      <option value="Show Completed">Completed</option>
      <option value="Show Uncompleted">UnCompleted</option>
    </select>
  );
}
