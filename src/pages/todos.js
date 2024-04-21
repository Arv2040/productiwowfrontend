import React from 'react'
import {useState,useEffect} from 'react'
import Todo from '../Components/Todo';

import { useNavigate } from 'react-router-dom';
import '../cssfiles/todos.css'

export default function Todos() {
   const navigate = useNavigate();
    const [text,setText] = useState(" ")
    const [todoarray,setTodoArray] = useState([]);
   
    function handleBack(){
       
        navigate('/choose');
       }
    
   
        
  
   
    function handleTextChange(e){
        setText(e.target.value);
    }
    const handleTodoAdd = async ()=>{
       
       

        setTodoArray([...todoarray,text])
        
        setText(" ");
      
    }
    
    
    
   
  return (
    <main className = "todomain" >
        <section className = "titleandlogout">
        <div className = "todotitle" >Task Manager</div>
        <button className = "logoutbutton"  onClick = {handleBack}>BACK</button>
        </section>
       
       
        
      
        <div className = "todoouter">
            <input className = "todoinput" type="text" placeholder = "Enter Todo" value = {text} onChange = {handleTextChange} />
            <button className = "todoadd" onClick = {handleTodoAdd} >Add</button>

        </div>
        
        <section className = "todomap" >
            {todoarray.map((element,index)=>{
                
                return <Todo text = {element}  todoarray = {todoarray} setTodoArray = {setTodoArray} key = {index}/>
            })}

        </section>
        
      
       
    </main>
  )
}
