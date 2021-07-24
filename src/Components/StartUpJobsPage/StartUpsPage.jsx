import styled from "styled-components";
import styles from "./StartUpsPageComponents/StartUps.module.css";
import { v4 as uuid } from "uuid";
import { BlogDiv } from "./StartUpsPageComponents/BlogDiv";

import { FooterMain } from "../LandingPage/FooterMain";

import Header from "../LandingPage/Header";

const Wrapper = styled.div`
  width: 100%;
&div{
  max-width: 1136px;
  margin: auto;

}
`;

const TopBox = styled.div`
  max-width: 1136px;
  padding: 40px;
  text-align: center;
  margin: auto;

  h1 {
    font-size: 65px;
    margin: 10px;
    font-weight: 700;
  }
  p {
    font-size: 24px;
    max-width: 90%;
    margin: auto;
    line-height: 1.5;
  }
`;

const CardBox = styled.div`
  display: flex;
  margin: auto;
  justify-content: space-between;
  width: 1136px;
  * {
    margin: 0;
  }
  div {
    width: 340px;
    text-align: left;
  }
  div > div {
    display: flex;
    justify-content: space-between;
  }
  h3 {
    font-size: 22px;
    margin: 16px 0;
  }
  p {
    margin-bottom: 16px;
  }

  a {
    color: #0a6cff;
  }

  a:hover {
    text-decoration: underline;
  }
`;

const Button = styled.button`
  background-color: #0f6fff;
  border-color: #0f6fff;
  color: #fff;
  font-size: 20px;
  line-height: 1.4;
  margin-top: 30px;
  padding: 16px 32px;
  border-radius: 4px;
  border: 1px solid transparent;

  &:hover {
    cursor: pointer;
  }
`;
const MidLine = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
  margin-bottom: 40px;
  width: 80%;
  align-items: center;

  p {
    line-height: 1.25;
  }

  span {
    color: #0a6cff;
  }

  span:hover {
    text-decoration: underline;
  }
`;

const MidHeading = styled.h2`
  font-size: 32px;
  line-height: 1.125;
  margin-bottom: 48px;
  text-align: center;
  font-size: 30px;
  font-weight: 500;
`;

const blogData = [
  {
    id: uuid(),
    image: "https://angel.co/cdn-cgi/image/width=880,height=660,fit=cover,gravity=0.5x0.5,quality=90,format=auto/https://d2gn4xht817m0g.cloudfront.net/p/job_collections/heros/original/000/000/079/79-5398681266a26d6143bbd0f729cf4c27ac8d6603.jpeg",
    title: "11 Fast Growing Marketing Tech Startups Hiring in 2021",
  },
  {
    id: uuid(),
    image: "https://angel.co/cdn-cgi/image/width=880,height=660,fit=cover,gravity=0.5x0.5,quality=90,format=auto/https://d2gn4xht817m0g.cloudfront.net/p/job_collections/heros/original/000/000/074/74-2ccf84eade7ecf1060d8bd893bdc810e8b696d7b.jpg",
    title: "Unicorn Startups Hiring From LinkedIn's 2019 List of Top Companies To Work For",
  },
  {
    id: uuid(),
    image: "https://angel.co/cdn-cgi/image/width=880,height=660,fit=cover,gravity=0.5x0.5,quality=90,format=auto/https://d2gn4xht817m0g.cloudfront.net/p/job_collections/heros/original/000/000/072/72-18281478acf82f8c652276821818c1fa0b24ca20.jpg",
    title: "Digital Health Companies Enabling You To Manage Your Health From Home",
  },
  {
    id: uuid(),
    image: "https://angel.co/cdn-cgi/image/width=880,height=660,fit=cover,gravity=0.5x0.5,quality=90,format=auto/https://d2gn4xht817m0g.cloudfront.net/p/job_collections/heros/original/000/000/071/71-ab3498aa294bab8abd382fcf427dd8c032d8c63d.png",
    title: "Companies Delivering Food Safely To Your Door During COVID-19",
  },
  {
    id: uuid(),
    image: "https://angel.co/cdn-cgi/image/width=880,height=660,fit=cover,gravity=0.5x0.5,quality=90,format=auto/https://d2gn4xht817m0g.cloudfront.net/p/job_collections/heros/original/000/000/070/70-5dcd3fe155cbd83f32c856cf6cdfb683f7ccedbb.jpg",
    title: "Startups Fighting to Flatten the COVID-19 Curve",
  },
  {
    id: uuid(),
    image: "https://angel.co/cdn-cgi/image/width=880,height=660,fit=cover,gravity=0.5x0.5,quality=90,format=auto/https://d2gn4xht817m0g.cloudfront.net/p/job_collections/heros/original/000/000/068/68-0a352360502ce5c2abd439a2070b8eaec0bd604a.png",
    title: "New York Companies Hiring From Wealthfront's 2020 Career-Launching Company List",
  },
  {
    id: uuid(),
    image: "https://angel.co/cdn-cgi/image/width=880,height=660,fit=cover,gravity=0.5x0.5,quality=90,format=auto/https://d2gn4xht817m0g.cloudfront.net/p/job_collections/heros/original/000/000/067/67-62479831ac8f07d95a0f846e3223d76b0428450a.png",
    title: "San Francisco Companies Hiring From Wealthfront's 2020 Career-Launching Company List",
  },
  {
    id: uuid(),
    image: "https://angel.co/cdn-cgi/image/width=880,height=660,fit=cover,gravity=0.5x0.5,quality=90,format=auto/https://d2gn4xht817m0g.cloudfront.net/p/job_collections/heros/original/000/000/066/66-9d365d6060b77ee28a222698aaa033dd79921c9b.png",
    title: "The Breakout List: Great Companies To Apply To",
  },
  {
    id: uuid(),
    image: "https://angel.co/cdn-cgi/image/width=880,height=660,fit=cover,gravity=0.5x0.5,quality=90,format=auto/https://d2gn4xht817m0g.cloudfront.net/p/job_collections/heros/original/000/000/063/63-98819099998815a6f232b0e26df4d653558c262b.png",
    title: "23 Favorite Female-Founded Companies",
  },
  {
    id: uuid(),
    image: "https://angel.co/cdn-cgi/image/width=880,height=660,fit=cover,gravity=0.5x0.5,quality=90,format=auto/https://d2gn4xht817m0g.cloudfront.net/p/job_collections/heros/original/000/000/046/46-c119e338279daec6de27da39a3c3d26d4f277f59.png",
    title: "20 Startups With Perfect Jobs For Digital Nomads",
  },
  {
    id: uuid(),
    image: "https://angel.co/cdn-cgi/image/width=880,height=660,fit=cover,gravity=0.5x0.5,quality=90,format=auto/https://d2gn4xht817m0g.cloudfront.net/p/job_collections/heros/original/000/000/063/63-98819099998815a6f232b0e26df4d653558c262b.png",
    title: "26 Startups Hiring For Freelance Writing Jobs",
  },
  {
    id: uuid(),
    image: "https://angel.co/cdn-cgi/image/width=880,height=660,fit=cover,gravity=0.5x0.5,quality=90,format=auto/https://d2gn4xht817m0g.cloudfront.net/p/job_collections/heros/original/000/000/044/44-f485ff29e299ee60a561b07d7e114a6ffcda63a2.png",
    title: "25 Startups Hiring For Junior Software Engineer Jobs",
  },
];

export function StartUpsPage() {
  return (
    <Wrapper>
      <div>
      <Header></Header>
     
      <TopBox>
        <h1> Find your dream startup job</h1>
        <p>
          AngelList helps people find exciting job opportunities, from
          fast-growing startups to the Silicon Valley giants you know & love.
        </p>
      <Button>Find a Job</Button>
      </TopBox>

      <MidLine>
        <p>Looking to hire?&#160;</p>
        <span>Post jobs for free</span>
      </MidLine>
      <MidHeading>AngelList is the #1 startup hiring platform</MidHeading>

      <CardBox>
        <div>
          <div>
            <h3>Startups come here first to build their team</h3>
          </div>
          <p>
            Startups come to AngelList to build their team, and continue to stay
            with us as they keep growing.
          </p>
          <a>Browse companies</a>
        </div>
        <div>
          <div>
            <h3>One profile unlocks every job on AngelList</h3>
          </div>
          <p>
            Your AngelList profile tells startups your story and lets you apply
            to any job you're interested in.
          </p>
          <a>Create a Profile</a>
        </div>
        <div>
          <div>
            <h3>Browse and apply to jobs privately</h3>
          </div>
          <p>
            We'll never tell your current company or a third-party recruiter
            about your job search. We respect your privacy.
          </p>
          <a>Find a Job</a>
        </div>
      </CardBox>

      <div className={styles.blogContainer}>
        <h2>Discover unique job opportunities</h2>
        <div className={styles.blogElementContainer}>
            {blogData.map((e)=>(
                <BlogDiv key={e.id} {...e}></BlogDiv>
            ))}
        </div>
      </div>
      <FooterMain></FooterMain>

      </div>
    </Wrapper>
  );
}
