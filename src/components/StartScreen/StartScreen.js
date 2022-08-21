import './StartScreen.css'

const StartScreen = ({ goToGame, goToGuide, heisenberg }) => {
    return (
        <div className='start-screen'>
            <h1>Math.quiz()</h1>
            <img id='start-img' src={heisenberg} alt="Walter Fucking White referências" />
            <div>
                <button onClick={goToGuide}>Guia</button>
                <button onClick={goToGame} >Iniciar!</button>
            </div>
        </div>
    )
}

export default StartScreen