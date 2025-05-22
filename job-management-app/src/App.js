import './App.css';
import { useState } from 'react';
import JobForm from './jobForm';
import JobColumn from './jobColumn';
import ToDo from './to-do.jpg';
import InProgress from './in-progress.jpg';
import Done from './done.jpg';

function App() {
  const [jobs, setJobs] = useState([
    { id: 1, name: 'Email Extractor', status: 'to-do' },
    { id: 2, name: 'Data Analyzer', status: 'in-progress' },
    { id: 3, name: 'Report Generator', status: 'done' }
  ]);

  let id = 3;

  const deleteJob = (id) => {
    //Delete job functionality
    setJobs(jobs.filter((job) => job.id != id));
  };

  const updateJobStatus = (i, newStatus) => {
    //Update status functionality
    console.log(newStatus);
    setJobs(jobs.map(({ id, name, status }) => id === i ? {id, name, status: newStatus} : {id, name, status}));
  };

  const addJob = (e) => {
    //Add job functionality
    e.preventDefault();

    setJobs([...jobs, {id: id++, name: e.target.newName.value, status: e.target.newStatus.value}]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <JobForm onAddJob={addJob}/>
      </header>

      <div className='job-column-section'>
        <JobColumn title="Jobs to start" image={ToDo} alt="To-do icon" jobs={jobs} status="to-do" onDeleteJob={deleteJob} onUpdateStatus={updateJobStatus}/>
        <JobColumn title="In progress" image={InProgress} alt="In progress icon" jobs={jobs} status="in-progress" onDeleteJob={deleteJob} onUpdateStatus={updateJobStatus}/>
        <JobColumn title="Completed jobs" image={Done} alt="Done icon" jobs={jobs} status="done" onDeleteJob={deleteJob} onUpdateStatus={updateJobStatus}/>
      </div>
    </div>
  );
}

export default App;
