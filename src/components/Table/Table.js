import React, { useContext, useState } from "react";
import styled from 'styled-components'
import { ScoreContext } from "../../context/ScoreContext";
import { WhiteButton } from "../Buttons/Buttons";
import GameCard from "../GameCard/Gamecard";

const TableStyle = styled.div`
        display: grid;
        grid-template-columns: repeat(2, 150px);
        justify-content: center;
        justify-items: center;
        grid-gap: 30px 100px;
        margin: 2em 0;
        position: relative;
        text-align: center;
        text-transform: uppercase;
        font-size: 0.8em;
        font-weight: 700;
        letter-spacing: 1px;
        
        & div:nth-of-type(3) {
            grid-column: span 2;
        }

        .results {
            text-align: center;
            h2 {
            text-transform: uppercase;
            font-size: 56px;
            margin: 10px;
            }
        }
        .end-game{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content:space-around;
            > p {
                    
                    margin-top: 2em;
                    font-size: medium;
                }
        }

        
        .line{
            display: ${({ isPlaying }) => (!isPlaying ? "block" : "none")};
            height: 14px;
            background: rgba(0, 0, 0, 0.2);
            position: absolute;
            width: 220px;
            top: 58px;

            &::before {
                content: "";
                height: 14px;
                background: rgba(0, 0, 0, 0.2);
                position: absolute;
                left: 0;
                right: 0;
                top: 0;
                transform: rotate(55deg);
                transform-origin: left top;
                }
            &::after {
                content: "";
                height: 14px;
                background: rgba(0, 0, 0, 0.2);
                position: absolute;
                left: 0;
                right: 0;
                top: 0;
                transform: rotate(-55deg);
                transform-origin: right top;
                }
        }

        @media screen and (min-width: 1024px) {
            grid-template-columns: 18.75rem 18.75rem;
            ${({ isPlaying, results }) => (isPlaying && results) && "grid-template-columns: 18.75rem 6.875rem 6.875rem 18.75rem;"}
            
            & div:nth-of-type(3) {
                ${({ isPlaying, results }) =>
                (isPlaying && results) && "grid-column: 2 / 4; grid-row: 1;"}
    }
            .line {
            width: 18.75rem;
            }

            .results {
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
            }

            .end-game {
                font-size: 1.2em;
                display: flex;
                flex-direction: column;
                > div {
                    order: 2;
                }
                > p {
                    order: 1;
                    margin-bottom: 2em;
                }
            }
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
        }else if(result_match === 'lose'){
            setScore(score-1)
        }
        
    }

    function handleTryAgain(){
        SetPlaying(false)
        setResult('')
    }

    return (
        <TableStyle isPlaying={isPlaying} results={(result !== "") ? 1 : undefined}>
            <span className="line"></span>
            {
                !isPlaying ? 
                <>
                    <GameCard name="paper" onClick={onClick}/>
                    <GameCard name="scissors" onClick={onClick}/>
                    <GameCard name="rock" onClick={onClick}/>
                </> : 
                <>
                
                    <div className="end-game">
                        <GameCard isPlaying={isPlaying} name={pick} isShadowAnimated={result === 'win'} playing={isPlaying}/>
                        <p>You picked</p>
                    </div>
                    <div className="end-game">
                        <GameCard isPlaying={isPlaying} name={housePick} isShadowAnimated={result === 'lose'} playing={isPlaying}/>
                        <p>The house picked</p>
                    </div>
                    <div className="results">
                    {
                        result && 
                        (<>
                            
                                <h2>You {result}</h2>
                                <WhiteButton onClick={() => handleTryAgain()}>Try Again</WhiteButton>
                            
                        </>)
                    }
                    </div>
                
                </>
            }
        </TableStyle>
    )
}