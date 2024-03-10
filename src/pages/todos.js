import React from 'react'
import {useState,useEffect} from 'react'
import Todo from '../Components/Todo';

export default function Todos() {
    const [text,setText] = useState("")
    const [todoarray,setTodoArray] = useState([]);
    function handleTextChange(e){
        setText(e.target.value);
    }
    const handleTodoAdd = ()=>{
       setTodoArray([...todoarray,text])
       setText(" ");
      
    }

  return (
    <main className = "bg-[#E3E1D9] w-full h-screen overflow-x-hidden overflow-y-scroll">
        <h1 className = "font-bold w-full text-center text-6xl">TODOS</h1>
        <div className = "mt-10 w-full flex flex-col items-center ">
        <div className = "w-full flex justify-center h-full">
            <input type="text" className = " border-2 border-black w-[30%] rounded-md" value = {text} onChange = {handleTextChange} />
            <button onClick = {handleTodoAdd} className = "bg-black text-white p-2 rounded-md ml-4">AddTodo</button>

        </div>
        
        <section className = "w-full flex mt-10 items-center flex-col">
            {todoarray.map((element,index)=>{
                return <Todo text = {element} index = {index} todoarray = {todoarray} setTodoArray = {setTodoArray} key = {index}/>
            })}

        </section>
        </div>
       
    </main>
  )
}
