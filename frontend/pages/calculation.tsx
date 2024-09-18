import { useState } from 'react';

const Calculation = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operation, setOperation] = useState('+');
  const [result, setResult] = useState(null);

  const calculate = () => {
    let res;
    switch (operation) {
      case '+':
        res = num1 + num2;
        break;
      case '-':
        res = num1 - num2;
        break;
      case '*':
        res = num1 * num2;
        break;
      case '/':
        res = num2 !== 0 ? num1 / num2 : 'Cannot divide by zero';
        break;
      default:
        res = 'Invalid Operation';
    }
    setResult(res);
  };

  return (
    <div style={styles.container}>
      <div style={styles.calcBox}>
        <h1 style={styles.title}>Calculation</h1>
        <div style={styles.inputContainer}>
          <input
            type="number"
            value={num1}
            onChange={(e) => setNum1(parseFloat(e.target.value))}
            placeholder="Enter number 1"
            style={styles.input}
          />
          <select
            value={operation}
            onChange={(e) => setOperation(e.target.value)}
            style={styles.select}
          >
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
          </select>
          <input
            type="number"
            value={num2}
            onChange={(e) => setNum2(parseFloat(e.target.value))}
            placeholder="Enter number 2"
            style={styles.input}
          />
        </div>
        <button onClick={calculate} style={styles.button}>Calculate</button>
        {result !== null && <p style={styles.result}>Result: {result}</p>}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#FAFAFA',
  },
  calcBox: {
    width: '500px',
    padding: '40px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  title: {
    fontSize: '32px',
    color: '#163853',
    marginBottom: '20px',
    fontWeight: '700',
  },
  inputContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },
  input: {
    width: '120px',
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid #B0BEC5',
    backgroundColor: '#F1F8E9',
    fontSize: '16px',
    outline: 'none',
    transition: 'border 0.3s ease',
  },
  select: {
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid #B0BEC5',
    backgroundColor: '#F1F8E9',
    fontSize: '16px',
    outline: 'none',
    transition: 'border 0.3s ease',
  },
  button: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#00BF63',
    color: '#fff',
    fontSize: '18px',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  result: {
    marginTop: '20px',
    fontSize: '20px',
    color: '#4CAF50',
  },
};

export default Calculation;
