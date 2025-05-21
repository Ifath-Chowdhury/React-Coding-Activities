import React, { useState } from 'react';

const DynamicBotManager = () => {
  const [bots, setBots] = useState([
    { id: '1', name: 'Email Bot', status: 'Active' },
    { id: '2', name: 'Data Bot', status: 'Inactive' }
  ]);

  const initialBot = { id: '', name: '', status: '' }
  const [newBot, setNewBot] = useState({ initialBot });

  const handleInputChange = (e) => {
    // Implement input change handler
    const value = e.target.value;
    setNewBot({...newBot, [e.target.name]: value});
  };

  const addBotToList = () => {
    // Implement add bot functionality
    // If any of the values are null, then raise an error
    if (newBot.id == '' || newBot.name == '' || newBot.status == '') {
        console.log("NO");
    } else {
        setBots([...bots, {id: newBot.id, name: newBot.name, status: newBot.status}])
    }

    // Reset newBot to initialBot to clear inputs
    setNewBot(initialBot);

  };

  const deleteBot = (id) => {
    // Implement delete bot functionality
    setBots(bots.filter((bot) => bot.id != id));
  };

  return (
     <div className='dynamic-bot-manager'>
       <h1>Dynamic Bot Manager </h1>

      {/* Add input fields for new bot */}
      <form>
        <input type='number' name = "id" value = {newBot.id} placeholder='Type bot id here' onChange={handleInputChange}></input>
        <label>{newBot.id}</label>
        <input type='text' name = "name" value = {newBot.name} placeholder='Type bot name here' onChange={handleInputChange}></input>
        <label>{newBot.name}</label>
        <input type='text' name = "status" value = {newBot.status} placeholder='Type bot status here' onChange={handleInputChange}></input>
        <label>{newBot.status}</label>
      </form>

      {/* Add button to add new bot */}
      <button onClick={() => addBotToList()}>Add Bot</button>

      {/* Display list of bots */}
       <ul>
        {
        /* Map through bots and display each one */
        bots.map(bot => 
        <li key = {bot.id}>{bot.id} | {bot.name} | {bot.status} <button onClick={() => deleteBot(bot.id)}>Delete bot</button> </li>)
        }
       </ul>
     </div>
  );
};

export default DynamicBotManager;