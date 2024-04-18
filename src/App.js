import {react,useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import './cssfiles/app.css'

function App() {
 
 
  return (
    <main className = "landingmain">
      <div className = "outer">

       <div className = "title">
          ProductiWow
      </div>
      <div className = "authbuttons">
        <Link className = "login" to ="/login">LOGIN</Link>
        <Link className = "register" to ="/register">REGISTER</Link>
      </div>
      </div>
      <nav className = "nav">
       
      
            <div className = "navcontainer">
            <button >Home</button>
            <button>About</button>
            <button >Community</button>
            <button>Contact</button>
        </div>

   
      
      </nav>
     
     
      
        
    </main>
  );
}

export default App;
