import { useState } from "react"

const FlashCard = ({question, answer}) => {
    const [isFlipped, setIsFlipped] = useState(false)
  return (
    <div>   
        <h2>{isFlipped ? answer : question}</h2>
        <button onClick={() => setIsFlipped(!isFlipped)}>Flip card</button>
    </div>
  )
}

export default FlashCard