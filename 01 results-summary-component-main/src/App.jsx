import Results from "./components/Results";
import Summary from "./components/Summary";
import { useState } from "react";
function App() {
  const [totalScore, setTotalScore] = useState(0);  

  return (
    <main className="grid grid-cols-1 md:grid-cols-2 items-center justify-center 
    max-w-3xl mx-auto rounded-2xl bg-white md:my-30 max-md:max-w-md">
      <Results totalScore={totalScore} />
      <Summary setTotalScore={setTotalScore} />
    </main>
  );
}

export default App;
