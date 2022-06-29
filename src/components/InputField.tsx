import React from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  return (
    <form className="flex" onSubmit={(e) => handleAdd(e)}>
      <div className="content-center">
        <input
          type="input"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
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
