import React from 'react'
import {useState,useEffect} from 'react'
import Todo from '../Components/Todo';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../cssfiles/todos.css'

export default function Todos() {
   const navigate = useNavigate();
    const [text,setText] = useState(" ")
    const [todoarray,setTodoArray] = useState([]);
    const token = localStorage.getItem("accessToken");
    function handleLogout(){
        localStorage.removeItem("accessToken");
        navigate('/');
       }
    
    useEffect(()=>{
       
        axios.get(`${process.env.REACT_APP_API_URL}/todos`,{
            headers:{
                'Authorization': `Bearer ${token}`
            }
        }).then((res)=>{
            
        const data = res.data;
           
        setTodoArray(data);
         

        
        }).catch((err)=>{
            console.log(err.message);
        })
        
    },[]);
   
    function handleTextChange(e){
        setText(e.target.value);
    }
    const handleTodoAdd = async ()=>{
       
        axios.post(`${process.env.REACT_APP_API_URL}/todos`,{
            data:text, 
        },
        {
            headers:{
                'Authorization': `Bearer ${token}`
            }
        }).then((res)=>{
            
            
            setTodoArray([...todoarray,res.data.data.newTodo]);
        
        }).catch((err)=>{

        })

        // setTodoArray([...todoarray,text])
        
        setText(" ");
      
    }
    
    
    
   
  return (
    <main className = "todomain" >
        <section className = "titleandlogout">
        <div className = "todotitle" >Task Manager</div>
        <button className = "logoutbutton"  onClick = {handleLogout}>LOGOUT</button>
        </section>
       
       
        
      
        <div className = "todoouter">
            <input className = "todoinput" type="text" placeholder = "Enter Todo" value = {text} onChange = {handleTextChange} />
            <button onClick = {handleTodoAdd} >Add</button>

        </div>
        
        <section className = "todomap" >
            {todoarray.map((element,index)=>{
                
                return <Todo text = {element.todo_name} index = {element.id} todoarray = {todoarray} setTodoArray = {setTodoArray} key = {index}/>
            })}

        </section>
        
      
       
    </main>
  )
}
