import React from "react";
import styled from 'styled-components'

export default function GameCard({name = "default"}){

    const CardStyled = styled.div`
        background-color: white;
        width: 130px;
        height: 125px;
        border-radius: 50%;
        border: 16px solid black;
        cursor: pointer;
        position: relative;
        z-index: 2;

        .box{
            display: flex;
            flex: 1;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            align-self: stretch;
            img {
                width: 40%;
            }
        }
    `

    return (
        <CardStyled name={name}>
            
            <div className="box">
                <img src={`./images/icon-${name}.svg`} alt=''/>
            </div>
        </CardStyled>
    )
}