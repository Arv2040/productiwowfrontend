import 'tailwindcss/tailwind.css';
import {react,useState,useEffect} from 'react';

function App() {
  const [screen, setScreen] = useState(true);
  const handleResize = ()=>{
      if(window.screen.width>792){
        setScreen(true);
      }
      else{
        setScreen(false);
      }
  }
  window.addEventListener('resize',handleResize);
  return (
    <main className="bg-[#E3E1D9] h-screen overflow-hidden">
      <nav className = "min-w-full h-fit flex justify-center lg:items-center lg:justify-between">
        <div className = "font-bold ml-4 text-6xl">
          TODO
        </div>
        {screen?(
            <div className = "text-sm font-bold flex items-center">
            <button className = " rounded-md m-4 px-4 py-2 hover:bg-black hover:text-white">Home</button>
            <button className = " rounded-md m-4 px-4 py-2 hover:bg-black hover:text-white">About</button>
            <button  className = " rounded-md m-4 px-4 py-2 hover:bg-black hover:text-white">Community</button>
            <button className = "rounded-md m-4 px-4 py-2 hover:bg-black hover:text-white">Contact</button>
        </div>

        ):""}
      
      </nav>
      <div className = "absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]">
        <button className = " font-bold px-10 py-6 bg-black text-white border-white rounded-full">GET STARTED</button>
      </div>
        
    </main>
  );
}

export default App;
