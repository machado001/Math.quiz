import './StartScreen.css'
// import GuideScreen from './GuideScreen'
import { useState } from 'react'

const StartScreen = ({ goToGame, goToGuide }) => {

    return (
        <div>
            <h1>Math.quiz()</h1>
            <img id='start-img' src="/heisenberg.png" alt="Walter Fucking White referências" />
           <div>
                <button onClick={goToGuide}>Guia</button>
                <button onClick={goToGame} >Iniciar!</button>
           </div>
        </div>
    )
}

export default StartScreen