import React from "react";
import { RiExpandUpDownFill } from "react-icons/ri";
import { useGlobalContext } from "./context";
function Filter() {
  const { handleYear } = useGlobalContext();
  return (
    <div className="side-menu mb-6 my-3 sm:my-20">
      <h4 className="flex text-yellow-400 mb-2 items-center font-medium">
        Search Movies By Year
        <RiExpandUpDownFill />
      </h4>
      <select
        onChange={(e) => handleYear(e.target.value)}
        className="opt-menu select border-2 focus:outline-none text-[1rem] p-2 rounded-md text-yellow-400 border-yellow-400 select-ghost w-[100%]"
      >
        {/* <option value="defaultOption">Movies By Year &#8645;</option> */}
        <option>2023</option>
        <option>2022</option>
        <option>2021</option>
        <option>2020</option>
        <option>2019</option>
        <option>2018</option>
        <option>2017</option>
        <option>2016</option>
        <option>2015</option>
        <option>2014</option>
        <option>2013</option>
        <option>2012</option>
        <option>2011</option>
        <option>2010</option>
        <option>2009</option>
        <option>2008</option>
        <option>2007</option>
        <option>2006</option>
        <option>2005</option>
        <option>2004</option>
      </select>
    </div>
  );
}

export default Filter;
