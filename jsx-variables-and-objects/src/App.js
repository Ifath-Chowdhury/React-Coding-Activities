import { useState } from 'react';
import './App.css';
import Header from './jobBoardHeader';
import Footer from './jobBoardFooter';
import JobList from './jobBoardJobList';
//import DynamicBotManager from './dynamicBotListManager';

function App() {
  const [showJobList, setShowJobList] = useState(true);

  const showOrHideList = () => {
    if (showJobList == true) {
      setShowJobList(false);
    } else {
      setShowJobList(true);
    }
  };

  const [jobs, setJobs] = useState([
    { id: 1, name: 'Email Extractor', status: 'running' },
    { id: 2, name: 'Data Analyzer', status: 'completed' },
    { id: 3, name: 'Report Generator', status: 'running' }
  ]);

  let id = 3;

  const addJob = () => {
    setJobs([...jobs, {id: id++, name: "Code writer", status: "running"}]);
  };

  const handleDeleteJob = (id) => {
    // Implement delete functionality
    setJobs(jobs.filter((job) => job.id != id));
  };

  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <button onClick={showOrHideList}>Show/Hide List</button>
        {showJobList ? <JobList jobs = {jobs} onDeleteJob={handleDeleteJob} /> : null}
        <button onClick={addJob}>Add job</button>
        <Footer />
      </header>
    </div>
  );

  /*return (
    <div className="App">
      <header className="App-header">
        <DynamicBotManager />
      </header>
    </div>
  );*/
}

export default App;
