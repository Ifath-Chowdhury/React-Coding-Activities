import React from 'react';

const TicketInfo = ({ result, image, children }) => {
  return (
    <div className={`ticket-info-${result}`}>
      {/* Implement the ticket info display here */}
      <img src={image}></img>
      {children}
    </div>
  );
};

export default TicketInfo;