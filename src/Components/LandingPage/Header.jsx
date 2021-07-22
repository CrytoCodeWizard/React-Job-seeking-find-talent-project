import styled from "styled-components";
import logo from './../../logo.svg'
import { Link } from "react-router-dom";
const Wrapper = styled.div`
width: 100%;
background: #fff;
border-bottom: 1px solid rgba(0, 0, 0, 0.08);
box-shadow: 0 1px 5px rgb(0 0 0 / 1%);
nav{
    display: flex;
    max-width: 988px;
    margin: auto;
    justify-content: space-between;
}
nav a{
    height: 56px;
    text-decoration: none;
    line-height: 56px;
    color: #666666;
    padding: 0 13px;
    font-size:12px;
    font-weight: 500;
    cursor: pointer;
    font-family: Helvetica, sans-serif;
    letter-spacing: .4px;
}
`;

const Left = styled.div`
display: flex;
div{
    cursor: pointer;
}
div:hover{
background-color: #f6f6f6;
}
div>img{
height: 30px;
margin-top: 12px;
pointer-events: none;
margin-right: 12px;
}
div a{
}
`;

const Right=styled.div`
display: flex;
border-left:1px solid rgba(0, 0, 0, 0.08);
div{
    display: flex;
}
div>img{
    height: 15px;
    margin-top: 19px;
    padding: 0 14px;
}
div>div>input{
    border: none;
    outline: none;
    width: 100px;
    font-size:12px;
}
div>div>a{
    color: #3078CA;
    font-size: 16px;
}
div>div>a:hover{
    text-decoration: underline;
}
`;

export default function Header() {
  return (
    <Wrapper>
      <nav>
        <Left>
          <div><img src={logo} alt="logo"/></div>
          <Link to="jobs">
          <div><a href="/">STARTUP JOBS</a></div>
          </Link>
          <div><a href="/">RECRUIT</a></div>
          <div><a href="/">INVEST</a></div>
          <div><a href="/">BLOG</a></div>
          <div><a href="/">MORE</a></div>
        </Left>

        <Right>

          <div>
            <div><img src="/magnifying-glass.png" alt="" /></div>
            <div><input type="text" placeholder="SEARCH" /></div>
          </div>

          <div>
          <div><a href="/">Join</a></div>
          <div><a href="/">Log in</a></div>
          </div>

        </Right>
      </nav>
    </Wrapper>
  );
}
