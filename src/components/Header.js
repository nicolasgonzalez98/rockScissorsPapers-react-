import React from "react";
import styled from "styled-components";
import { Score } from "./Score";
import logo_img from '../images/logo.svg'

export default function Header(){
    
    const HeaderStyle = styled.div`
        text-transform: uppercase;
        display: flex;
        border: 2px solid;
        border-radius: 10px;
        padding: 1rem 2rem;
        display: flex;
        justify-content: space-between;
        width: 50vw;
        
        @media screen and (max-width: 768px) {
            width: 90%;
            height: 18vh;
            img{
                width: 40%;
            }

            
        }
    `
    

    return (
        <HeaderStyle>
            <img src={logo_img} alt='logo'/>
            <Score />
        </HeaderStyle>
    )
};