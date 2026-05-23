import { useState } from "react";

function FlashCard({ question, answer }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="flashcard"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <h2>
        {isFlipped ? answer : question}
      </h2>
    </div>
  );
}

export default FlashCard;