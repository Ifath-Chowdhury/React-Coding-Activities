import React from 'react';

const JobBoard = () => {
    const companyName = "TechCorp";
    const jobCount = 0; // You can change this value to test different scenarios
    const getJobMessage = () => {
        // Implement this function
        // If jobCount is 0, return "No jobs to schedule today"
        // Otherwise, return "Jobs running today from bot: {jobCount}"
        if (jobCount == 0) {
            return "No jobs to schedule today";
        } else {
            return `Jobs running today from bot: ${jobCount}`;
        }
    }
    return (
    <div>
        <h1>{companyName}</h1>
        <p>{getJobMessage()}</p>
    </div>
 );
}

export default JobBoard;