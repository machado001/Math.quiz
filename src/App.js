//components
import './App.css';
import End from './components/End/End';
import Game from './components/Game/Game';
import GuideScreen from './components/GuideScreen/GuideScreen';
import StartScreen from './components/StartScreen/StartScreen';
import Question from './components/Question/Question';

// hooks
import { useState } from 'react';

function App() {
  const stages = ['start', 'guide', 'game', 'end']
  let [i, setI] = useState(0)

  const [gameStage, setGameStage] = useState(stages[0])
  const goToGame = () => {
    setI(0)
    console.log(i)
    setGameStage(stages[2])
  }

  const goToGuide = () => {
    setGameStage(stages[1])
  }
  const returnToStartScreen = () => {
    setGameStage(stages[0])
  }


  return (
    <div className="App">
      {gameStage === 'start' && <StartScreen goToGame={goToGame} goToGuide={goToGuide} />}
      {gameStage === 'guide' && <GuideScreen returnToStartScreen={returnToStartScreen} />}
      {gameStage === 'game' &&
        <Game>
          <Question
            gameStage={gameStage}
            setGameStage={setGameStage}
            i={i}
            setI={setI}
          />
        </Game>}
      {gameStage === 'end' && <End returnToStartScreen={returnToStartScreen} i={i} />}
    </div>
  );
}

export default App;


