import React, { useState } from "react";
import Button from "./Button.js";
import Message from "./Message.js";
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handleNext() {
    setStep((s) => (s === 3 ? s : s + 1));
  }
  function handlePrevious() {
    setStep((s) => (s === 1 ? s : s - 1));
  }
  function handleBtn() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <button className="close" onClick={handleBtn}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : null}>1</div>
            <div className={step >= 2 ? "active" : null}>2</div>
            <div className={step >= 3 ? "active" : null}>3</div>
          </div>
          <Message step={step}>{messages[step - 1]}</Message>
          <div className="buttons">
            <Button onClick={handlePrevious} bgColor="#7050f2" textColor="#fff">
              Previous
            </Button>
            <Button onClick={handleNext} bgColor="#7050f2" textColor="#fff">
              Next
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
