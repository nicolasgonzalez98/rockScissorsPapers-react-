import React from "react";
import styled from "styled-components";

const ButtonGame = styled.button`
    background-color: transparent;
    border-radius: 10px;
    border: 2px solid white;
    color: white;
    padding: .8em 3em;
    text-transform: uppercase;
    letter-spacing: .15em;
    cursor: pointer;
    font-weight: 700;

    &:hover{
        background-color: white;
        color: #1f3757;
    }
`

export const Button = ({children, ...props}) => {
    return <ButtonGame {...props}>{children}</ButtonGame>
}