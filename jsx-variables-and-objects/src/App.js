import { useState } from 'react';
import './App.css';
import Header from './jobBoardHeader';
import Footer from './jobBoardFooter';
import JobList from './jobBoardJobList';

function App() {
  const [showJobList, setShowJobList] = useState(true);

  const showOrHideList = () => {
    if (showJobList == true) {
      setShowJobList(false);
    } else {
      setShowJobList(true);
    }
  };

  const [jobs, setJobs] = useState([{ id: 1, name: 'Email Extractor', status: 'running' },
    { id: 2, name: 'Data Analyzer', status: 'completed' },
    { id: 3, name: 'Report Generator', status: 'running' }]);


  /*const jobs = [
    { id: 1, name: 'Email Extractor', status: 'running' },
    { id: 2, name: 'Data Analyzer', status: 'completed' },
    { id: 3, name: 'Report Generator', status: 'running' }
  ];*/

  let id = 3;

  const addJob = () => {
    setJobs([...jobs, {id: id++, name: "Code writer", status: "running"}]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <button onClick={showOrHideList}>Show/Hide List</button>
        {showJobList ? <JobList jobs = {jobs} /> : null}
        <button onClick={addJob}>Add job</button>
        <Footer />
      </header>
    </div>
  );
}

export default App;
