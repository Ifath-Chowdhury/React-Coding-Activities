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

  return (
    <div className="App">
      <header className="App-header">
        <JobForm />
      </header>

      <div className='job-column-section'>
        <JobColumn title="Jobs to start" image={ToDo} alt="To-do icon" jobs={jobs} status="to-do"/>
        <JobColumn title="In progress" image={InProgress} alt="In progress icon" jobs={jobs} status="in-progress"/>
        <JobColumn title="Completed jobs" image={Done} alt="Done icon" jobs={jobs} status="done"/>
      </div>
    </div>
  );
}

export default App;
