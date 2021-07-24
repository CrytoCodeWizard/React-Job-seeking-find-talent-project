import styled from "styled-components";
import { Link } from "react-router-dom";
const Wrapper = styled.div`
width: 100%;
background: #fff;
`;

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

const Right = styled.div`
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
div>div>a>button{
    
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

const Body = styled.div`

width: fit-content;
height: 760px;
margin-top: 30px;
background-image: url('https://assets.website-files.com/5f73949f7a2eb05feb43d0a4/5f763df72f672ebed4d83053_home-hero.jpg');
background-repeat: no-repeat;
background-size:contain;
`
const Left1 = styled.div`

width: 42%;
margin-left: 140px;
h1{
  font-size: 60px;
  font-weight: 800;
}
p{
  font-size: 18px;
  font-weight: 500;
}
button{
    
  width: 220px;
  height: 50px;
  margin-top: 20px;
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
const Mid = styled.div`
width: 60%;
margin-left: 300px; 
margin-top: 400px;

h1{
  font-size: 40px;
  font-weight: 700;
}
`;
const Midimg = styled.div`

width: 80%;
margin-left: 180px; 
margin-top: 50px; 
margin-bottom: 50px; 

img{

  float:left;
  width: 150px;
  height: 40px;
  margin: 20px;
}`;

const Footer = styled.div`
width: 100%;
height: 500px;
background-image: url('https://assets.website-files.com/5f73949f7a2eb05feb43d0a4/5f7719aef9133e498f52b164_footer_bg.jpg');
`;

const Div = styled.div`
width: 80%;
margin-left: 250px;
margin-top: 100px;
display: grid;
grid-template-columns: 25% 25% 25% 25%;

div{
  
  font-size: 10px;
  margin-top: 200px;
}
div>p{

  font-size: 15px;

  &:hover{
  cursor: pointer;
  text-decoration: underline;
}
}
`;

export default function Main() {
  return (
    <Wrapper>
      <Main1>
        <nav>
          <Left>
            <div><img src="logoRecruit.svg" alt="logo" /></div>
            <div><a>Startup Jobs</a></div>
            <div><a>Products</a></div>
            <div><a>Pricing</a></div>
          </Left>

          <Right>

            <div>
               <Link to="/">
              <div><a>Back to AngelList</a></div>
               </Link>
              {/* <div><Link to="/recruit/create-jobs"><a>Log in</a></Link></div> */}
              <div><Link to="/loginrc">Log in</Link></div>
              <div><Link to="/joinrc"><button>Join</button></Link></div>
            </div>

          </Right>
        </nav>
      </Main1>

      <Body>
        <Left1>
          <br />
          <br />
          <br />
          <h1>Build a world changing team</h1>
          <p>Recruit is a suite of products that helps you find, connect, and hire startup-ready talent. Built off of AngelList's network of 8M+ users, Recruit powers hiring for 100k+ companies from pre-seed to post-IPO.</p>
          <button>Start Hiring Today</button>
        </Left1>

        <Mid>
          <h1>Join 100k+ of the world’s top startups, tapping into our global pool of 8M+ startup enthusiasts</h1>
        </Mid>
        <Midimg>
          <img alt="" src="postmates.png" />
          <img alt="" src="cruise.svg" />
          <img alt="" src="nerdWallet.png" />
          <img alt="" src="airtable.png" />
          <img alt="" src="doordash.png" />
          <img alt="" src="alto.svg" />
          <img alt="" src="plaid.svg" />
          <img alt="" src="roblox.png" />
          <img alt="" src="ifttt.svg" />
          <img alt="" src="honey.png" />
          <img alt="" src="peloton.png" />
        </Midimg>

        <Footer>
          <Div>
            <div>
              <h1>Recruit</h1>
              <br />
              <p>Recruit</p>
              <p>Source</p>
              <p>Job Listings</p>
              <p>Track</p>
              <p>Company Profile</p>
              <p>Assessments</p>
              <p>Pricing</p>

            </div>
            <div>
              <h1>Find Jobs</h1>
              <br />
              <p>Startup Jobs</p>
              <p>San Francisco</p>
              <p>New York</p>
              <p>Remote</p>
              <p>Canada</p>
              <p>India</p>

            </div>
            <div>
              <h1>Company</h1>
              <br />
              <p>About</p>
              <p>Blog</p>
              <p>Careers</p>
              <p>Contact Us</p>
              <p>Help</p>
              <p>Terms & Privacy</p>

            </div>
            <div>
              <h1>AngelList</h1>
              <br />
              <p>About Us</p>
              <p>Venture</p>
              <p>Talent</p>
              <p>Product Hunt</p>
              <p>Twitter</p>

            </div>
          </Div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />

        </Footer>
      </Body>

    </Wrapper>
  );
}
