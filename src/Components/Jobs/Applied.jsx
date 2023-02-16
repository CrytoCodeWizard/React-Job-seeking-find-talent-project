import { useState, useEffect } from "react";
import styled from "styled-components"
import axios from "axios";
import { v4 as uuid } from "uuid"

export function Applied() {

    const Wrapper = styled.div`
 h1{
     font-weight: 400;
    width: 960px;
    margin:auto;
 }
 &>div{
     padding: 16px;
     border-radius: 4px;
     border: 1px solid #e4e7f0;
     margin: 16px 0;
 }
 &>div>div{
    display: flex;
    width: 100%;
    background-color: #fff;
 }
 &>div>div:nth-child(2){
     margin-top: 5px;
     justify-content: space-between;
 }
 span{
     font-size: 13px;
     font-weight: bold;
     color: #385075;
 }
 
 div>h2{
    color: #050c26;
    line-height: 1.25;
    font-weight: 500;
    font-size: 18px;
    padding-bottom: 4px;
 }
`;
    const ImgBox = styled.div`
    margin-right: 16px;
    width: 48px;
    height: 48px;
    border-radius: 4px;
    border: 1px solid #f2f4f7;
    background-color: #fff;
    img{
    width: 100%;
    height: 100%;
    }
`;

    const [applied, setApplied] = useState([]);

    useEffect(() => {
        handleApplied();
    }, []);

    const handleApplied = () => {
        axios.get(`${process.env.REACT_APP_ANGEL_API_KEY}/applied`).then(({ data }) => {
            console.log('data:', data)
            setApplied(data)
        });
    }


    return (
        <Wrapper>
            <h1>Applications</h1>
            {applied.map((el) => {
                return <div key={uuid()}>
                    <div>
                        <ImgBox>
                            <img
                                src={el.image}
                                alt="" />
                        </ImgBox>
                        <div>
                            <h2>{el.name}</h2>
                            <p>{el.description}</p>
                        </div>
                    </div>
                    <div>
                        <span>● Status Updates Offsite</span>
                        <span>{el.date}</span>
                    </div>
                </div>
            })}
        </Wrapper>
    )
}