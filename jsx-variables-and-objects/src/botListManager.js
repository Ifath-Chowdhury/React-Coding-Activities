import React, { useState } from 'react';

const BotListManager = () => {
  const [bots, setBots] = useState([
    { id: 1, name: "Email Extractor", botStatus: "Running", task: "Extracting emails" },
    { id: 2, name: "Notification Sender", botStatus: "Completed", task: "Sending notifications" },
    { id: 3, name: "Data Analyzer", botStatus: "Stopped", task: "Analyzing data" }
  ]);

  const triggerJob = (i) => {
    // Implement this function to change the status of the bot
    let newStatus = "I HATE react";

    //setBots(bots.map(bot => (bot.id === i ? {...bot, status: newStatus} : bot)));
    console.log("fuckign do something");

    setBots(bots.map(({ id, name, botStatus, task }) => id === i ? {id, name, botStatus: newStatus, task} : { id, name, botStatus, task }));

  };

  const normalStyle = {
    color: "green",
    fontSize: "1.5rem"
  };

  const changedStyle = {
    color: "red",
    fontSize: "3rem"
  }

  let newStatus = "I HATE react";

  const botListItem = bots.map((bot => <li key={bot.id} style={bot.botStatus == newStatus ? changedStyle : normalStyle}>{bot.id} | {bot.name} | {bot.botStatus} | {bot.task}<button onClick={() => triggerJob(bot.id)}>Trigger job</button></li>));

  return (
    <div className="bot-list-manager">
      <h1>Bot List Manager</h1>
      <ul>
        {/* Implement the mapping of bots here */
        botListItem}
      </ul>
    </div>
  );
};

export default BotListManager;