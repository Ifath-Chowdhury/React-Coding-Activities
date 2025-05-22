import React from "react";
import './jobColumnCss.css';

const JobStatus = ({ job, handleDeleteJob, handleUpdateStatus}) => {
    let updatedStatus = 'to-do';

    const submit = (e) => {
        updatedStatus = (e.target.value);
    }

    return (
        <div className='job-item' key={job.id}>
            <h2>{job.name}</h2>
            <p>{job.status}</p>
            <select onChange={submit}>
                <option value='to-do'>To do</option>
                <option value='in-progress'>In progress</option>
                <option value='done'>Done</option>
            </select>
            <button onClick={() => handleUpdateStatus(job.id, updatedStatus)}>Update status</button>
            <button onClick={() => handleDeleteJob(job.id)}>Delete job</button>
        </div>
    )
}

export default JobStatus;