import React from 'react';

const StyledButton = () => {
  // Create your variables here
  const isDisabled = true; // Change this to true to see the button disabled

  // Create your style objects here
  const headerStyle = {
    textAlign: "center",
    color: "white",
    backgroundColor: "DodgerBlue"
  };

  const buttonStyle = {
    padding: "10px",
    backgroundColor: "DodgerBlue",
    color: "white",
    border: "5px solid",
    borderRadius: "20px 10px"
  };

  const disabledButtonStyle = {
    padding: "50px",
    backgroundColor: "white",
    color: "black",
    border: "2px solid",
    borderRadius: "7px"
  }

  return (
    <div>
      <h1 style={headerStyle}>Styled Button</h1>
      
      {isDisabled ? (
        <button style={buttonStyle} disabled={isDisabled}>Button</button>
      ) : (
        <button style={disabledButtonStyle} disabled={isDisabled}>Button</button>
      )}

    </div>
  );
};

export default StyledButton;