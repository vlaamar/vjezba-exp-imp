import "./App.css";

import Brojevi from "./Utilities/exp_default";

import { sum } from "./Utilities/exp_named";
import { mult } from "./Utilities/exp_named";
import { sub } from "./Utilities/exp_named";

function App() {
  return (
    <div className="App">
      <h2>Import putem default export modula</h2>
      <p>1. broj je: {Brojevi.num1}</p>
      <p>2. broj je: {Brojevi.num2}</p>
      <h2>Import putem named modula</h2>
      <p> Zbroj: {sum(Brojevi.num1, Brojevi.num2)}</p>
      <p> Umnožak: {mult(Brojevi.num1, Brojevi.num2)}</p>
      <p> Razlika: {sub(Brojevi.num1, Brojevi.num2)}</p>
    </div>
  );
}

export default App;
