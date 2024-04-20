import React from 'react'
import '../cssfiles/choose.css'

export default function Choose() {
  
  return (
    <main className = "choosemain">
      <section className = "todosection">
          <img className = "image" src="/task.svg" alt="task" />
          <button className = "choosebuttons">Task</button>
      </section>
      <section className = "Journal">
      <img className = "image" src="/book.svg" alt="book"/>
      <button  className = "choosebuttons">Journal</button>
          
      </section>

      <section className = "Pomodoro">
     
      <img className = "image" src="/clock.svg" alt="book"/>
      <button  className = "choosebuttons">Pomodoro</button>
      </section>

    </main>
  )
}
