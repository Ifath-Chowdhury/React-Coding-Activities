import React from "react";
import JobItem from "./jobBoardJobItem";

const JobList = ({ jobs }) => {
    return (
        <div className="job-list">
            {
            /* Map through jobs and render JobItem components */
            jobs.map(job => <JobItem job={job} />)
            }
        </div>
    )
};

export default JobList;