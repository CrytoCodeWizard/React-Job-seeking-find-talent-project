import React from 'react'

import styled from 'styled-components'

export default function Section1() {

    const EditorialPitch = styled.div`
    *{
        padding: 0;
        margin: 0;
    }
    width: 100%;
    max-width: 1136px;
    margin: 0 auto;
    text-align: left;
    padding: 0 32px;
    `
    const GrowCareer = styled.div`
    /* width: 100%;
    max-width: 1136px; */
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    min-width: 0;
    min-height: 0;
    //flex-wrap: wrap;
    margin-bottom: 112px;
    position: relative;
    `
    const GCleft = styled.div`
    width: 50%;
    *{margin: 0;
    padding: 0;}
    h2{
    font-size: 20px;
    line-height: 1.4;
    font-weight: 500;
    margin-bottom: 4px;
    }
    h3{ 
    font-size: 65px;
    line-height: 1.05;
    font-weight: 800;
    margin-bottom: 40px;
    }
    p{
    font-size: 24px;
    line-height: 1.5;
    margin-bottom: 40px;
    }
    div:nth-child(5){
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    min-width: 0;
    min-height: 0;
    flex-wrap: wrap;

    a:first-child{
        font-size: 20px;
    line-height: 1.4;
    font-weight: 500;
    font-family: Founders Grotesk, sans-serif;
    line-height: 24px;
    padding: 16px 32px;
    border-radius: 4px;
    text-align: center;
    border: none;
    background: #0f6fff;
    color: #fff;
    cursor: pointer;
    text-decoration: none;
    }
    a:last-child{
    margin: auto 0 auto 24px;
    color: #0a6cff;
    cursor: pointer;
    text-decoration: none;
    }
    }
    `
    const GCLdiv = styled.div`
        div{
            width: 45%;
            margin-bottom: 32px;
            h4{
            font-size: 20px;
            line-height: 1.4;
            font-weight: 500;
            margin-bottom: 8px;
            }
            p{
                margin: 0;
                padding: 0;
                font-size: 16px;
            }
        }
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        min-width: 0;
        min-height: 0;
        margin: 14px auto;
        flex-wrap: wrap;
        
    `
    const GCright = styled.div`
    img{
        width: 100%;
        position : relative;
        top : 10px;
        right : 0;
    }
    width: 45%;
    text-align: right;
    position: relative;
    `
    const H2 = styled.h2`
    margin: 0;
    padding: 0;
    margin-bottom: 40px;
    text-align: center;
    font-size: 28px;
    `
    const JobListings = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    min-width: 0;
    min-height: 0;
    flex-wrap: wrap;
    `
    const JLcard = styled.div`
    padding: 16px;
    border-radius: 4px;
    border: 1px solid #000;
    margin-bottom: 24px;
    width: auto;
    margin-right: 24px;
    `
    const JLdiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    min-width: 0;
    min-height: 0;
    img{
        height: 48px;
        aspect-ratio: auto 48 / 48;
        width: 48px;
    }
    `
    const JLDdiv = styled.div`
    font-size: 20px;
    font-weight: 500;
    line-height: 1.2;
    p{
    margin:0;
    padding:0;
    margin-left: 16px; 
    }
    p:first-child{
        margin-bottom: 4px;
        font-size: 20px;

    }
    p:last-child{
        font-size: 14px;
        line-height: 1.5;
    }

    `
    const P = styled.p`
    font-size: 16px;
    line-height: 1.5;
    font-weight: 400;
    margin-top: 16px;
    margin-bottom: 192px;
    width: 100%;
    text-align: center;
    a{
        color: #0a6cff;
        cursor: pointer;
        text-decoration: none;
    }
    `

    const RecruitingPitch = styled.div`
    padding: 72px 72px 144px;
    margin: 0 auto 144px;
    background-color: #000;
    color: #fff;
    text-align: left;

    &>div{
        width: 100%;
        max-width: 1136px;
        margin: 0 auto;
    }
    &>div>div{
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        min-width: 0;
        min-height: 0;
        position: relative;
    }
    
    &>div>div>h2{
        
        margin: 0;
        padding: 0;
        position: relative;
        font-size: 230px;
        font-weight: 800;
        text-align: center;
        font-family : Helvetica;
    }

    &>div>div>p{
        margin: 0;
        padding: 0;
        font-size: 30px;
        line-height: 1.125;
        margin-bottom: 96px;
        font-weight: 500;
    }
    `
    const Img = styled.img`
        position: absolute;
        margin: 0 auto;
        top: -170px;
        aspect-ratio: auto 150 / 134;
        width: 150px;
    `

    
    const RPdiv = styled.div`
        justify-content: center;
        align-items: center;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row-reverse;  
    `
    
    const Right = styled.div`
        width: 45%;
        margin-left: 5%;
        align-self: end;
                    
    `
    const Rdiv = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: flex-start;
        min-width: 0;
        min-height: 0;
        flex-wrap: wrap;
    `
    const Element = styled.div`
        text-align: center;
        margin: 0 16px 48px;
        color: #fff;
        font-size: 14px;
        line-height: 1.5;
        display: block;
        &>img{
            margin: 0 8px 8px;
            width: 70px;
            display: block;
            border: none;
            }
        &>p{
                color: #fff;     
            }
                        
    `

    const Left = styled.div`
        width: 50%;
        &>p{
            margin: 0;
            padding: 0;
            margin-bottom: 40px;
            font-size: 24px;
            line-height: 1.5;
        }
        &>a{
            align-self: start;
            font-size: 18px;
            line-height: 1.4;
            font-weight: 500;
            padding: 16px 32px;
            border-radius: 4px;
            text-align: center;
            border: none;
            background: #0f6fff;
            color: #fff;
            cursor: pointer;
            text-decoration: none;
        }
        
    `

    const Ldiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    min-width: 0;
    min-height: 0;
    flex-wrap: wrap;
    margin-bottom: 40px;
    `
    const LdivL = styled.div`
    width: 45%;
    &>h3{
        margin: 0;
        padding: 0;
        font-size: 18px;
        line-height: 1.4;
        font-weight: 500;
        margin-bottom: 8px;
    }
    `
    const LdivR = styled.div`
    width: 45%;
    &>h3{
        margin: 0;
        padding: 0;
        font-size: 18px;
        line-height: 1.4;
        font-weight: 500;
        margin-bottom: 8px;
    }
    `

    return (
        <>
            <EditorialPitch>
                <GrowCareer>
                    <GCleft>
                        <h2>AngelList Talent</h2>
                        <h3>Grow your career</h3>
                        <p>Twitch, Stripe, and over 100,000 startups of all sizes
                            have used AngelList
                            to hire people like you. Already know where you want to be?
                            You can apply directly—and privately—to early stage startups and industry leaders alike.
                        </p>
                        <GCLdiv>
                            <div>
                                <h4>Talk directly to founders</h4>
                                <p>
                                    Speak directly to founders and hiring managers.
                                    No third party recruiters allowed.
                                </p>
                            </div>
                            <div>
                                <h4>See salary & equity upfront</h4>
                                <p>
                                    View salary and stock
                                    option details before you apply to a job.
                                </p>
                            </div>
                        </GCLdiv>
                        <div>
                            <a href="#">Find startup jobs</a>
                            <a href="#">Post a job</a>
                        </div>
                    </GCleft>
                    <GCright>
                            <img src="S1img/gcright.png" alt="gcright" />
                    </GCright>
                </GrowCareer>
                <H2>Explore over 2 million tech and startup job-opportunities</H2>
                <JobListings>
                    <JLcard>
                        <JLdiv>
                            <img src="S1img/twitch.jpg" alt="twitch" />
                            <JLDdiv>
                                <p>
                                    Software Engineer at Twitch
                                </p>
                                    
                                <p>
                                    $130k – $210k • 0.0% – 0.001%
                                </p>
                            </JLDdiv>
                        </JLdiv>
                    </JLcard>
                    <JLcard>
                        <JLdiv>
                            <img src="S1img/uber.jpg" alt="Uber" />
                            <JLDdiv>
                                <p>
                                    Software Engineer at Uber
                                </p>
                                    
                                <p>
                                    $100k – $170k
                                </p>
                            </JLDdiv>
                        </JLdiv>
                    </JLcard>
                    <JLcard>
                        <JLdiv>
                            <img src="S1img/roblox.jpg" alt="Roblox" />
                            <JLDdiv>
                                <p>
                                    Software Engineer at Roblox
                                </p>
                                    
                                <p>
                                    $115k – $165k
                                </p>
                            </JLDdiv>
                        </JLdiv>
                    </JLcard>
                    <JLcard>
                        <JLdiv>
                            <img src="S1img/instacart.jpg" alt="Instacart" />
                            <JLDdiv>
                                <p>
                                    Software Engineer at Instacart
                                </p>
                                    
                                <p>
                                    $110k – $140k • 0.0% – 0.001%
                                </p>
                            </JLDdiv>
                        </JLdiv>
                    </JLcard>
                    <JLcard>
                        <JLdiv>
                            <img src="S1img/discord.jpg" alt="Discord" />
                            <JLDdiv>
                                <p>
                                    Software Engineer at Discord
                                </p>
                                    
                                <p>
                                    $180k – $220k • 0.005% – 0.05%
                                </p>
                            </JLDdiv>
                        </JLdiv>
                    </JLcard>
                    

                </JobListings>
                <P>
                    <a href="">Find your dream job</a>
                </P>
            </EditorialPitch>

            <RecruitingPitch>
                <div>
                    <div>
                        <Img src="S1img/location.png" alt="Location" />
                        <h2>100,000</h2>
                        <p>of the world's top startups, from seed to post-IPO, build teams on AngelList.</p>
                        <RPdiv>
                            <Right>
                                <Rdiv>
                                <Element>
                                        <img src="S1img/slack.png" alt="slack" />
                                        <p>Slack</p>
                                    </Element>
                                    <Element>
                                        <img src="S1img/robinhood.png" alt="Robinhood" />
                                        <p>Robinhood</p>
                                    </Element>
                                    <Element>
                                        <img src="S1img/peloton.png" alt="Peloton" />
                                        <p>Peloton</p>
                                    </Element>
                                    <Element>
                                        <img src="S1img/postmates.png" alt="Postmates" />
                                        <p>Postmates</p>
                                    </Element>
                                    <Element>
                                        <img src="S1img/affirm.png" alt="Affirm" />
                                        <p>Affirm</p>
                                    </Element>
                                    <Element>
                                        <img src="S1img/nerdwallet.png" alt="Nerdwallet" />
                                        <p>Nerdwallet</p>
                                    </Element>
                                    <Element>
                                        <img src="S1img/honey.png" alt="Honey" />
                                        <p>Honey</p>
                                    </Element>
                                    <Element>
                                        <img src="S1img/front.png" alt="Front" />
                                        <p>Front</p>
                                    </Element>
                                </Rdiv>
                            </Right>

                            <Left>
                                <p>Post jobs, find candidates, and manage your talent pipeline with AngelList's complete hiring toolkit.</p>
                                <Ldiv>
                                    <LdivL>
                                        <h3>
                                            High-quality candidates
                                        </h3>
                                        <p>
                                            2,300,000+ candidates including 750,000+ developers,
                                            170,000+ designers, and thousands more every day.
                                        </p>
                                    </LdivL>
                                    <LdivR>
                                        <h3>
                                        Free tools to build your team
                                        </h3>
                                        <p>
                                            Build your employer brand, post jobs,
                                            take applications and manage your
                                            candidate pipeline - all for free.
                                        </p>
                                    </LdivR>
                                </Ldiv>
                                <a href="">Post jobs for free</a>
                            </Left>
                        </RPdiv>
                    </div>
                </div>
            </RecruitingPitch>


        </>
    )
}