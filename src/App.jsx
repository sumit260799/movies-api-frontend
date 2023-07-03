import React from "react";
import { useGlobalContext } from "./context";
function App() {
  const { name } = useGlobalContext();
  return <div>{name}</div>;
}

export default App;
