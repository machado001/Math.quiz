import './End.css'

import failImg from '../assets/faustao.png'
import winImg from '../assets/winimg.png'
const End = ({ returnToStartScreen, i }) => {

    return (
        <div className='end'>
            <h1>{i === 13 ? (
                <>
                    <h1>Parabéns!</h1>
                    <img src={winImg} alt="Baby proud" />
                </>
            ) : (
                <>
                    <h1>Erroou!</h1>
                    <img src={failImg} alt="Faustao" />
                </>
            )}</h1>
            <button onClick={returnToStartScreen}>Voltar</button>
        </div>
    )
}

export default End