import React from 'react'
import '../cssfiles/sidebar.css'
export default function Sidebar(props) {
    const handleAdd = ()=>{
        props.setJournal(props.text);
    }
    const handleRemove = ()=>{
        const newarray = [...props.jarray];
        const array = newarray.filter((element)=>{
            return element !== (props.text);

        })
        props.setJarray(array)
    }
    const date = new Date();
  return (
    <main className = "sidebarmain">
      
        <p className = "date">{date.getDate()}/{date.getMonth()+1}/{date.getFullYear()}</p>
        
      
       
      
        <p className = "sidebartext">{props.text}</p>

        <div className = "iconss">
        <button onClick = {handleAdd} className = "addicon">
            +

            </button>
            <button onClick = {handleRemove} className = "addicon">
            
            -
            </button>
        </div>
        
        
    </main>
  )
}
