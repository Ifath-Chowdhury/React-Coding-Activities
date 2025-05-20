import React, { useState } from 'react';

const DynamicForm = () => {
  // Initialize state here
  const [input, setInput] = useState("");

  const handleInputChange = (event) => {
    // Update state based on input change
    setInput(event.target.value);
    console.log(input);
  };

  const handleReset = () => {
    // Reset the input value
    setInput("");
  };

  return (
    <div>
      <h1>Dynamic Form</h1>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Type something..."
      />
      <button onClick={handleReset}>Reset</button>
      <div>
        <h2>Current Input:</h2>
        <p>{input}</p>
      </div>
    </div>
  );
};

export default DynamicForm;