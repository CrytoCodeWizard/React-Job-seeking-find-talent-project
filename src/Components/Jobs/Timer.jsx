import { useEffect, useRef, useState } from "react";

export function Timer(){
    const[min,setMin]=useState(0)
    const[sec,setSec]=useState(0)
    const [status,setStatus]= useState(false);
    const minRef=useRef()
    const secRef=useRef()
    const timerRef = useRef();
  
    useEffect(()=>{
        handleStart()
    },[])
  
    const handleStart=()=>{
      setStatus(true)
  
      let m=1,s=0;
      
      timerRef.current=setInterval(() => {
          if(m===0&&s===0){
              clearInterval(timerRef.current);
          }
          else if(s===0&&m>0){
              m--;
              s=59;
          }
  
          setSec(s);
          setMin(m)
          s--;
  
      }, 1000);
  
    }
    return(
        <div>{min >= 10 ? min : "0" + min}:{sec >= 10 ? sec : "0" + sec}</div>
    )
}