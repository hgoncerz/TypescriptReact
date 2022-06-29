import React from "react";
import { Todo } from "../model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({ todo, todos, setTodos }: Props) => {
  return (
    <form className="flex w-4/12 rounded-md p-5 mt-4 bg-indigo-50">
      <span className="flex-1 p-1 border-none text-sm focus:outline-none">
        {todo.todo}
      </span>
      <div className="flex">
        <span className="ml-2.5 text-2xl cursor-pointer">
          <AiFillEdit />
        </span>
        <span className="ml-2.5 text-2xl cursor-pointer">
          <AiFillDelete />
        </span>
        <span className="ml-2.5 text-2xl cursor-pointer">
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
