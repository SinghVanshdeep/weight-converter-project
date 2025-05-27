import React, { useState } from "react";

function App() {
  const [kg, setKg] = useState("");
  const [pounds, setPounds] = useState("");

  function handleKgChange(e) {
    const weightKg = parseFloat(e.target.value);
    setKg(weightKg);
    setPounds((weightKg * 2.20462).toFixed(2));
  }

  function handlePoundsChange(e) {
    const weightPounds = parseFloat(e.target.value);
    setPounds(weightPounds);
    setKg((weightPounds / 2.20462).toFixed(2));
  }

  return (
    <div id="main">
      <div id="container">
        <p className="h1">Weight Converter</p>
        <p className="h5 mt-3">Enter your weight in:</p>
        <div id="input-container">
          <input
            type="number"
            placeholder="Kg"
            value={kg}
            onChange={handleKgChange}
          />
          <input
            type="number"
            placeholder="Pounds(lbs)"
            value={pounds}
            onChange={handlePoundsChange}
          />
        </div>
      </div>
    </div>
  );
}
export default App;
