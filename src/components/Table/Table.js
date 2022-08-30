import React, { useState } from "react";
import styled from 'styled-components'
import GameCard from "../GameCard/Gamecard";

export default function Table(){

    const [isPlaying, SetPlaying] = useState(false)

    const TableStyle = styled.div`
        display: grid;
        grid-template-columns: repeat(2, 130px);
        justify-content: center;
        justify-items: center;
        grid-gap: 30px 50px;
        margin: 2em 0;
        position: relative;

        & div:nth-of-type(3) {
            grid-column: span 2;
        }
    `
    

    return (
        <TableStyle>
            <GameCard name="paper"/>
            <GameCard name="scissors"/>
            <GameCard name="rock"/>
        </TableStyle>
    )
}