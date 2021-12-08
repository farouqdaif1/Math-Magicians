import React from 'react';
import './App.css';
import Calculator from './components/Calculator';

function Calculate() {
  return (
    <div>
      <h1>Math Magician</h1>
      <div className="cal-body">
        <div>
          <h2 className="cal-bodyh2">Let&apos;s do some math!</h2>
        </div>
        <div className="calculator-body">
          <Calculator />
        </div>
      </div>
    </div>
  );
}

export default Calculate;
