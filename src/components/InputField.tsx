import React from "react";

const InputField = () => {
  return (
    <form className="flex">
      <div className="content-center">
        <input
          type="input"
          placeholder="Enter a task"
          className="border border-gray-300 px-3 py-2 shadow-sm rounded-lg 
        focus:ring-indigo-500 my-2 md:w-96 w-56"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded ml-1"
        >
          Go
        </button>
      </div>
    </form>
  );
};

export default InputField;
