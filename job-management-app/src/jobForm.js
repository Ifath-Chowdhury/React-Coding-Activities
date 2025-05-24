import React from 'react';
import './appForm.css';

const JobForm = ({ onAddJob, onInputChange, onCategoryToggle, jobDetails }) => {
  const categories = ['Read Emails', 'Web Parsing', 'Send Emails'];
  console.log(categories);
  const statuses = ['to-do', 'in-progress', 'done'];

  return (
    <div className="form-header">
      <form method='post' onSubmit={onAddJob}>
        <input type="text" className="bot-input" placeholder="Enter the job" name='newName' onChange={onInputChange}/>

        <div className="form-details" onChange={onInputChange}>
          {categories.map(category => (
            <button type="button" className='tag' key={category} value={category} onClick={() => onCategoryToggle(category)}>{category}</button>
            ))}

          {/*<div className="bottom-line">
                <button className='tag'>Read Emails</button>
                <button className='tag'>Web Parsing</button>
                <button className='tag'>Send Emails</button>
            </div>*/}
        </div>

        <select className='job-status' name='newStatus' onChange={onInputChange}>
            {/*<option value="to-do">To do</option>
            <option value="in progress">In progress</option>
            <option value="done">Done</option>*/

            statuses.map((jobStatus) => (
              <option key={jobStatus} value={jobStatus}>{jobStatus}</option>
            ))}
        </select>

        <button type='submit' className='submit-data'>Add Job</button>
      </form>

      <p>Selected categories:</p>
      <ul>
        {jobDetails.category.map((category) => (
          <li>{category}</li>
        ))}
      </ul>
    </div>
  );
};

export default JobForm;