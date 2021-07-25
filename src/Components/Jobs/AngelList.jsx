import { useCallback, useEffect, useRef, useState } from "react";
import axios from "axios";
import { Jobs } from "./Jobs";
import { Nav } from "./Nav";
import { SideBar } from "./SideBar";
import styled from "styled-components";
import { Applied } from "./Applied";
import { Assessment } from "./Assessment";
import { Switch, Route, useRouteMatch } from 'react-router-dom'

const Main = styled.div`
display: flex;

&>div>p{
  text-align:center;
}
&>div:nth-child(2){
  margin-left:60px;
  min-width: 960px;
}
`;


export function AngelList() {
  const [company, setCompany] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  let { path } = useRouteMatch();

  const observer = useRef();
  const lastJobRef = useCallback(node => {
    if (loading) return
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setPage(prev => prev + 1)
      }
    })
    if (node) observer.current.observe(node);
  }, [loading]);

  useEffect(() => {
    setLoading(true)
    handleAddCompany();
  }, [page]);

  const handleAddCompany = () => {
    axios.get(`http://localhost:3001/company?_page=${page}&_limit=4`).then(({ data }) => {
      console.log('data:', data)
      setCompany([...company, ...data])
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
      <Main>
        <div>
          <SideBar></SideBar>
        </div>
        <Switch>
          <Route path={`${path}/applied`}>
            <Applied></Applied>
          </Route>
          <Route path={`${path}/assessment`}>
            <Assessment></Assessment>
          </Route>
          <Route path="/jobs">
            <Jobs company={company} lastJobRef={lastJobRef} loading={loading}></Jobs>
          </Route>
        </Switch>
      </Main>
    </>
  );
}
