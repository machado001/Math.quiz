import './GuideScreen.css'

import React from 'react'

const GuideScreen = ({ returnToStartScreen }) => {
  return (
    <div className='guide'>
      <h1>Guia de jogo</h1>
      <p>. inspirado no famoso Gênio Quiz de André Birnfeld, o jogo é bem simples:</p>
      <p>. <span id='acertou'>Acertou?</span> vai pra próxima pergunta!<span id='errou'> Errou?</span> Volta tudo! </p>
      <p>. são 12 perguntas de ensino fundamental / médio.</p>
      <button onClick={returnToStartScreen}>voltar</button>
    </div>
  )
}

export default GuideScreen