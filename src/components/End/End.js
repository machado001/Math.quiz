import './End.css'

const End = ({ returnToStartScreen, i, failImg, winImg }) => {

    return (
        <div className='end'>
            {i === 13 ? (
                <>
                    <h1>Parabéns!</h1>
                    <img style={{ width: '55%', left: '90px'}} src={winImg} alt="Baby proud" />
                </>
            ) : (
                <>
                    <h1>Erroou!</h1>
                    <img src={failImg} alt="Faustao" />
                </>
            )}
            <button onClick={returnToStartScreen}>Reiniciar</button>
        </div>
    )
}
export default End