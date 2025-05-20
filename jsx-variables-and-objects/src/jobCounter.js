import React from 'react';

const JobCounter = () => {
  let jobCount = 0;

  const handleAddJob = () => {
    // Increment jobCount and log the new value to the console

    // This doesn't change the value displayed on screen because it only updates 
    // the value of the variable and not the whole component. Also, the component 
    // is not re-rendered, so the new value will not be displayed on screen.
    jobCount += 1;
    console.log(jobCount);
  }

  return (
    <div>
      <h1>Job Counter</h1>
      <p>Current Jobs: {jobCount}</p>
      <button onClick={handleAddJob}>Add Job</button>
    </div>
  );
};

export default JobCounter;