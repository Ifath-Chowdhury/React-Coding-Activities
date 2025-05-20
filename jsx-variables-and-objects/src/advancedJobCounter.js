import React from 'react';
import { useState } from 'react';

const AdvancedJobCounter = () => {
  // Initialize state here
  const [jobCount, setJobCount] = useState(0);

  // Implement these functions
  const handleAddJob = () => {
    // Add job logic
    setJobCount(jobCount + 1);
  };

  const handleRemoveJob = () => {
    // Remove job logic
    setJobCount(jobCount - 1);
  };

  const handleResetJobs = () => {
    // Reset jobs logic
    setJobCount(0);
  };

  // Logic to update message depending on how many messages there are
  

  return (
    <div>
      <h1>Advanced Job Counter</h1>
      {/* Display current job count */}
      <p>Current Jobs: {jobCount}</p>

      {/* Change message depending on number of jobs to do*/
      jobCount > 10 ? (<p>A lot of jobs to do</p>)
      :(jobCount > 0) ? (<p>There are some jobs to do</p>)
      : (<p>No jobs</p>)}
      
      {/* Add buttons for each action */}
      <button onClick={handleAddJob}>Add Job</button>
      <button onClick={handleRemoveJob}>Remove Job</button>
      <button onClick={handleResetJobs}>Reset Job</button>
    </div>
  );
};

export default AdvancedJobCounter;