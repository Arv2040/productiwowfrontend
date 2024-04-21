import React, { useState } from 'react'
import '../cssfiles/journal.css'
import Sidebar from '../Components/Sidebar';
import { useNavigate } from 'react-router-dom';

export default function Journal() {
    const navigate = useNavigate();
    const[journal,setJournal] = useState(" ");
   
    const handleJournalChange = (event)=>{
        setJournal(event.target.value);
    }
  
    const [jarray,setJarray] = useState([]);
    const handlearrayadd = ()=>{
        setJarray([...jarray,journal]);
        setJournal(" ");
        
    }
   
  return (
   <main className = "journalmain">
        <section className="sidebar">

            {
                jarray.map((element,index)=>{
                    return <Sidebar text = {element} journal = {journal}
                    setJournal = {setJournal}
                    jarray = {jarray}
                 
                    setJarray = {setJarray} key = {index}/>
            } )
            }
        </section>
        <section className="textsection">
            <button onClick = {()=>{
                navigate('/choose');
            }} className = "back">
                BACK
            </button>
            <p className = "journaltitle">Spill the Tea here, as much as you like :)</p>
           
            <textarea value = {journal} onChange= {handleJournalChange} className = "textarea" name="" id="" cols="100" rows="20"></textarea>
            <button onClick = {handlearrayadd} type = "button" className = "sub">Save</button>
        </section>
   </main>
  )
}
