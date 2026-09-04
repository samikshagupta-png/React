import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-xl mx-auto">

        {/* Heading */}
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          My Todos
        </h1>

        {/* Todo Card */}
        <div className="bg-white rounded-2xl shadow-lg p-6">

          {todos.length === 0 ? (
            <p className="text-center text-gray-500 py-8">
              No todos available 🎉
            </p>
          ) : (
            <ul className="space-y-3">
              {todos.map((todo) => (
                <li
                  key={todo.id}
                  className="flex items-center justify-between bg-gray-50
                             border border-gray-200 rounded-xl px-4 py-3
                             hover:shadow-md transition"
                >
                  {/* Todo text */}
                  <span className="text-gray-700 font-medium">
                    {todo.text}
                  </span>

                  {/* Delete button */}
                  <button
                    onClick={() => dispatch(removeTodo(todo.id))}
                    className="bg-red-500 hover:bg-red-600 text-white
                               px-3 py-2 rounded-lg text-sm font-medium
                               transition duration-200"
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          )}

        </div>
      </div>
    </div>
  );
}

export default Todos;