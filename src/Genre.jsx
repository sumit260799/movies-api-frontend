import React from "react";
import { useGlobalContext } from "./context";
import { RiExpandUpDownFill } from "react-icons/ri";
function Genre() {
  const { handleGenre } = useGlobalContext();
  return (
    <div className="side-menu ">
      <h4 className="flex text-yellow-400 items-center font-medium  mb-2 ">
        Search Movies By Genre
        <RiExpandUpDownFill />
      </h4>
      <select
        onChange={(e) => handleGenre(e.target.value)}
        className="  select border-2 focus:outline-none text-[1rem] outline-none bg-transparent p-2 rounded-md text-yellow-400 border-yellow-400  w-[100%]"
      >
        {/* <option value="defaultOption">Movies By Genre &#8645;</option> */}
        <option>Action</option>
        <option>Adventure</option>
        <option>Crime</option>
        <option>Thriller</option>
        <option>Sci-fi</option>
        <option>Documentary</option>
        <option>Biography</option>
        <option>History</option>
        <option>Comedy</option>
        <option>Fantasy</option>
        <option>Horror</option>
        <option>War</option>
        <option>Drama</option>
        <option>Mystery</option>
        <option>Romance</option>
        <option>Music</option>
        <option>Animation</option>
        <option>Sport</option>
      </select>
    </div>
  );
}

export default Genre;
