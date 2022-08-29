import React from "react";
import { RecoilRoot } from "recoil";
import { CharacterCounter } from "./components/recoilExample/CharacterCounter";
import FontButton from "./components/recoilExample/FontButton";
import Text from "./components/recoilExample/Text";
import TodoList from "./components/recoilExample/todo/TodoList";

function App() {
  return (
    <RecoilRoot>
      {/* <CharacterCounter /> */}
      {/* <FontButton /> */}
      {/* <Text /> */}
      <TodoList />
    </RecoilRoot>
  );
}

export default App;
