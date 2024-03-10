import React, { useRef } from 'react';

export default function Todo(props) {
  const paragraphRef = useRef(null);

  function toggleDone() {
    paragraphRef.current.classList.toggle('line-through');
  }

  function removeTodo() {
    
    const updatedTodoArray = [...props.todoarray];
    updatedTodoArray.splice(props.index, 1);
    props.setTodoArray(updatedTodoArray);
  }
 
  return (
    <main className="text-black flex justify-between  m-2 w-[30%]">
      <button onClick={toggleDone} className="p-2 bg-white rounded-full text-sm text-black font-bold">Done</button>
      <p ref={paragraphRef} className="flex items-center">{props.text}</p>
      <button onClick={removeTodo} className="p-2 bg-black text-white font-bold rounded-md">Remove</button>
    </main>
  );
}
