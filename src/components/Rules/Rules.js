import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../Buttons/Buttons";

const RulesStyle = styled.div`
    text-align: center;

    &::before {
    content: '';
    display: ${({ visible }) => visible ? 'block' : 'none'};
    position: absolute;
    z-index: 2;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background: rgba(0,0,0,.6);
    }
    
    .rules-table{
        background-color: white;
        position: fixed;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;
        width: 30%;
        height: 60%;
        left: 0; 
        right: 0;
        top: 0;
        bottom: 0;
        padding: 4em 0;
        margin: 5% auto;
        color: hsl(229, 25%, 31%);
        padding: 2em;
        border-radius: 10px;
        z-index: 5;

        h2{
            text-transform: uppercase;
            align-self: flex-start;
            font-weight: 700;
            color: #3b4262;
        }
    }
    
    .close-button{
        padding: 1em;
        margin-top: 2em;
        cursor: pointer;   
    }
    
    .rules-button{
        position: fixed;
        right: 2px;
        bottom: 2px;
    }
`

export default function Rules(){
    const [visible, setVisible] = useState(false)

    function handleVisibleTable(){
        setVisible(!visible)
    }

    return (
        <RulesStyle visible={visible}>
            {
                visible && (
                    <div className="rules-table">
                        <h2>Rules</h2>
                        <img src="./images/image-rules.svg" alt='rules' />
                        <img onClick={handleVisibleTable} className="close-button" src="./images/icon-close.svg" alt='close rules' />
                    </div>
                )
            }
            <Button classname='rules-button' onClick={handleVisibleTable}>
                Rules
            </Button>
        </RulesStyle>
    )
}