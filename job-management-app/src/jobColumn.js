import React from 'react';
import './jobColumnCss.css';

const JobColumn = ({ title, image, alt, jobs, status }) => {
  return (
    <div className="job-column">
      <h2 className="heading-status">
        {title}
        <img src={image} alt={alt} className="status-image" />
      </h2>
      {
      /* Add content for job items here */
      jobs.map(job => job.status == status ? <p>{job.name}</p> : null)
      }
    </div>
  );
};

export default JobColumn;