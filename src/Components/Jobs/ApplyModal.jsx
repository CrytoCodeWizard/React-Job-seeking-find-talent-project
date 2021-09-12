import styled from "styled-components"
import axios from "axios";
import { useState } from "react";
const Wrapper=styled.div`
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
background-color: #FFF;
z-index: 100;
display: flex;
flex-direction: row;
align-items: stretch;
border-radius: 5px;
min-height: 0;
width: 752px;
max-width: 752px;
`;

const Left = styled.div`
width: 240px;
overflow-y: auto;
padding: 16px;
border-radius: 5px;
background-color: #ecf4ff;
font-size: 14px;
line-height: 1.5;
span{
    font-size: 12px;
    color: grey;
}
div{
    display: flex;
}
div>img{
  width: 32px;
  height: 32px;
  margin-right: 10px;
  border-radius: 5px;
}

ul{
    list-style: none;
    margin-bottom: 10px;
    margin-top: 10px;
}
ul>li{
    margin-left: -40px;
}
`;

const Right = styled.div`
padding: 16px;
width: 100%;
span{
    font-size: 12px;
    color: grey;
}
div{
    display: flex;
    justify-content: flex-end;
    margin: 15px;
}
div>button:nth-child(2){
    background-color: #0f6fff;
    border-color: #0f6fff;
    color: #fff;
    padding: 10px 40px;
    border-radius: 5px;
}
div>button:nth-child(1){
    background-color: white;
    border: none;
    color: grey;
    padding: 10px 40px;
    border-radius: 5px;
}
div>button:nth-child(1):hover{
    background-color: #81b5ff;
    color: #fff;
}
`;

const User=styled.div`
display: flex;
flex-direction: column;

h3{
    font-weight: normal;
}
p{
    font-size: 13px;
    color: #444444;
    margin-top: 5px;
}
textarea{
    border:solid #385075 1px;
    border-radius: 5px;
    outline: none;
    padding: 7px;
    margin-top: 4px;
    font-family: Arial, Helvetica, sans-serif;
}
textarea:focus{
    border-color: #0F6FFF;
}
`;


const Overlay=styled.div`
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
background-color: rgba(0,0,0,.7);
z-index: 100;
`;

export function ApplyModal({open,onClose,data,user}){
    const[loading,setLoading]=useState(0);
    const time = new Date().toLocaleTimeString();
    const date = new Date().toLocaleDateString();

    const handleSubmit=()=>{
        axios.post('https://woowax.herokuapp.com/applied', {
            name: data.name,
            description: data.desc,
            image:data.image,
            date
          }).then(()=>{handleLoading()});
    }
    const handleLoading=()=>{
        setLoading(1);
        setTimeout(() => {
            setLoading(2)
        },2000);
        setTimeout(() => {
            setLoading(0)
            onClose()
        }, 3000);
    }

    if(open){
        document.body.style.overflow='hidden'
    }
    else{
        document.body.style.overflow='unset'
    }
    if(!open) return null
    return(
        <>
        <Overlay></Overlay>
        <Wrapper>
            <Left>
                <span>APPLY TO</span>
                <div>
                    <img src={data.image} alt="" />
                    <h3>{data.name}</h3>
                </div>
                <ul>
                    <li>{data.job}</li>
                </ul>
                <ul>
                    <li>Location</li>
                    <li>{data.location}</li>
                </ul>
                <ul>
                    <li>Salary</li>
                    <li>₹{data.salaryMin}L-₹{data.salaryMax}L</li>
                </ul>
            </Left>
            <Right>
                <span>YOUR APPLICATION</span>
                <hr />
                <User>
                    <h3>{user.full_name}</h3>
                    <span>{user.email}</span>
                    <p>Let your hiring contact know why you are a good fit.</p>
                    <textarea id="" placeholder={`Write a note to ${data.name}`} cols="30" rows="5"></textarea>
                </User>
                <div>
                <button onClick={onClose}>Cancel</button>
                <button onClick={handleSubmit}>{loading===1?"Sending...":loading===0?"Send application":"Done"}</button>
                </div>
            </Right>
        </Wrapper>
        </>
    )
}