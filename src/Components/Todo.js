import React, { useRef,useEffect } from 'react';


export default function Todo(props) {
  const paragraphRef = useRef(null);
  function toggleDone() {
    const paragraph = paragraphRef.current;
    if (paragraph.style.textDecoration === "line-through") {
        paragraph.style.textDecoration = "none";
    } else {
        paragraph.style.textDecoration = "line-through";
    }
}


  function removeTodo() {

      const newarray = props.todoarray.filter((element)=>{
          return element !== props.text;
      })
      props.setTodoArray(newarray);
   
  }
 

  return (
    <main className = "indtodo" >
      
      <p className = "inditext" ref={paragraphRef} >{props.text}</p>
      <section className = "indiflex">
      <button className = "indiicon"  onClick={toggleDone} >
          Done
      </button>
      <button  className = "indiicon" onClick={removeTodo}>Remove</button>

      </section>
        
    </main>
  );
}
