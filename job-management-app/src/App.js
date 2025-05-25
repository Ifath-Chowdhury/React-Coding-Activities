import './App.css';
import { useState } from 'react';
import JobForm from './jobForm';
import JobColumn from './jobColumn';
import ToDo from './to-do.jpg';
import InProgress from './in-progress.jpg';
import Done from './done.jpg';
import CategorySelector from './categorySelector';

function App() {
  const [jobs, setJobs] = useState([
    { id: 1, name: 'Email Extractor', category: ['Read Emails'], status: 'to-do' },
    { id: 2, name: 'Data Analyzer', category: ['Web Parsing'], status: 'in-progress' },
    { id: 3, name: 'Report Generator', category: ['Send Emails'], status: 'done' }
  ]);

  const [jobDetails, setJobDetails] = useState({
    title: '',
    category: [],
    status: 'to-do'
  })

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  //let id = 3;

  const deleteJob = (id) => {
    //Delete job functionality
    setJobs(jobs.filter((job) => job.id !== id));
  };

  const updateJobStatus = (i, newStatus) => {
    //Update status functionality
    console.log(newStatus);
    setJobs(jobs.map(({ id, name, status }) => id === i ? {id, name, status: newStatus} : {id, name, status}));
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    console.log(value);

    if (value == '') {
      setError('Input field is required');
    } else {
      setError('');
    }
  }

  const handleCategoryChange = (category) => {
    // Implement category change functionality

    // Remove category from jobDetails.category array if already selected

    // add to jobDetails.category array if not selected

    setJobDetails({title: jobDetails.title, category: [...jobDetails.category, category], status: jobDetails.status});
  }

  const clearCategories = () => {
    //set jobDetails.category to 0
    setJobDetails({title: jobDetails.title, category: [], status: jobDetails.status})
  }

  const resetForm = () => {
    //
  }

  const addJob = (e) => {
    //Add job functionality
    e.preventDefault();

    //Log jobDetails state to console
    if (!error) {
      setSuccess('Job has been added successfully!')
      // Log jobDetails to console
      setJobDetails({title: e.target.newName.value, category: jobDetails.category, status: e.target.newStatus.value});
      console.log(jobDetails);
      setJobs([...jobs, {id: (jobs.length + 1), name: e.target.newName.value, category: jobDetails.category, status: jobDetails.status}]);
      document.getElementById('job-form').reset()
    } else {
      setSuccess('')
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <JobForm onAddJob={addJob} onInputChange={handleInputChange} onCategoryToggle={handleCategoryChange} jobDetails={jobDetails}/>
        <button onClick={clearCategories}>Clear current categories</button>
        {error && <p>{error}</p>}
        {success && <p>{success}</p>}
      </header>

      <div className='job-column-section'>
        <JobColumn title="Jobs to start" image={ToDo} alt="To-do icon" jobs={jobs} status="to-do" onDeleteJob={deleteJob} onUpdateStatus={updateJobStatus}/>
        <JobColumn title="In progress" image={InProgress} alt="In progress icon" jobs={jobs} status="in-progress" onDeleteJob={deleteJob} onUpdateStatus={updateJobStatus}/>
        <JobColumn title="Completed jobs" image={Done} alt="Done icon" jobs={jobs} status="done" onDeleteJob={deleteJob} onUpdateStatus={updateJobStatus}/>
      </div>

      <CategorySelector />
    </div>
  );
}

export default App;
