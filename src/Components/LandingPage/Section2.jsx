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

    p{
        font-size: 20px;
    }
    p:nth-child(3){
        font-size: 25px;
        // margin-bottom: -30px;
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
    button{

        margin-top: 80px;
        width: 95%;
        background-color: #4139a7;
        color: white;
        cursor: pointer;
        border-radius: 5px;
        border: none;
        font-size: 18px;
        height: 50px;
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

    margin-left: -45px;
    cursor: pointer;
    color: ${(props) => (props.color === "red" ? "#4139a7" : "#4139a7")};
    `

    const Right = styled.div`
    
    float: left; 
    width: 50%;

    img{

        margin-top: 200px;
        margin-left: 180px;
        width: 442px;
        height: 376px;
    }
    `
    
    const Bottom = styled.div`
    
    float: left;
    width: 100%;
    height: 400px;
    margin-top: 230px;
    background-color: black;

    img{

        margin-left: 45%;
        margin-top: -70px;
        margin-bottom: 80px;
        width: 120px;
        height: 148px;
    }

    h1{

        margin-left: 250px;
        font-size: 45px;
        color: white;
    }

    button{
        width: 230px;
        height: 60px;
        margin-left: 41%;
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
    background-color: white;
    `
    
    const Img = styled.img`
    
    position: relative;
    width: 200px;
    height: 51px;
    filter: invert(100);
    margin-left:590px;
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
                <h1>$1,000,000,000+</h1>
                <p>flows through AngelList into thousands of investments.</p>
                <button>Apply to be an investor</button>
            </Left1>
            <Left2>
                <h1>36% of top-tier U.S. VC deals</h1>
                <p>were funded by investors through AngelList Venture.</p>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <P1 color="red" >Start a fund or syndicate</P1>
            </Left2>
            </Left>

            <Right>
            <img src= "download.jpg" alt=""/>
            </Right>

            <Bottom>
            <img src= "download1.png" alt=""/>
            <h1>Discover the best new products, every day.</h1>
            <button>Explore Products</button>
            </Bottom>
            
            <ImgDiv>
            <Img src= "download2.png" alt=""></Img>
            </ImgDiv>
            
        </Main>
        
        
    )
}