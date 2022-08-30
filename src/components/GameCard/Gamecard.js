import React from "react";
import styled, { keyframes } from 'styled-components'

const shadow = keyframes`
  to {
    box-shadow: 0 0 0 40px rgba(255,255,255, .04), 0 0 0 80px rgba(255,255,255, .03), 0 0 0 120px rgba(255,255,255, .02);
    transform:  scale(1.1);
  }
`
const box = keyframes`
  to {
    transform: rotateY(360deg);
  }
`

const CardStyled = styled.div`
        
        width: 160px;
        height: 155px;
        padding: ${({ name }) => (name === "default" ? "16px" : "0")};
        border-radius: 50%;
        border: 16px solid ${({color}) => color.base};
        cursor: pointer;
        position: relative;
        z-index: 2;
        display: flex;
        box-shadow: 0 5px 0 ${({ color }) => color.border};
        

        .box{
            background: ${({ name }) => (name === "default" ? "#122343" : "white")};
            box-shadow: 0 -4px 0 ${({ name }) => name === "default" ? "transparent" : "#babfd4"};
            display: flex;
            flex: 1;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            align-self: stretch;
            img {
                width: 60%;
            }
        }
    `

    const colors = {
        paper: {
        base: "#516ef4",
        border: "#2543c3",
        },
        rock: {
        base: "#de3a5a",
        border: "#980e31",
        },
        scissors: {
        base: "#eca81e",
        border: "#c76c14",
        },
        default: {
        base: "transparent",
        border: "transparent",
        },
    };

export default function GameCard({name = "default", onClick}){
    function handleClick(){
        if (onClick) {
            onClick(name);
        }
    }

    const color = colors[name];
    
    return (
        <CardStyled name={name} color={color} onClick={handleClick}>
            <div className="box">
                <img src={`./images/icon-${name}.svg`} alt=''/>
            </div>
        </CardStyled>
    )
}