import { useState } from "react";
import axios from "axios";
import styled from "styled-components";

const Main = styled.div`

background-color: #ffffff;
`
const Main1 = styled.div`

position: sticky;
top: 0;
height: 80px;
background-color: white;
box-shadow: 0 .1px 5px #ccc;

nav{
  display: flex;
  max-width: 1158px;
  height: 80px;
  background-color: white;
  top: 0;
  z-index: 3;
  margin: auto;
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
margin-top: 20px;
pointer-events: none;
margin-right: 15px;
}
div>a{
  line-height: 80px;
  font-size: 16px;
  color: #000000;
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
div>a{
  line-height: 80px;
  font-size: 16px;
  color: #000000;
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

width: 1000px;
margin: auto;
h1{
  margin: auto;
  width: fit-content;
}
`
const Input = styled.div`
width: 50%;
display: flex;
flex-direction: column;
margin: auto;
border: 1px solid #dddddd;
padding: 40px;
margin-top: 30px;

form{
    width: 60%;
}
input{
    width: 100%;
    border-radius: 4px;
    border: 1px solid #dddddd;
    margin-top:  5px;
    padding: 0 12px;
    margin-right:  50px;
    margin-left: 90px;
    margin-bottom:  20px;
    font-size: 15px;
    height: 30px;
    outline: none;

    &:focus{
      border-color:#0a6cff;
    }
    &::placeholder{
      color: #888;
    }
}
button{
  width: 150px;
  height: 40px;
  margin-top: 10px;
  margin-left: 170px;
  font-size: 18px;
  font-weight: 600;
  color: white;
  border-radius: 2px;
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
  const[loading,setLoading]=useState(0);

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
    }).then(()=>{handleLoading()});
  }
  const handleLoading=()=>{
    setLoading(1);
    setTimeout(() => {
        setLoading(2)
    },2000);
    setTimeout(() => {
        setLoading(0)
    }, 3000);
}

  return (
    <Main>

    <Main1>
        <nav>
        <Left>
          <div><img src="/logoRecruit.svg" alt="logo"/></div>
          <div><a href="/">Startup Jobs</a></div>
          <div><a href="/">Products</a></div>
          <div><a href="/">Pricing</a></div>
        </Left>

        <Right>

          <div>
          <div><a href="/">Back to AngelList</a></div>
          </div>

        </Right>
        </nav>
    </Main1>
    <Form1>
      
      <h1 style={{fontSize: 40, marginTop:"20px", color: "#1476f7"}}>Post a Job</h1>

      <Input>

      <form onSubmit={handleSubmit}>

        <label style={{fontWeight: 500, fontSize: 16, color:"#272727", marginLeft: 90, }}>Company Name</label>
        <input onChange={handleChange} type="text" name="name" placeholder="Masai School"/>

        <label style={{fontWeight: 500, fontSize: 16, color:"#272727", marginLeft: 90}}>Description</label>
        <input onChange={handleChange} type="text" name="desc" placeholder="Masai is a seed-funded Edtech startup based out of Bangalore"/>

        <label style={{fontWeight: 500, fontSize: 16, color:"#272727", marginLeft: 90}}>Employees</label>
        <input onChange={handleChange} type="text" name="employees" placeholder="100-200 employees"/>

        <label style={{fontWeight: 500, fontSize: 16, color:"#272727", marginLeft: 90}}>Image</label>
        <input onChange={handleChange} type="text" name="image" placeholder="image url"/>

        <label style={{fontWeight: 500, fontSize: 16, color:"#272727", marginLeft: 90}}>Job</label>
        <input onChange={handleChange} type="text" name="job" placeholder="SDE-2"/>

        <label style={{fontWeight: 500, fontSize: 16, color:"#272727", marginLeft: 90}}>Location</label>
        <input onChange={handleChange} type="text" name="location" placeholder="Bangalore"/>
        
        <div>
        <label style={{fontWeight: 500, fontSize: 16, color:"#272727", marginLeft: 90}}>Salary minimum</label>
        <input onChange={handleChange} type="number" name="salaryMin" placeholder="Salary in lakhs"/>
        
        <label style={{fontWeight: 500, fontSize: 16, color:"#272727", marginLeft: 90}}>Salary maximum</label>
        <input onChange={handleChange} type="number" name="salaryMax" placeholder="Salary in lakhs"/>
        </div>
       
        <button onChange={handleChange} style={{cursor: "pointer"}} type="submit" value="Submit">{loading===1?"Posting job...":loading===0?"Submit":"Done"}</button>

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
