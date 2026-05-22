import flashcards from "./data/flashcards";
import FlashCard from "./components/FlashCard";
function App() {
  return (
    <div>
      <h1>Flash Card App</h1>

      <FlashCard
        question={flashcards[0].question}
        answer={flashcards[0].answer}
      />
    </div>
  );
}

export default App;