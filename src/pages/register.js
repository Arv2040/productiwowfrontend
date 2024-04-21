import React,{useState} from 'react'

import {useNavigate } from 'react-router-dom';
import '../cssfiles/register.css'

export default function Register() {
    const navigate = useNavigate();
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [email,setEmail] = useState("");
    function handleRegister(){
       
            {
                navigate('/choose');
            }
            
           
      
    }
    
    
  return (
    
       <main className = "registermain" >
           <section className = "registersection">
            <h1 className = "registertitle" >REGISTER</h1>
           
          
                <input className = "registerinput" value= {email} placeholder = "Enter Email" onChange = {(event)=>{setEmail(event.target.value)}} />
           
            
                <input className = "registerinput" value= {username} onChange = {(event)=>{setUsername(event.target.value)}}  type="text" name="" id="" placeholder = "Username" />
           
            
          
                <input className = "registerinput" value= {password} onChange = {(event)=>{setPassword(event.target.value)}}  type="password" name="" id="" placeholder = "Password" />
          
            <button className = "registersubmit" onClick = {handleRegister}>
                SUBMIT
            </button>
                
            
            
            
           </section>
    
       </main>
      )
 }
    
  

