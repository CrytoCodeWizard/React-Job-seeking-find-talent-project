import { useCallback, useEffect, useRef, useState } from "react";
import axios from "axios";
import { Jobs } from "./Jobs";
import { Nav } from "./Nav";
export function AngelList() {
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
  const handleSearch = (query) => {
    console.log('query:', query)
    axios.get(`http://localhost:3001/company?q=${query}`).then(({ data }) => {
        console.log('data:', data)
        setCompany(data)
        setLoading(false)
    });
  }
  return (
    <>
      <Nav handleSearch={handleSearch}></Nav>
      <Jobs company={company} lastJobRef={lastJobRef} loading={loading}></Jobs>
    </>
  );
}
