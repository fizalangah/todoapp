"use client";
import { useState } from "react";
import { todotype } from "./todosType/todos";
import { v4 as uuid } from "uuid";

const Home: React.FunctionComponent = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<todotype[]>([]);

  const addTodo = () => {
    if (todo.trim() !== "") {
      setTodos([{ id: uuid(), value: todo, done: false }, ...todos]);
      setTodo("");
    }
  };

  const markTodoDone = (id: string) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, done: !todo.done } : todo));
  };

  return (
    <>
      <header className="bg-pink-200 p-3">
        <h1 className="text-center text-lg text-blue-400 font-bold">TodoApp</h1>
      </header>
      <div className="p-4 ml-[300px] mt-[100px]">
        <input
          className="rounded text-center text-sm p-3 text-black"
          type="text"
          placeholder="Enter todo here"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
        <button
          className="bg-pink-400 ml-5 rounded p-3"
          onClick={addTodo}
        >
          Add Todo
        </button>
        <ul className="p-4 pl-8">
          {todos.map(todo => (
            <li
              key={todo.id}
              onClick={() => markTodoDone(todo.id)}
              className={`text-xl text-black cursor-pointer ${todo.done ? 'line-through' : 'no-underline'}`}
            >
              {todo.value}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Home;
