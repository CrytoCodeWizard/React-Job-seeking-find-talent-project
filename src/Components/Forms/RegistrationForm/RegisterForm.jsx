import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import Header from "../../LandingPage/Header";
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router";


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
  min-height: 363px;
  height: 100%;
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
  /* border-left: 1px solid #eee;
  border-bottom: 1px solid #eee; */
`
const LeftEl = styled.div`
  margin-top: 21px;
  &>p{
    color: #888888;
    font-size: 11px;
  }
  &:last-child{
    text-align: center;
    line-height: 21px;
  }
`
const Span = styled.span`
    color: #3f81c7;
    font-size: 11px;
    cursor: pointer;
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

function RegisterForm() {

  const [jobs, setJobs] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const history = useHistory()


  const handleSubmit = (event) => {
    event.preventDefault();
  };

  if (jobs === true) {
    setTimeout(() => {
      history.push('/login')
    }, 600);
  }

  const postUser = () => {
    axios.post("http://localhost:3001/user", {
      full_name: name,
      email: email,
      pass: pass,
    }).then(() => {
      setName("");
      setEmail("");
      setPass("");
      setJobs(true);
    })
  }
  
  const handleSignUp = () => {
    if (pass.length < 8) {
      alert("Password is too short");
      return;
    }
    axios.get("http://localhost:3001/user")
    .then((res) => {
      let bool = true;
      res.data.forEach((el) => {
        if (el.email === email) {
          alert('Email is already existed');
          bool = false;
          return;
        }
      })
      if (bool) {
        postUser();
      }
      return;
    })
    
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePass = (e) => {
    setPass(e.target.value);
  };
  return (
    <>
      <Header />

      <Wrapper>
        <div>
          <div>
            <h1>Sign UP</h1>
            <FormCont>
              <Left>
                <form onSubmit={handleSubmit}>
                  <input
                    value={name}
                    type="text"
                    name="fullname"
                    id="fullname"
                    placeholder="Your full name"
                    onChange={handleChangeName}
                  />
                  <LeftEl>
                    <input
                      value={email}
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                      onChange={handleChangeEmail}
                    />
                  </LeftEl>
                  <LeftEl>
                    <input
                      value={pass}
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Password (min 8 characters)"
                      onChange={handleChangePass}
                    />
                  </LeftEl>
                  <LeftEl>
                    <button onClick={handleSignUp}>
                      Sign up
                    </button>
                  </LeftEl>
                  <LeftEl>
                    <p> By signing up, I agree to AngelList's <Span>Terms of Service</Span> and <Span>Privacy Policy</Span>.</p>
                  </LeftEl>
                </form>
              </Left>
              <Right>
                <div>
                  <div>G</div><div>Sign up with Google</div>
                </div>
              </Right>
            </FormCont>
            <Space></Space>
            <FormEnd>
              <p>Already have an account? <a href="/"> Log in.. </a> </p>
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

export default RegisterForm;
