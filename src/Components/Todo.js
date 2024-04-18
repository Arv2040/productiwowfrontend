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
      headers:{
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
     
      
     
    }).then((res)=>{
     props.setTodoArray(res.data);
    
      
      
    }).catch((err)=>{
     
    })
   
  }
 

  return (
    <main className = "indtodo" >
      
      <p ref={paragraphRef} >{props.text}</p>
      <section>
      <button onClick={toggleDone} >Done</button>
      <button onClick={removeTodo}>Remove</button>

      </section>
     
    </main>
  );
}
