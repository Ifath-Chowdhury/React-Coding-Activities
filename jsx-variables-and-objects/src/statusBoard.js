import React from 'react';
import TicketInfo from './ticketInfo';
import completedImage from './completed.jpg';
import inProgressImage from './in-progress.jpg';
import failedImage from './failed.jpg';

const StatusBoard = () => {
  return (
    <div className="status-board">
      <TicketInfo result="completed" image={completedImage}>
        <p>Tickets Completed</p>
      </TicketInfo>
      
      <TicketInfo result="in-progress" image={inProgressImage}>
        <p>Tickets In Progress</p>
      </TicketInfo>
      
      <TicketInfo result="failed" image={failedImage}>
        <p>Tickets Failed</p>
      </TicketInfo>
    </div>
  );
};

export default StatusBoard;