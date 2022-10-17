//components
import './App.css';
import End from './components/End/End';
import Game from './components/Game/Game';
import GuideScreen from './components/GuideScreen/GuideScreen';
import StartScreen from './components/StartScreen/StartScreen';
import Question from './components/Question/Question';

// hooks
import { useState } from 'react';

//images
//start game img (Game.js)
import heisenberg from "./components/assets/compressed-imgs/heisenberg.png"
//end game imgs (End.js)
import failImg from './components/assets/compressed-imgs/faustao.png'
import winImg from './components/assets/compressed-imgs/winimg.png'
//required images questions  (Question.js)
import ball from "./components/assets/compressed-imgs/img1.png"
import spongeBob from "./components/assets/compressed-imgs/img2.png"
import strawHat from "./components/assets/compressed-imgs/img7.png"
import triangle from "./components/assets/compressed-imgs/img10.png"
//random images to another questions (Question.js)
import thinking from "./components/assets/compressed-imgs/thinking.png"
import thinking2 from "./components/assets/compressed-imgs/thinking2.png"
import thinking3 from "./components/assets/compressed-imgs/thinking3.png"
import thinking4 from "./components/assets/compressed-imgs/thinking4.png"
import thinking5 from "./components/assets/compressed-imgs/thinking5.png"
import thinking6 from "./components/assets/compressed-imgs/thinking6.png"
const imgs = [ball, spongeBob, strawHat, triangle]
const thinkings = [thinking, thinking2, thinking3,thinking4,thinking5,thinking6]


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
      {gameStage === 'start' && <StartScreen goToGame={goToGame} goToGuide={goToGuide} heisenberg={heisenberg} />}
      {gameStage === 'guide' && <GuideScreen returnToStartScreen={returnToStartScreen} />}
      {gameStage === 'game' &&
        <Game>
          <Question
            gameStage={gameStage}
            setGameStage={setGameStage}
            i={i}
            setI={setI}
            imgs={imgs}
            thinkings={thinkings}
  
          />
        </Game>}
      {gameStage === 'end' && <End
       returnToStartScreen={returnToStartScreen}
        i={i}
        failImg={failImg}
        winImg={winImg} />}
    </div>
  );
}

export default App;


