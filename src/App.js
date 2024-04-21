import {react,useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import './cssfiles/app.css'
import About from './Components/About';
import Contact from './Components/Contact';



function App() {
 
 
  return (
    <>
        <main className = "landingmain">
      <div className = "outer">

       <div className = "title">
          ProductiWow
      </div>
      <div className = "authbuttons">
        <Link className = "login" to ="/login">LOGIN</Link>
        <Link className = "registerr" to ="/register">REGISTER</Link>
      </div>
      </div>
      <nav className = "nav">
       
      
            <div className = "navcontainer">
            <button className = "navbutton" >Home</button>
            <a href = "#about" className = "navbutton">About</a>
            <a href = "#contact" className = "navbutton">Contact</a>
           
           
        </div>

   
      
      </nav>
     
     
    
        
    </main>
    
    <About/>
    <Contact/>
    
    </>

  )
}
export default App;
