import React from 'react';
import './jobColumnCss.css';
import JobStatus from './jobStatus';

const JobColumn = ({ title, image, alt, jobs, status, onDeleteJob, onUpdateStatus }) => {
  return (
    <div className="job-column">
      <h2 className="heading-status">
        {title}
        <img src={image} alt={alt} className="status-image" />
      </h2>
      {
      /* Add content for job items here */
      jobs.map(job => job.status == status ? <JobStatus job={job} handleDeleteJob={onDeleteJob} handleUpdateStatus={onUpdateStatus} /> : null)
      }
    </div>
  );
};

export default JobColumn;