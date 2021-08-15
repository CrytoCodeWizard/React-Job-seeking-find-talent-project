import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import Header from "../../LandingPage/Header";
import { Redirect } from 'react-router'

//styled-components-------
  
const Wrapper = styled.div`
  *{padding: 0;
  margin: 0;
  box-sizing: border-box;}
  &>div{
    max-width: 617.5px;
    height: 100%;
    margin: auto;
    min-height: 250px;
  }
  &>div>div{
    width: 100%;
  }
  &>div>div>h1{
    text-align: center;
    font-size: 48px;
    line-height: 56px;
    font-weight: lighter;
    color: #666666;
    margin-top: 56px;
    margin-bottom: 42px;
  }
  input{
    outline: none;
  }
  input:focus{
    border-color: #3f81c7;
  }
    input{
      &::placeholder{
        color: #333;
      }
    }
    button{
      color: #ffffff;
      background-color: #3f81c7;
      cursor: pointer;
      &:hover{
        background-color: #478bd3;
      }
      }

    input, button{
      padding-left: 10px;
      height: 45px;
      border: 1px solid #e7e9eb;
      box-sizing: border-box;
      width: 100%;
      border-radius: 3px;
      padding-right: 6px;
    }
  `

const FormCont = styled.div`
  height: 100%;
  min-height: 275px;
  border: 1px solid #eee;
  `
const Left = styled.div`
  width: 50%;
  box-sizing: border-box;
  float: left;
  position: relative;
  padding: 28px;
  min-height: 237px;
  border-right: 1px solid #eee;
`
const LeftEl = styled.div`
  margin-top: 21px;
  &>p{
    color: #666;
    font-size: 16px;
    cursor: pointer;
  }
  &:last-child{
    text-align: center;
    line-height: 21px;
  }
`

const Right = styled.div`
cursor: pointer;
width: 50%;
box-sizing: border-box;
float: left;
position: relative;
padding: 28px;

  &>div{
    height: 45px;
    border: 1px solid #e7e9eb;
    box-sizing: border-box;
    width: 100%;
    border-radius: 3px;
    padding-right: 6px;
    color: #333;
    display: flex;
  }
  &>div>div:last-child{
    font-size: 16px;
    line-height: 40px;
  }
  &>div>div:first-child{
    line-height: 40px;
    padding: 0 13px;
    font-weight: bold;
    font-size: 22px;
  }
`

const Space = styled.div`
clear: both;
width: 100%;
background-color: black;
`
const FormEnd = styled.div`  
    font-size: 14px;
    line-height: 21px;
    margin: 21px auto 140px 28px;
    &>p{
      padding: 0;
      margin: 0;
      color: #666666;
      font-size: 14px;
      line-height: 21px;
    }
    &>p>a{
      color: #3078ca;
      text-decoration: none;
    }
`

const Footer = styled.div`
margin-top: 220px;
height: 140px;
  &>div{
    max-width: 988px;
    padding-top: 42px;
    text-shadow: 0 1px 0 #fff;
    font-size: 12px;
    line-height: 21px;
    text-align: center;
    padding-left: 14px;
    padding-right: 14px;
    box-sizing: border-box;
    margin-left: auto;
    margin-right: auto;
  }
  .FooterLinks{
    margin-right: 14px;
    margin-left: 14px;
    text-decoration: none;
    color: #999;
  }
`

function LoginForm() {
  const [jobs, setJobs] = useState(false);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  if (jobs === true) {
    return <Redirect to='/jobs' />;
  }
  const handleLogin = async () => {
    let { data } = await axios.get("http://localhost:3001/user");
    
    for (let i = 0; i < data.length; i++) {
      if (data[i].email === email && data[i].pass === pass) {
        console.log(data[i])
        localStorage.setItem("user", JSON.stringify(data[i]))
        setEmail("");
        setPass("");
        setJobs(true);
        return true;
      }
    }
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePass = (e) => {
    setPass(e.target.value);
  };
  return (
    <>
      
      <Header />

      <Wrapper>
        <div>
          <div>
            <h1>Log In</h1>
            <FormCont>
                <Left>
                    <form onSubmit={handleSubmit}>
                      <div>
                        <input
                          value={email}
                          type="text"
                          name="mobile"
                          id="mobile"
                          placeholder="Enter Mobile Number or Email"
                          onChange={handleEmail}
                        />
                        <LeftEl>
                      <input
                        value={pass}
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Enter Password"
                        onChange={handlePass}
                      />
                        </LeftEl>
                        <LeftEl>
                          <button onClick={handleLogin}>
                            Login
                          </button>
                        </LeftEl>
                        <LeftEl>
                          <p>Forgot password?</p>
                    </LeftEl>
                    </div>
                      </form>
                </Left>
                <Right>
                      <div>
                        <div>G</div><div>Log in with Google</div>
                      </div>
                </Right>    
            </FormCont>
            <Space></Space>
            <FormEnd>
              <p>Need an account? <a href="/"> Log In.. </a> </p>
            </FormEnd>
          </div>
        </div>
      </Wrapper>
      <Footer>
        <div>
          <div>
            <a href="/" className="FooterLinks">Help</a>
            <a href="/" className="FooterLinks">Blog</a>
            <a href="/" className="FooterLinks">Twiter</a>
            <a href="/" className="FooterLinks">Terms & Risks</a>
            <a href="/" className="FooterLinks">Privacy Policy & Cookies</a>
            <a href="/" className="FooterLinks">Unsubscribe</a>
            <a href="/" className="FooterLinks">Press</a>
          </div>
        </div>
      </Footer>
    </>
  );
}

export default LoginForm;


