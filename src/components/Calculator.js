import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [total, setTotal] = useState(0);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);

  const handleClick = (value) => {
    const result = calculate({ total, next, operation }, value);
    setTotal(result.total);
    setNext(result.next);
    setOperation(result.operation);
  };

  return (
    <div className="cal">
      <div className="result">
        <p>
          {total}
          {operation}
          {next}
        </p>
      </div>
      <div className="buttons">
        <button type="button" id="AC" onClick={() => handleClick('AC')}>AC</button>
        <button type="button" id="+/-" onClick={() => handleClick('+/-')}>+/-</button>
        <button type="button" id="%" onClick={() => handleClick('%')}>%</button>
        <button type="button" id="&divide;" className="color" onClick={() => handleClick('÷')}>÷</button>
        <button type="button" id="7" onClick={() => handleClick('7')}>7</button>
        <button type="button" id="8" onClick={() => handleClick('8')}>8</button>
        <button type="button" id="9" onClick={() => handleClick('9')}>9</button>
        <button type="button" id="&times;" className="color" onClick={() => handleClick('x')}>x</button>
        <button type="button" id="4" onClick={() => handleClick('4')}>4</button>
        <button type="button" id="5" onClick={() => handleClick('5')}>5</button>
        <button type="button" id="6" onClick={() => handleClick('6')}>6</button>
        <button type="button" id="-" className="color" onClick={() => handleClick('-')}>-</button>
        <button type="button" id="1" onClick={() => handleClick('1')}>1</button>
        <button type="button" id="2" onClick={() => handleClick('2')}>2</button>
        <button type="button" id="3" onClick={() => handleClick('3')}>3</button>
        <button type="button" id="+" className="color" onClick={() => handleClick('+')}>+</button>
        <button type="button" id="0" className="two" onClick={() => handleClick('0')}>0</button>
        <button type="button" id="." onClick={() => handleClick('.')}>.</button>
        <button type="button" id="=" className="color" onClick={() => handleClick('=')}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
