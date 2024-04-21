import React from 'react'
import '../cssfiles/choose.css'
import { useNavigate } from 'react-router-dom'

export default function Choose() {
  const navigate = useNavigate();
  function navtodo(){
    navigate('/todos')
  }
  function navjournal(){
    navigate('/journal')
  }
  function navpomodoro(){
    navigate('/pomodoro')
  }
  
  return (
    <main className = "choosemain">
      <button onClick = {()=>{
        navigate('/');
      }} className = "logout">LOGOUT</button>
      <section className = "todosection">
          <img className = "image" src="/task.svg" alt="task" />
          <button onClick = {navtodo} className = "choosebuttons">Task</button>
      </section>
      <section className = "Journal">
      <img className = "image" src="/book.svg" alt="book"/>
      <button onClick = {navjournal}  className = "choosebuttons">Journal</button>
          
      </section>

      <section className = "Pomodoro">
     
      <img className = "image" src="/clock.svg" alt="book"/>
      <button onClick = {navpomodoro}  className = "choosebuttons">Pomodoro</button>
      </section>

    </main>
  )
}
