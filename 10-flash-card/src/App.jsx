import flashcards from "./data/flashcards";
import FlashCard from "./components/FlashCard";

import { useState } from "react";
import ProgressBar from "./components/ProgressBar";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="app">
      <div className="container">
        <h1 className="title">Flash Card App</h1>

        <ProgressBar
          current={currentIndex}
          total={flashcards.length}
        />

        <FlashCard
          key={flashcards[currentIndex].id}
          question={flashcards[currentIndex].question}
          answer={flashcards[currentIndex].answer}
        />

        <div className="buttons">
          <button
            disabled={currentIndex === 0}
            onClick={() => {
              if (currentIndex > 0) {
                setCurrentIndex(currentIndex - 1);
              }
            }}
          >
            Previous
          </button>

          <button
            disabled={currentIndex === flashcards.length - 1}
            onClick={() => {
              if (currentIndex < flashcards.length - 1) {
                setCurrentIndex(currentIndex + 1);
              }
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default App