import styled from 'styled-components'

export default function Section2() {

    const Main = styled.div`
    
    width: 100%;

    `
    const Left = styled.div`

    width: 40%;
    height: 400px;
    font-size: 30px;
    margin-left: 10%;
    float: left;

    @media (max-width: 1230px) {
        font-size: 25px;
    }
    @media (max-width: 1025px) {
        font-size: 20px;
        width: 60%;
    }
    @media (max-width: 1255px) {
            display: flex;
            flex-direction: column;
        }
    p{
        font-size: 20px;
    }
    p:nth-child(3){
        font-size: 25px;
        // margin-bottom: -30px;
    }
    button{

    width: 40%;
    float: left;
    background-color: #4139a7;
    color: white;
    cursor: pointer;
    border-radius: 5px;
    border: none;
    font-size: 18px;
    height: 50px;
    }
    `

    const Left1 = styled.div`
    
    width: 40%;
    float: left;
    font-size: 10px;
    margin-right: 60px;

    p{
        font-size: 15px;
    }
    
    `
    const Left2 = styled.div`
    
    width: 48%;
    float: left;
    font-size: 10px;

    p{
        font-size: 15px;
    }
    `
    const P1 = styled.p`

    margin-left: 35px;
    margin-top: 8px;
    cursor: pointer;
    float: left;
    font-size: 1px;
    color: ${(props) => (props.color === "red" ? "#4139a7" : "#4139a7")};
    `

    const Right = styled.div`
    
    float: left; 
    width: 50%;

    img{


        @media (max-width: 1070px) {
            margin-top: 320px;
            
        }
        @media (max-width: 1020px) {
            margin-left: 100px;
        }
        @media (max-width: 710px) {
            margin-top: 500px;
        }
        @media (max-width: 525px) {
            margin-top: 700px;
        }
        @media (max-width: 410px) {
            margin-top: 900px;
        }
        @media (max-width: 360px) {
            margin-top: 1100px;
        }
    
        margin-top: 220px;
        margin-left: 180px;
        width: 50%;
        height: 40%;
    }
    `
    
    const Bottom = styled.div`
    
    float: left;
    width: 100%;
    height: 400px;
    margin-top: 230px;
    background-color: black;

    @media (max-width: 968px) {
        margin-top: 230px;
    }

    @media (max-width: 1275px) {
            margin-top: 400px;
        }
    @media (max-width: 1025px) {
            margin-top: 100px;
        }
    img{

        margin-left: 45%;
        margin-top: -70px;
        margin-bottom: 80px;
        width: 120px;
        height: 148px;
    }
    div{
        margin: auto;
    }
    h1{

        @media (max-width: 615px) {
        font-size: 25px;
    }
        margin-left: 250px;
        font-size: 45px;
        color: white;
    }

    button{
        width: 230px;
        height: 60px;
        margin: 41%;
        margin-top:35px;
        font-size: 20px;
        border-radius: 5px;
        border: none;
        color: white;
        cursor: pointer;
        background-color: #cc4d29;
    }
    `
    const ImgDiv = styled.div`
    
    width: 200px;
    height: 51px;
    margin: auto;
    background-color: white;
    `
    
    const Img = styled.img`
    
    position: relative;
    width: 200px;
    height: 51px;
    filter: invert(100);
    top: -290px;
    `;

    
    return (
        
        <Main>
 
            <Left>
            <p>AngelList Venture</p> 
            <h1>The platform for venture investing</h1>
            <p>Invest alongside top venture investors. Hundreds of angels and VCs rely on AngelList. Whether you’re starting and scaling your own fund, or investing alongside established managers, we’ll help you grow as a top investor.</p>
            <br />
            <br />

            <Left1>
                <div>
                <h1>$1,000,000,000+</h1>
                <p>flows through AngelList into thousands of investments.</p>
                </div>
                
            </Left1>
            <Left2>
                <div>
                <h1>36% of top-tier U.S. VC deals</h1>
                <p>were funded by investors through AngelList Venture.</p>
                </div>
                
                <br />
                <br />
                <br />
                <br />
            </Left2>
            <button>Apply to be an investor</button>
            <P1 color="red" >Start a fund or syndicate</P1>
            </Left>
            <Right>
            <img src= "download.jpg" alt=""/>
            </Right>

            <Bottom>
            <img src= "download1.png" alt=""/>
            <div><h1>Discover the best new products, every day.</h1></div>
            <button>Explore Products</button>
            </Bottom>
            
            <ImgDiv>
            <Img src= "download2.png" alt=""></Img>
            </ImgDiv>
            
        </Main>
        
        
    )
}