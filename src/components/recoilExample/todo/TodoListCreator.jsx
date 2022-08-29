import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "./TodoStore";

export default function TodoListCreator() {
  const [inputText, setInputText] = useState("");
  const setTodoList = useSetRecoilState(todoListState);

  return (
    <div>
      <input type="text" onChange={change} />
      <button onClick={click}>Add</button>
    </div>
  );

  function change(e) {
    setInputText(e.target.value);
  }

  function click() {
    const id = getId();

    setTodoList((list) => [
      ...list,
      {
        id: id,
        value: inputText,
        isComplete: false,
      },
    ]);
  }
}

let idCount = 0;
function getId() {
  return idCount++;
}
