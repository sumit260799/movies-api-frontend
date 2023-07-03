import React from "react";
import { useGlobalContext } from "./context";
import Movies from "./Movies";
import Search from "./Search";
import Buttons from "./Buttons";
function App() {
  return (
    <div>
      <Search />
      <Movies />
      <Buttons />
    </div>
  );
}

export default App;
