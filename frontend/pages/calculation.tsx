import { useState } from 'react';

const Calculation = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  const handleCalculation = (operation: string) => {
    if (operation === 'add') {
      setResult(num1 + num2);
    } else if (operation === 'subtract') {
      setResult(num1 - num2);
    } else if (operation === 'multiply') {
      setResult(num1 * num2);
    } else if (operation === 'divide') {
      if (num2 !== 0) setResult(num1 / num2);
      else alert("Cannot divide by zero");
    }
  };

  return (
    <div>
      <h1>Simple Calculation</h1>
      <input type="number" value={num1} onChange={(e) => setNum1(Number(e.target.value))} />
      <input type="number" value={num2} onChange={(e) => setNum2(Number(e.target.value))} />
      <button onClick={() => handleCalculation('add')}>Add</button>
      <button onClick={() => handleCalculation('subtract')}>Subtract</button>
      <button onClick={() => handleCalculation('multiply')}>Multiply</button>
      <button onClick={() => handleCalculation('divide')}>Divide</button>

      <h2>Result: {result}</h2>
    </div>
  );
};

export default Calculation;
