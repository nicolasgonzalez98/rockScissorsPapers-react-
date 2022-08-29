import React, { useState } from "react";
import styled from 'styled-components'
import GameCard from "../GameCard/Gamecard";

export default function Table(){

    const [isPlaying, SetPlaying] = useState(false)

    const TableStyle = styled.div`
        border: 2px solid white;
        display: flex;
        width: 70vw;
        height: 60vh;
    `
    

    return (
        <TableStyle>
            <GameCard name="paper"/>
            <GameCard name="scissors"/>
            <GameCard name="rock"/>
        </TableStyle>
    )
}