import React,{useState} from 'react'

import '../cssfiles/login.css'
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();
    const[username,setUsername] = useState("");
    const[password,setPassword] = useState("");
    function handleLogin(){
       
    
            navigate('/choose');
            
      
        
    }
  return (
   <main className = "loginmain"  >
       <section className = "loginsection">
        <h1 className = "logintitle">LOGIN</h1>
       
       
            <input className = "logininput" value = {username} onChange = {(event)=>{setUsername(event.target.value)}}  type="text" name="" id="" placeholder = "Username" />
      
       
            <input className = "logininput" value = {password} onChange = {(event)=>{setPassword(event.target.value)}}  type="password" name="" id="" placeholder = "Password" />
       
        <button className = "loginsubmit" onClick = {handleLogin}>
            SUBMIT
        </button>

        
       
      
        
       </section>

   </main>
  )
}
