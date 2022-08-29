import React, {useContext} from "react";
import styled from "styled-components";
import { ScoreContext } from "../../context/ScoreContext";

export const Score = () => {
    const { score } = useContext(ScoreContext)

    const ScoreBoard = styled.div`
        padding: 1rem 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: white;
        color: hsl(229, 64%, 46%);
        border-radius: 10px;
        text-align: center;
        .number{
            color:hsl(229, 25%, 31%);
            font-size: 4rem;
            
        }

        small{
            font-weight: 700;
            font-size: 1rem;
        }

        @media screen and (max-width: 768px) {
            width: 30%;
            .number{
                font-size: 4rem;
            }
        }
    `

    return (
        <ScoreBoard>
            <small>Score</small>
            <p className="number">{score}</p>
        </ScoreBoard>
    )
}