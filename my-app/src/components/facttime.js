// 1
import React, { useState } from 'react';
import Header from './Header'; // Ensure this path is correct based on your project structure
import '../App.css'; // Adjusted path to correct the import error
import facts from '../data/facts.js'; // Adjusted import path for facts

const DailyFact = () => {
  const [factIndex, setFactIndex] = useState(null);

  const showFact = () => {
    if (factIndex === null) {
      const newIndex = getFactIndex();
      setFactIndex(newIndex);
    }
  };

  return (
    <div>
      <Header /> {/* Using self-closing tag for Header */}
      <h1>Click the Pizza to Get a Fact!</h1>
      {factIndex !== null && <div className="infoTextBox">{facts[factIndex]}</div>}
      <button className="pizzaButton" onClick={showFact}>Show Fact</button>
    </div>
  );
};

const getFactIndex = () => {
  return Math.floor(Math.random() * facts.length);
};

export default DailyFact;
