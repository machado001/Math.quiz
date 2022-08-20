import React from 'react'
import { questions } from '../data/questions'
import { useState } from 'react'
import './Question.css'
const stages = ['start', 'guide', 'game', 'end']

const Question = ({ setGameStage, i, setI }) => {

    const [currentQuestion, setCurrentQuestion] = useState(questions[i].q)
    const [currentResponse, setCurrentResponse] = useState(questions[i].r)
    const [currentImg, setCurrentImg] = useState(questions[i].img())
    const [currentId, setCurrentId] = useState(questions[i].id)

    const arrRespCerta = [currentResponse.certa]
    const arrRespErradas = [currentResponse.erradas]
    const CertaEErradasJuntos = [...arrRespCerta, ...arrRespErradas]
    const UnidimensionarOCertaEErradas = CertaEErradasJuntos.flat(2)
    const alternativas = ['a', 'b', 'c', 'd']

    const pegarCertoOuErradoAleatorio = () => {
        const arrLength = Math.floor(Math.random() * UnidimensionarOCertaEErradas.length)
        const pegarAlternativa = UnidimensionarOCertaEErradas.splice(arrLength, 1)
        return pegarAlternativa
    }

    const checkResp = ({ target }) => {
        if (target.innerHTML.includes(arrRespCerta[0])) {
            setI(prev => ++prev)
            setCurrentId(prev => ++prev)
            setCurrentQuestion(questions[i].q)
            setCurrentResponse(questions[i].r)
            setCurrentId(questions[i].id)
            setCurrentImg(questions[i].img())
            if (i === 12) {
                setGameStage(stages[3])
            }
        } else {
            setGameStage(stages[3])
        }
    }
    const checkImg = () => {
        if(questions[i].hasImg) return currentImg
    }

    return (
        <div className='question-div'>
            <p className="question">
                <span className="id-question">{currentId}</span>&#41;  <span>{currentQuestion}</span>
            </p>
            <div className="imgquestion">
                <img src={checkImg()} alt="" />
            </div>
            <ul className="choices">
                {alternativas.map((alternativa, i) => (
                    <li key={i} onClick={checkResp}>{alternativa}&#41;{pegarCertoOuErradoAleatorio()}</li>
                ))}
            </ul>
        </div>
    )
}
export default Question