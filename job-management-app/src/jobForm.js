import React from 'react';
import './appForm.css';

const JobForm = ({ onAddJob }) => {
  return (
    <div className="form-header">
      <form method='post' onSubmit={onAddJob}>
        <input type="text" className="bot-input" placeholder="Enter the job" name='newName'/>

        <div className="form-details">
            <div className="bottom-line">
                <button className='tag'>Read Emails</button>
                <button className='tag'>Web Parsing</button>
                <button className='tag'>Send Emails</button>
            </div>
        </div>

        <select className='job-status' name='newStatus'>
            <option value="to-do">To do</option>
            <option value="in progress">In progress</option>
            <option value="done">Done</option>
        </select>

        <button type='submit' className='submit-data'>Add Job</button>
      </form>
    </div>
  );
};

export default JobForm;