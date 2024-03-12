import React, { useRef } from 'react';
import axios from 'axios';

export default function Todo(props) {
  const paragraphRef = useRef(null);
  function toggleDone() {
    paragraphRef.current.classList.toggle('line-through');
  }

  function removeTodo() {

    axios.delete(`${process.env.REACT_APP_API_URL}/todos`,{
      data:{
        id:props.index
      },
     
    }).then((res)=>{
     props.setTodoArray(res.data);
    
      
      
    }).catch((err)=>{
     
    })
   
  }
 

  return (
    <main className="text-black flex justify-between  m-2 w-[30%]">
      <button onClick={toggleDone} className="p-2 bg-white rounded-full text-sm text-black font-bold">Done</button>
      <p ref={paragraphRef} className="flex items-center">{props.text}</p>
      <button onClick={removeTodo} className="p-2 bg-black text-white font-bold rounded-md">Remove</button>
    </main>
  );
}
