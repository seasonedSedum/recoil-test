import React from "react";
import { useRecoilValue } from "recoil";
import TodoItem from "./TodoItem";
import TodoListCreator from "./TodoListCreator";
import TodoListFilter from "./TodoListFilter";
import { filteredTodoListState } from "./TodoStore";
import TodoListStats from "./TodoListStats";

export default function TodoList() {
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <>
      <TodoListStats />
      <TodoListFilter />
      <TodoListCreator />
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
}
