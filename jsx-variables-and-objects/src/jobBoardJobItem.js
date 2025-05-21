import React from "react";

const JobItem = ({ job }) => {
    // Conditional rendering based on job status

    return (
        <div className={`job-item-${job.status}`}>
            {/* Display job information here */}
            <h1>{job.name}</h1>
            <p>{job.status}</p>
        </div>
    )
};

export default JobItem;