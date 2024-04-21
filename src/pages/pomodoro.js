import React,{useState,useEffect} from 'react'
import '../cssfiles/pomodoro.css'
import { useNavigate } from 'react-router-dom';






export default function Pomodoro() {
  const navigate = useNavigate();
    const[minutes,setMinutes] = useState(24);
    const[seconds,setSeconds] = useState(59);
    const[display,setDisplayMessage] = useState(false)
    useEffect(()=>{
        let interval = setInterval(()=>{
            clearInterval(interval);
            if(seconds === 0){
              if(minutes!==0){
                setSeconds(59);
                setMinutes(minutes-1);
              }
              else{
                  let minutes = display ? 24 : 4;
                  let seconds = 59;
                  setSeconds(seconds);
                  setMinutes(minutes);
                  setDisplayMessage(!display);
              }
            }
            else{
              setSeconds(seconds-1);
            }
        },1000)
    },[seconds]);

    const timerMinutes = minutes <10 ? `0${minutes}` : minutes;
    const timerSeconds = seconds <10 ? `0${seconds}` : seconds;
  return (
    <main className = "pomodoromain">
       <button onClick = {()=>{
                navigate('/choose');
            }} className = "back">
                BACK
            </button>
        
        <div className="timer">
          {timerMinutes}:{timerSeconds}
        </div>
        <div className = "break">
          { display && <p className = "breakp">Take a Break </p>}
        </div>
    </main>
  )
}
