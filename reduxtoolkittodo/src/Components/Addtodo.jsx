
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();

    if (!input.trim()) return;

    dispatch(addTodo(input.trim()));
    setInput("");
  };

  return (
    <div className="w-full max-w-2xl mx-auto mt-10 px-4">
      <form
        onSubmit={addTodoHandler}
        className="flex flex-col sm:flex-row gap-3 p-3
                   bg-white border border-gray-200
                   rounded-2xl shadow-lg
                   hover:shadow-xl transition-shadow duration-300"
      >
        {/* Input */}
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="What needs to be done?"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full px-5 py-3.5
                       text-gray-800 placeholder-gray-400
                       bg-gray-50
                       border border-gray-200
                       rounded-xl
                       outline-none
                       focus:bg-white
                       focus:border-indigo-500
                       focus:ring-4 focus:ring-indigo-100
                       transition-all duration-200"
          />
        </div>

        {/* Add Button */}
        <button
          type="submit"
          className="px-7 py-3.5
                     bg-indigo-600
                     hover:bg-indigo-700
                     active:bg-indigo-800
                     text-white
                     font-semibold
                     rounded-xl
                     shadow-md
                     hover:shadow-lg
                     active:scale-95
                     transition-all duration-200
                     whitespace-nowrap"
        >
          + Add Todo
        </button>
      </form>
    </div>
  );
}

export default AddTodo;
