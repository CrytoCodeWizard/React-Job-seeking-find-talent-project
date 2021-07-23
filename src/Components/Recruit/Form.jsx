import { useState } from "react";
import axios from "axios";
import styled from "styled-components";

const Main = styled.div`

background-color: #f3f3f3;
`
const Main1 = styled.div`

position: sticky;
top: 0;
height: 80px;
background-color: white;
box-shadow: 0 1px 5px grey;

nav{
  display: flex;
  max-width: 1158px;
  height: 80px;
  
  background-color: white;
  top: 0;
  z-index: 3;
  margin: auto;
  // margin-bottom: -50px; 
  justify-content: space-between;
}
nav a{
  height: 70px;
  text-decoration: none;
  line-height: 70px;
  color: #666666;
  padding: 0 13px;
  font-size:12px;
  font-weight: 500;
  cursor: pointer;
  font-family: Helvetica, sans-serif;
  letter-spacing: .4px;
}
`
const Left = styled.div`

display: flex;
div{
    cursor: pointer;
}
div>img{
height: 35px;
margin-top: 15px;
pointer-events: none;
margin-right: 15px;
}
div>a:hover{
  
  color: #0a6cff;
  text-decoration: underline;
}
`;

const Right=styled.div`
display: flex;

div{
    display: flex;
}
div>img{
    height: 15px;
    margin-top: 19px;
    padding: 0 14px;
}
div>div>a{
    color: black;
    font-size: 16px;
}

div>div>button{
    
  width: 100px;
  height: 30px;
  margin-top: 20px;
  margin-left: 13px;
  font-size: 18px;
  font-weight: 600;
  color: white;
  border-radius: 5px;
  border: 1px solid #0a6cff;
  background-color: #0a6cff;
  cursor: pointer;
  
  &:hover{
    
    color: #0a6cff;
    border: 1px solid #0a6cff;
    background-color: white;
  }
}

div>div>a:hover{
  
  color: #0a6cff;
  text-decoration: underline;
}
`

const Form1 = styled.div`

width: 60%;
margin: auto;

`
const Input = styled.div`

width: 50%;
display: flex;
flex-direction: column;
margin: auto;
border: 1px solid grey;
padding: 40px;
border-radius: 10px;
margin-top:  30px;

form{

    width: 60%;
}
input{

    width: 100%;
    border-radius: 5px;
    border: 1px solid grey;
    margin-top:  5px;
    margin-right:  50px;
    margin-left: 90px;
    margin-bottom:  30px;
    font-size: 15px;
    height: 30px;

    &:focus{

        outline: none;
    }
}
button{

  width: 220px;
  height: 50px;
  margin-top: 10px;
  margin-left: 120px;
  font-size: 18px;
  font-weight: 600;
  color: white;
  border-radius: 5px;
  border: 1px solid #0a6cff;
  background-color: #0a6cff;
  cursor: pointer;

  &:hover{
    color: #0a6cff;
    border: 1px solid #0a6cff;
    background-color: white;
}
}
`

export default function Form() {

  const [formData, setFormData] = useState({name:"", desc: "", employees: "", image: "", job: "", location: "", salaryMin: "", salaryMax: ""});

  const handleChange = (e) => {

    // console.log(e.target.name ,"changed", e.target.value);

    const data = 
    {
      ...formData,
      [e.target.name]: e.target.value,

    }
    setFormData(data)
  }

//   console.log(formData);

  const handleSubmit = (e) => {

    e.preventDefault();
    console.log(formData);

    axios.post("http://localhost:3001/company",{...formData}).then((res) => {

        console.log(res);
    })
    .catch((err) => {

        console.log(err);
    })
  }

  return (
    <Main>

    <Main1>
        <nav>
        <Left>
          <div><img src="logoRecruit.svg" alt="logo"/></div>
          <div><a href="/">STARTUP JOBS</a></div>
          <div><a href="/">PRODUCTS</a></div>
          <div><a href="/">PRICING</a></div>
        </Left>

        <Right>

          <div>
          <div><a href="/">Back to AngelList</a></div>
          <div><a href="/">Log in</a></div>
          <div><button href="/">Join</button></div>
          </div>

        </Right>
        </nav>
    </Main1>
    <Form1>
      
      <h1 style={{marginLeft: 250, fontSize: 50, color: "#2783fc"}}>Create Your Job</h1>

      <Input>

      <form onSubmit={handleSubmit}>

        <label style={{fontWeight: 500, fontSize: 20, marginLeft: 90}}>Name</label>
        <input onChange={handleChange} type="text" name="name" placeholder="Enter Name"/>

        <label style={{fontWeight: 500, fontSize: 20, marginLeft: 90}}>Description</label>
        <input onChange={handleChange} type="text" name="desc" placeholder="Enter Description"/>

        <label style={{fontWeight: 500, fontSize: 20, marginLeft: 90}}>Employees</label>
        <input onChange={handleChange} type="text" name="employees" placeholder="Enter Employees"/>

        <label style={{fontWeight: 500, fontSize: 20, marginLeft: 90}}>Image</label>
        <input onChange={handleChange} type="text" name="image" placeholder="Enter Image Url"/>

        <label style={{fontWeight: 500, fontSize: 20, marginLeft: 90}}>Job</label>
        <input onChange={handleChange} type="text" name="job" placeholder="Enter Job"/>

        <label style={{fontWeight: 500, fontSize: 20, marginLeft: 90}}>Location</label>
        <input onChange={handleChange} type="text" name="location" placeholder="Enter Job Location"/>
        
        <label style={{fontWeight: 500, fontSize: 20, marginLeft: 90}}>Salary Minimum</label>
        <input onChange={handleChange} type="number" name="salaryMin" placeholder="Enter Minimum Salary"/>
        
        <label style={{fontWeight: 500, fontSize: 20, marginLeft: 90}}>Salary Maximum</label>
        <input onChange={handleChange} type="number" name="salaryMax" placeholder="Enter Maximum Salary"/>
       
        <button onChange={handleChange} style={{cursor: "pointer"}} type="submit" value="Submit">SUBMIT</button>

      </form>
      </Input>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
    </Form1>
      </Main>
    
  );
}
