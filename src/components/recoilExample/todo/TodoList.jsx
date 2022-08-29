import React from "react";
import { useRecoilValue } from "recoil";
import TodoItem from "./TodoItem";
import TodoListCreator from "./TodoListCreator";
import { todoListState } from "./TodoStore";

export default function TodoList() {
  const todoList = useRecoilValue(todoListState);

  return (
    <>
      <TodoListCreator />
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
}
