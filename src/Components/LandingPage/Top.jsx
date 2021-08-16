import styled from "styled-components"

const Wrapper = styled.div`
width: 100%;
max-width: 1136px;
margin: auto;
margin-bottom: 144px;
`;

const TopBox = styled.div`
    width: 80%;
    padding: 88px 0;
    text-align: center;
    margin: auto;

img{
    width: 150px;
}
h1{
    font-size: 65px;
    margin: 0;
    font-weight: 700;
}
p{
    font-size:24px;
    max-width: 80%;
    margin: auto;
}
`;

const CardBox=styled.div`
    display: flex;
    justify-content: space-between;
*{
    margin: 0;
}
@media only screen and (max-width: 700px) {
    flex-direction: column;
    padding: 10px;
    margin: auto;
    width: 80%;
    &>div{
        margin: auto;
    }
}    
@media only screen and (max-width: 1000px) {
    flex-wrap: wrap;
    justify-content: center;
    width: 80%;
    margin: auto;
}    
div{
    width: 340px;
}
div>div{
    display: flex;
    justify-content: space-between;
}
h3{
    font-size: 22px;
    margin: 16px 0;
}
p{
    margin-bottom: 38px;
}
div>div>img{
    width: 65px;
    height: 64px;
}
button{
    font-size: 20px;
    padding: 16px 32px;
    border-radius: 4px;
    border: none;
    color: white;
}
div:nth-child(1) button{
    background-color: #0058DB;
}
div:nth-child(2) button{
    background-color: #322C81;
}
div:nth-child(3) button{
    background-color: #CC4D29;
}

`;

export function Top(){
    return(
       
        <Wrapper>
            <TopBox>
                <img src="/images/AngelList.png" alt="" />
                <h1>Join the world’s largest startup community</h1>
                <p>Experience the startup ecosystem — invest in startups, research the fastest-growing companies, and find a job you love.</p>
            </TopBox>

            <CardBox>
                <div>
                    <div>
                        <h3>AngelList Talent</h3>
                        <img src="/images/talent.jpg" alt="Talent" />
                    </div>
                    <p>Apply privately to 130,000+ tech & startup jobs with one application. See salary and equity upfront.</p><br />
                    <button>Find startup jobs</button>
                </div>
                <div>
                    <div>
                        <h3>AngelList Venture</h3>
                        <img src="/images/venture.jpg" alt="Ventue" />
                    </div>
                    <p>Over $1 billion deployed alongside leading venture fund managers with 36% of all top-tier U.S. VC deals funded on AngelList.</p>
                    <button>Apply to be investor</button>
                </div>
                <div>
                    <div>
                        <h3>Product Hunt</h3>
                        <img src="/images/talent.jpg" alt="Talent" />
                    </div>
                    <p>The next big thing in tech launches every day. A friendly community of millions of makers & early adopters awaits.</p>
                    <button>Explore products</button>
                </div>
            </CardBox>
        </Wrapper>
    )
}