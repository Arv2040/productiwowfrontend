import React,{useState} from 'react'
import axios from 'axios';
import '../cssfiles/login.css'
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();
    const[username,setUsername] = useState("");
    const[password,setPassword] = useState("");
    async function handleLogin(){
        try{
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/users/login`,{
                username,
                password
            });
            localStorage.setItem("accessToken",response.data.token);
            if(response.status === 200){
                navigate('/todos');
            }
            else{
                navigate('/');
            }
        }
        catch(error){
            console.log(error.message);
        }
        
    }
  return (
   <main className = "loginmain"  >
       <section className = "loginsection">
        <h1>LOGIN</h1>
        <div className = "authsection">
        <div className = "username" >
            <input value = {username} onChange = {(event)=>{setUsername(event.target.value)}}  type="text" name="" id="" placeholder = "Username" />
        </div>
       
        <div className = "password">
            <input value = {password} onChange = {(event)=>{setPassword(event.target.value)}}  type="password" name="" id="" placeholder = "Password" />
        </div>
        <button onClick = {handleLogin}>
            SUBMIT
        </button>

        </div>
       
      
        
       </section>

   </main>
  )
}
