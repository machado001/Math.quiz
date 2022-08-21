import React from 'react'
import { questions } from '../../data/questions'
import { useState } from 'react'
import './Question.css'

const alternativas = ['a', 'b', 'c', 'd']
const stages = ['start', 'guide', 'game', 'end']

const Question = ({ setGameStage, i, setI,thinkings,imgs }) => {
    const [currentQuestion, setCurrentQuestion] = useState(questions[i].q)
    const [currentResponse, setCurrentResponse] = useState(questions[i].r)
    const [currentId, setCurrentId] = useState(questions[i].id)

    const arrRespCerta = [currentResponse.certa]
    const arrRespErradas = [currentResponse.erradas]
    const CertaEErradasJuntos = [...arrRespCerta, ...arrRespErradas]
    const UnidimensionarOCertaEErradas = CertaEErradasJuntos.flat(2)

    const pegarCertoOuErradoAleatorio = () => {
        const arrLength = Math.floor(Math.random() * UnidimensionarOCertaEErradas.length)
        const pegarAlternativa = UnidimensionarOCertaEErradas.splice(arrLength, 1)
        return pegarAlternativa
    }
    const checkImg = () => {
        if (i === 0) return imgs[0]
        if (i === 2) return imgs[1]
        if (i === 7) return imgs[2]
        if (i === 10) return imgs[3]
        else return thinkings[Math.round(Math.random() * thinkings.length)]
    }

    const checkResp = ({ target }) => {
        if (i === 0) setI(++i)
        if (target.innerHTML.includes(arrRespCerta[0])) {
            checkImg()
            setI(prev => ++prev)
            setCurrentId(prev => ++prev)
            setCurrentQuestion(questions[i].q)
            setCurrentResponse(questions[i].r)
            setCurrentId(questions[i].id)
            if (i === 12) {
                setGameStage(stages[3])
            }
        } else {
            setGameStage(stages[3])
        }
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