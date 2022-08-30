import React, { useContext, useState } from "react";
import styled from 'styled-components'
import { ScoreContext } from "../../context/ScoreContext";
import GameCard from "../GameCard/Gamecard";

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

const elements = ['paper', 'scissors', 'rock']



export default function Table(){

    const [isPlaying, SetPlaying] = useState(false)
    const [housePick, SetHousePick] = useState('default')
    const [pick, SetPick] = useState('')
    const {score, setScore} = useContext(ScoreContext)
    const [result, setResult] = useState('')

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    function getHousePick(){
        return new Promise((res, rej) => {
            let pick;
            const interval = setInterval(() => {
                pick = elements[getRandomInt(elements.length)]
                SetHousePick(pick)
            },75)

            setTimeout(() => {
                clearInterval(interval)
                res(pick)
            }, 2000)
        })
    }

    function playResults(name, house){
        if(name === house){
            return 'draw'
        }

        if(name === 'paper'){
            if(house === 'scissors'){
                return 'lose'
            }

            if(house === 'rock'){
                return 'win'
            }
        }

        if(name === 'scissors'){
            if(house === 'rock'){
                return 'lose'
            }

            if(house === 'paper'){
                return 'win'
            }
        }

        if(name === 'rock'){
            if(house === 'paper'){
                return 'lose'
            }

            if(house === 'scissors'){
                return 'win'
            }
        }

        


    }

    async function onClick(name){
        SetPick(name)
        SetPlaying(true)
        const house = await getHousePick()
        let result_match = playResults(name, house)
        setResult(result_match)
        console.log(result_match)
        if(result_match === 'win'){
            setScore(score+1)
        }
        
    }

    return (
        <TableStyle>
            <GameCard name="paper" onClick={onClick}/>
            <GameCard name="scissors" onClick={onClick}/>
            <GameCard name="rock" onClick={onClick}/>
        </TableStyle>
    )
}