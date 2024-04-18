import React from 'react'
import {useState,useEffect} from 'react'
import Todo from '../Components/Todo';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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
    <main className = " w-full h-screen overflow-x-hidden overflow-y-scroll">
        <div className = "font-bold w-full text-center text-6xl">TODOS</div>
        <button className ="bg-black ml-2 p-2 rounded-lg  text-white " onClick = {handleLogout}>LOGOUT</button>
        <div className = "mt-10 w-full flex flex-col items-center ">
        <div className = "w-full flex justify-center h-full">
            <input type="text" className = " p-2 border-2 border-black min-w-[30%] rounded-md" value = {text} onChange = {handleTextChange} />
            <button onClick = {handleTodoAdd} className = "bg-black text-white p-2 rounded-md ml-4">AddTodo</button>

        </div>
        
        <section className = "w-full flex mt-10 items-center flex-col">
            {todoarray.map((element,index)=>{
                
                return <Todo text = {element.todo_name} index = {element.id} todoarray = {todoarray} setTodoArray = {setTodoArray} key = {index}/>
            })}

        </section>
        
        </div>
       
    </main>
  )
}
