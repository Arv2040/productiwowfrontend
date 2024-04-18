import React,{useState} from 'react'
import axios from 'axios'
import {useNavigate } from 'react-router-dom';

export default function Register() {
    const navigate = useNavigate();
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [email,setEmail] = useState("");
    async function handleRegister(){
        try{
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/users/register`,{
                username,
                email,
                password
            });
            if(response.status === 201){
                navigate('/login');
            }
            
           
        }
        catch(error){
            console.error(error.message);
        }
    }
    
    
  return (
    
       <main >
           <section>
            <h1 >REGISTER</h1>
            <div >
                <input value= {email} onChange = {(event)=>{setEmail(event.target.value)}} />
            </div>
            <div >
                <input value= {username} onChange = {(event)=>{setUsername(event.target.value)}}  type="text" name="" id="" placeholder = "Username" />
            </div>
            
            <div className = "w-full flex justify-center">
                <input value= {password} onChange = {(event)=>{setPassword(event.target.value)}}  type="password" name="" id="" placeholder = "Password" />
            </div>
            <button onClick = {handleRegister}>
                SUBMIT
            </button>
            
           </section>
    
       </main>
      )
 }
    
  

