import React from "react";

const JobItem = ({ job, onDelete }) => {
    // Conditional rendering based on job status

    return (
        <div className={`job-item-${job.status}`}>
            {/* Display job information here */}
            <h1>{job.name}</h1>
            <p>{job.status}</p>
            <button onClick={() => onDelete(job.id)}>Delete Job</button>
        </div>
    )
};

export default JobItem;