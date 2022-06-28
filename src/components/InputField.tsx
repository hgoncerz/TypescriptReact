import React from "react";

const InputField = () => {
  return (
    <form className="flex w-11/12 relative align-middle">
      <input
        type="input"
        placeholder="Enter a task"
        className="w-full border border-gray-300 px-3 py-2 shadow-sm rounded-lg focus:ring-indigo-500 "
      />
      <button type="submit" className="absolute w-2/4 h-2/4 mt-3">
        Go
      </button>
    </form>
  );
};

export default InputField;
