import React from "react";
import { useGlobalContext } from "./context";
import Movies from "./Movies";
import Buttons from "./Buttons";
import Filter from "./Filter";
import Genre from "./Genre";
function App() {
  return (
    <main className="xl:w-[75%] lg:-[80%] sm:w-[85%] w-[90%] mx-auto">
      <Buttons />
      <div className="sm:flex flex-row-reverse justify-between my-2 sm:my-16">
        <div className=" sm:w-[25%] w-[100%] ">
          <Genre />
          <Filter />
        </div>
        <div className="sm:w-[70%] w-[100%] mx-auto">
          <Movies />
        </div>
      </div>
    </main>
  );
}

export default App;
