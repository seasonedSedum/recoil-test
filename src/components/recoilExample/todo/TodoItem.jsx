import React from "react";
import { useRecoilState } from "recoil";
import { todoListState } from "./TodoStore";

export default function TodoItem({ item }) {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex((i) => i === item);

  return (
    <div>
      id : {item.id}
      <input
        type="text"
        value={item.value}
        onChange={textChange}
        style={{ margin: "0 10px" }}
      />
      <input
        type="checkbox"
        checked={item.isComplete}
        onChange={completeToggle}
        style={{ marginRight: "10px" }}
      />
      <button onClick={delClick} style={{ marginRight: "10px" }}>
        X
      </button>
    </div>
  );

  function textChange(e) {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      value: e.target.value,
    });

    setTodoList(newList);
  }

  function completeToggle() {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    });

    setTodoList(newList);
  }
  function delClick() {
    const newList = deleteItemAtIndex(todoList, index);

    setTodoList(newList);
  }
}

function replaceItemAtIndex(arr, index, newItem) {
  return [...arr.slice(0, index), newItem, ...arr.slice(index + 1)];
}

function deleteItemAtIndex(arr, index) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}
