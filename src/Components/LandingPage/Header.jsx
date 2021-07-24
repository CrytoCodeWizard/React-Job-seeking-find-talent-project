import styled from "styled-components";
import logo from './../../logo.svg'
import { Link } from "react-router-dom";

const StLink=styled(Link)`
text-decoration: none;
`;
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
nav p{
    height: 56px;
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
    text-decoration: none;
    font-size: 17px;
    margin-top: 15px;
    margin-left: 6px;
    margin-right: 6px;
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
          <StLink to="/">
          <div><img src={logo} alt="logo" /></div>
          </StLink>
           <StLink to="/startup-jobs">
          <div><p>STARTUP JOBS</p></div>
          </StLink>
          <StLink to="recruit">
          <div><p>RECRUIT</p></div>
          </StLink>
          <div><p>INVEST</p></div>
          <div><p>BLOG</p></div>
          <div><p>MORE</p></div>
        </Left>

        <Right>

          <div>
            <div><img src="/magnifying-glass.png" alt="" /></div>
            <div><input type="text" placeholder="SEARCH" /></div>
          </div>

          <div>
            <div>
              <Link to='/join'>Join</Link>
            </div>
            <div>
              <Link to='/login'>Log in</Link>
            </div>
          </div>

        </Right>
      </nav>
    </Wrapper>
  );
}
