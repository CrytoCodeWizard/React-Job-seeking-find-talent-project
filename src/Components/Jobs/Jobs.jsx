import { useCallback, useEffect, useRef, useState } from "react";
import axios from "axios";
import {v4 as uuid} from "uuid"
import { JobBox } from "./JobBox";
const style ={
    width:"max-content",
    margin:"auto"
}
export function Jobs(){
    const[company,setCompany]=useState([]);
    const[page,setPage] = useState(1);
    const[loading,setLoading]=useState(true);

    const observer = useRef();
    const lastJobRef=useCallback(node=>{
        if(loading)return
        if(observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries=>{
            if(entries[0].isIntersecting){
                setPage(prev=>prev+1)
            }
        })
        if(node) observer.current.observe(node);
    },[loading]);
    
    useEffect(()=>{
        setLoading(true)
        handleAddCompany();
    },[page]);

    const handleAddCompany=()=>{
        axios.get(`http://localhost:3001/company?_page=${page}&_limit=4`).then(({data})=>{
            console.log('data:', data)
            setCompany([...company,...data])
            setLoading(false)
        });
    }
    

    return(
        <div>
            {company.map((el,index)=>{
                if(company.length===index+1){
                    return <div key={uuid()} ref={lastJobRef}><JobBox key={uuid()} item={el}></JobBox></div>
                }
                else{
                    return <JobBox key={uuid()} item={el}></JobBox>
                }
            })}
            <div style={style}>{loading && "Loading..."}</div>
        </div>
    )
}