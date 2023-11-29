import getRandomFromArr from "../services/getRandomFromArr"
import phrases from '../utils/phrases.json'
import bgArr from '../utils/bgArr.json'

const ButtonPhrase = ( { setphraseRandom,  setbgApp }) => {

    const handleChangePhrase = () => {
        getRandomFromArr(phrases)
        setphraseRandom(getRandomFromArr(phrases))
        setbgApp(getRandomFromArr(bgArr))
    }

  return (
    <button
     className="app__btn"
     onClick={handleChangePhrase} 
     
    >
      Siguente Frase

    </button>
  )
}

export default ButtonPhrase