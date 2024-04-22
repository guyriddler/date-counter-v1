import { useState } from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date();
  date.setDate(date.getDate() + count);
  console.log(date);

  function previousCount() {
    setCount((c) => c - step);
  }

  function nextCount() {
    setCount((c) => c + step);
  }

  return (
    <div>
      <h1>Date Counter Application!</h1>

      <div>
        <button
          onClick={() => setStep((c) => c - 1)}
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
        >
          -
        </button>
        <p className="countmessage">Step: {step}</p>
        <button
          onClick={() => setStep((c) => c + 1)}
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
        >
          +
        </button>
      </div>

      <div>
        <button
          onClick={previousCount}
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
        >
          -
        </button>
        <p className="countmessage">Count: {count}</p>
        <button
          onClick={nextCount}
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
        >
          +
        </button>
      </div>

      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </div>
  );
}
