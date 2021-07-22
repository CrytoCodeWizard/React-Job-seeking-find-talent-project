import styled from "styled-components";
const Wrapper = styled.div`
width: 100%;
background: #fff;
box-shadow: 0 1px 5px rgb(0 0 0 / 1%);
nav{
    display: flex;
    max-width: 1158px;
    margin: auto;
    
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
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
`;

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
}

div>div>button: hover{
    
  color: #0a6cff;
  border: 1px solid #0a6cff;
  background-color: white;
}
div>div>a:hover{
  
    color: #0a6cff;
    text-decoration: underline;
}
`

const Body = styled.div`

width: 85%;
background-image: url(https://assets.website-files.com/5f73949…/5f763df…_home-hero.jpg);
`
const Left1 = styled.div`

width: 42%;
margin-top: 130px;
margin-left: 180px;

h1{
  font-size: 60px;
  font-weight: 800;
}
p{
  font-size: 20px;
  font-weight: 500;
}
button{
    
  width: 220px;
  height: 50px;
  margin-top: 10px;
  font-size: 18px;
  font-weight: 600;
  color: white;
  border-radius: 5px;
  border: 1px solid #0a6cff;
  background-color: #0a6cff;
  cursor: pointer;
}

button: hover{
    
  color: #0a6cff;
  border: 1px solid #0a6cff;
  background-color: white;
}
`
const Mid = styled.div`

width: 71%;
margin-left: 300px; 
margin-top: 350px;

h1{
  font-size: 40px;
  font-weight: 700;
}
`;
const Midimg = styled.div`

width: 90%;
margin-left: 180px; 
margin-top: 50px; 

img{

  float:left;
  width: 150px;
  height: 40px;
  margin: 20px;
}
`;

export default function Header() {
  return (
    <Wrapper>
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

      <Body>
        <Left1>
          <h1>Build a world changing team</h1>
          <p>Recruit is a suite of products that helps you find, connect, and hire startup-ready talent. Built off of AngelList's network of 8M+ users, Recruit powers hiring for 100k+ companies from pre-seed to post-IPO.</p>
          <button>Start Hiring Today</button>
        </Left1>

         <Mid>
          <h1>Join 100k+ of the world’s top startups, tapping into our global pool of 8M+ startup enthusiasts</h1>
         </Mid>
         <Midimg>
           <img src="postmates.png" />
           <img src="cruise.svg" />
           <img src="nerdWallet.png" />
           <img src="airtable.png" />
           <img src="doordash.png" />
           <img src="alto.svg" />
           <img src="plaid.svg" />
           <img src="roblox.png" />
           <img src="ifttt.svg" />
           <img src="honey.png" />
           <img src="peloton.png" />
         </Midimg>
      </Body>
    </Wrapper>
  );
}
