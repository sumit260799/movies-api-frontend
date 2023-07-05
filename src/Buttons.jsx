import React from "react";
import { useGlobalContext } from "./context";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";
import { Link } from "react-router-dom";
const Buttons = () => {
  const { isLoading, page, totalPages, handlePage, handleSearch, search } =
    useGlobalContext();
  return (
    <main className=" mb-5 sm:mb-10 grid grid-cols-1 gap-2  md:grid-cols-2 lg:grid-cols-3 sm:my-10 my-3 sm:ml-7 ml-0 ">
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          className=" w-[250px] lg:w-[300px] outline-none px-2 sm:px-5  sm:py-2 border-b-2 text-yellow-600 text-[1.5rem] border-yellow-500"
          type="text"
          value={search}
          placeholder="Search Movies"
          onChange={(e) => handleSearch(e.target.value)}
        />{" "}
      </form>
      <div className="btn-class flex mt-2 sm:mt-5 text-yellow-500 text-[1.8rem]  gap-5  items-end   lg:ml-16">
        <button
          className="pb-1"
          disabled={isLoading}
          onClick={() => handlePage("dec")}
        >
          <FaLessThan />
        </button>
        <p className="flex text-[1.5rem] place-items-end">
          {page} of {totalPages}
        </p>
        <button
          className="pb-1"
          disabled={isLoading}
          onClick={() => handlePage("inc")}
        >
          <FaGreaterThan />
        </button>
      </div>
    </main>
  );
};

export default Buttons;
