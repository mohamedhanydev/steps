import React, { useState } from "react";
const messages = ["Learn React *", "Apply for jobs", "invest your new income"];
function App() {
  const [step, setStep] = useState(1);
  function handleNext() {
    setStep((s) => (s === 3 ? s : s + 1));
  }
  function handlePrevious() {
    setStep((s) => (s === 1 ? s : s - 1));
  }
  return (
    <div className="steps">
      <div className="numbers">
        <div className={step >= 1 ? "active" : null}>1</div>
        <div className={step >= 2 ? "active" : null}>2</div>
        <div className={step >= 3 ? "active" : null}>3</div>
      </div>
      <p className="message">
        Step {step}: {messages[step - 1]}
      </p>
      <div className="buttons">
        <button
          style={{ backgroundColor: "#7050f2", color: "#fff" }}
          onClick={handlePrevious}
        >
          Previous
        </button>
        <button
          style={{ backgroundColor: "#7050f2", color: "#fff" }}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
