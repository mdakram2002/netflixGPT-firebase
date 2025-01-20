
import React from "react";
import lang from "../utils/language";
import { useSelector } from "react-redux";

const GptSearchBar = () => {

  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className="flex justify-center p-[20%]">
      <form className=" bg-gray-900 grid grid-cols-12">
        <input
          type="text"
          placeholder={lang[langKey].GptSearchPlaceholder}
          className="p-1 m-3 rounded-sm col-span-9"
        />
        <button className="py-2 m-3 px-6 bg-red-600  hover:bg-red-500 hover:text-white rounded-lg text-xl font-semibold text-white hover:underline col-span-3">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
