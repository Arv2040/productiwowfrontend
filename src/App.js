import {react,useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import './cssfiles/app.css'
import About from './Components/About';



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
            <Link to= "/" className = "navbutton">About</Link>
           
           
        </div>

   
      
      </nav>
     
     
    
        
    </main>
    
    <About/>
    
    </>

  )
}
export default App;
