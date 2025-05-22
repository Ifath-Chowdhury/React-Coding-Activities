import React from 'react';
import './appForm.css';

const JobForm = () => {
  return (
    <div className="form-header">
      <form>
        <input type="text" className="bot-input" placeholder="Enter the job"/>

        <div className="form-details">
            <div className="bottom-line">
                <button className='tag'>Read Emails</button>
                <button className='tag'>Web Parsing</button>
                <button className='tag'>Send Emails</button>
            </div>
        </div>

        <select className='job-status'>
            <option value="start">Start Process</option>
            <option value="running">Running</option>
            <option value="completed">Completed</option>
            <option value="start">Start Process</option>
        </select>

        <button type='submit' className='submit-data'>Add Job</button>
      </form>
    </div>
  );
};

export default JobForm;