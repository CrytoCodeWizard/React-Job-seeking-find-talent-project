import { Quiz } from "./Quiz"
import styled from "styled-components"
import { useState } from "react";

const Wrapper = styled.div`
width: 960px;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-gap: 10px;

&>div{
  background-color: #fff;
    box-shadow: 0 0 1px rgba(0,12,32,.04),0 2px 6px rgba(3,17,38,.107135);
    padding: 16px;
    border-radius: 8px;
}
&>div>div{
  display: flex;
  justify-content: space-between;
}
&>div>div>span{
  font-size: 12px;
  color: green;
}
div>div>img{
  width: 15px;
}
h3{
  font-weight: normal;
}
p{
  font-size: 14px;
  color: grey;
}
&>div>span{
  font-size: 12px;
  color: green;
  margin-top: 100px;
}
button{
  margin-top: 40px;
  color: #fff;
  cursor: pointer;
  font-weight: bold;
  padding: 8px 15px;
  border: none;
  border-radius: 4px;
  background-color: #0f6fff;
}
`;

export function Assessment(){
  const[quiz,setQuiz]=useState(false);
  const handleQuiz=()=>{
    setQuiz(true)
  }
  return(
    <div>
      {quiz? <Quiz></Quiz>:<Box handleQuiz={handleQuiz}></Box>}
    </div>
  )
}
function Box({handleQuiz}){
  return(
    <Wrapper>
      <div>
        <div>
          <span>Multiple Choice Quiz</span>
          <img src="/logo.svg" alt="" />
        </div>
        <h3>Back-End Web</h3>
        <p>Algorithms, data, structures, databases</p>
        <span>5 Questions</span><br />
        <button onClick={handleQuiz}>Start Assessment</button>
      </div>
    </Wrapper>
  )
}