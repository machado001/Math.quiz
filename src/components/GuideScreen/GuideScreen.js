import './GuideScreen.css'
import React from 'react'

const GuideScreen = ({ returnToStartScreen }) => {
  return (
    <div className='guide'>
      <h1>Guia de jogo</h1>
      <h2> Inspirado no famoso Gênio Quiz de André Birnfeld, o jogo é bem simples:</h2>
      <p> -São 12 perguntas de ensino fundamental e médio;</p>
      <p> -<span id='acertou'>Acertou?</span> vai pra próxima pergunta!<span id='errou'> Errou?</span> Volta tudo! </p>
      <p> -Há perguntas propositalmente difíceis. Não fique frustrado, o jogo quer que você erre mesmo.</p>
      <button onClick={returnToStartScreen}>voltar</button>
    </div>
  )
}

export default GuideScreen