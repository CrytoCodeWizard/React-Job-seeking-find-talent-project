import styled from "styled-components";
const Wrapper = styled.div`
width: 100%;
background: #fff;

`;

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

const Body = styled.div`

width: 100%;
height: 760px;
margin-top: 70px;
background-image: url(https://assets.website-files.com/5f73949f7a2eb05feb43d0a4/5f763df72f672ebed4d83053_home-hero.jpg);
`
const Left1 = styled.div`

width: 42%;
margin-left: 180px;

h1{
  font-size: 65px;
  font-weight: 800;
}
p{
  font-size: 23px;
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
}
`

const Footer = styled.div`

width: 100%;
height: 500px;
background-image: url(https://assets.website-files.com/5f73949f7a2eb05feb43d0a4/5f7719aef9133e498f52b164_footer_bg.jpg)

`

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
`
;

export default function Main() {
  return (
    <Wrapper>
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
          
        <Footer>
          <Div>
          <div>
          <h1>Recruit</h1>
          <br/>
          <p href="">Recruit</p>
          <p href="">Source</p>
          <p href="">Job Listings</p>
          <p href="">Track</p>
          <p href="">Company Profile</p>
          <p href="">Assessments</p>
          <p href="">Pricing</p>
        
          </div>
          <div>
          <h1>Find Jobs</h1>
          <br/>
          <p href="">Startup Jobs</p>
          <p href="">San Francisco</p>
          <p href="">New York</p>
          <p href="">Remote</p>
          <p href="">Canada</p>
          <p href="">India</p>
        
          </div>
          <div>
          <h1>Company</h1>
          <br/>
          <p href="">About</p>
          <p href="">Blog</p>
          <p href="">Careers</p>
          <p href="">Contact Us</p>
          <p href="">Help</p>
          <p href="">Terms & Privacy</p>
        
          </div>
          <div>
          <h1>AngelList</h1>
          <br/>
          <p href="">About Us</p>
          <p href="">Venture</p>
          <p href="">Talent</p>
          <p href="">Product Hunt</p>
          <p href="">Twitter</p>
        
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
